import { useState } from "react";

export const useToggleArray = (
  length: number,
  initialValue: boolean
): [boolean[], (index: number) => void] => {
  const [array, setArray] = useState<boolean[]>(
    new Array(length).fill(initialValue)
  );

  const flipIndex = (index: number): void => {
    setArray((prev: boolean[]): boolean[] => {
      const clone: boolean[] = prev;
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
  return [toggle, (): void => setToggle((prev: boolean): boolean => !prev)];
};

export const useIncrement = (
  initialValue: number = 0
): [number, () => void] => {
  const [counter, setCounter] = useState(initialValue);
  const increment = (): void => setCounter((prev: number): number => prev + 1);
  return [counter, increment];
};

// Inspired by LabVIEW's "feedback node".
// Used to remember the history of a variable to a certain limit - maxFeedbacks.
export const useFeedback = <T>(
  maxFeedbacks: number
): [T[], (newData: T) => void] => {
  const [data, setData] = useState<T[]>([]);

  const addData = (newData: T): void => {
    setData((prev: T[]): T[] => {
      const clone: T[] = prev;
      if (clone.length >= maxFeedbacks) clone.shift();
      clone.push(newData);
      return clone;
    });
  };

  return [data, addData];
};
