import { useState } from "react";
import Vector from "./Vector";

export const useToggleArray = (
  length: number,
  initialValue: boolean
): [boolean[], (index: number) => void] => {
  const [array, setArray] = useState<boolean[]>(
    new Array(length).fill(initialValue)
  );

  const flipIndex = (index: number): void => {
    setArray((prev: boolean[]): boolean[] => {
      const clone: boolean[] = [...prev];
      clone[index] = !clone[index];
      return clone;
    });
  };

  return [array, flipIndex];
};

export const useToggle = (
  initialValue: boolean = false
): [boolean, () => void] => {
  const [toggle, setToggle] = useState(initialValue);
  const flip = (): void => setToggle((prev: boolean): boolean => !prev);
  return [toggle, flip];
};

export const useCounter = (initialValue: number = 0): [number, () => void] => {
  const [counter, setCounter] = useState(initialValue);
  const increment = (): void => setCounter((prev: number): number => prev + 1);
  return [counter, increment];
};

export const useCounterVector = (): ((yValue: number) => Vector) => {
  const [, setCounter] = useState(0);

  return (yValue: number): Vector => {
    let v: Vector;
    setCounter((prev: number): number => {
      v = new Vector(prev, yValue);
      return prev + 1;
    });
    return v;
  };
};

/*
 * Inspired by LabVIEW's "feedback node".
 * Used to remember the history of a variable to a certain limit - maxFeedbacks.
 */
export const useFeedback = <T>(
  maxFeedbacks: number
): [T[], (newData: T) => void] => {
  const [data, setData] = useState<T[]>([]);

  const addData = (newData: T): void => {
    setData((prev: T[]): T[] => {
      /*
       * Cloning the array using spread operator in order to point to a different location in memory.
       * When putting back in an array with the same pointer, react doesn't re-render the component.
       */
      const clone: T[] = [...prev];
      if (clone.length >= maxFeedbacks) clone.shift();
      clone.push(newData);
      return clone;
    });
  };

  return [data, addData];
};

// Returns a function that calls setState, which causes the component to rerender
export const useRerender = (): (() => void) => {
  return useToggle()[1];
};
