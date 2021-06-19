import React from "react";
import Vector from "../utils/Vector";

export interface FieldData {
  readonly imgSrc: string;
  readonly imgSize: Vector;
  readonly dimensions: Vector;
}

export interface Pose {
  readonly position: Vector;
}

// Accepts pose in meter unit and a field; returns new pose in pixels.
export type FieldConversion = (pose: Pose, field: FieldData) => Pose;

export interface FieldElement {
  readonly pose: Pose;
  readonly jsx: JSX.Element;
  readonly convertToField: FieldConversion;
}

interface FieldProps {
  readonly data: FieldData;
  readonly children?: FieldElement | FieldElement[];
}

const Field = (props: FieldProps): JSX.Element => {
  const fieldElements: JSX.Element | JSX.Element[] =
    props.children != undefined ? (
      Array.isArray(props.children) ? (
        props.children.map(
          (element: FieldElement, index: number): JSX.Element => (
            <element.jsx.type
              key={index}
              {...element.jsx.props}
              pose={element.convertToField(element.pose, props.data)}
            />
          )
        )
      ) : (
        <props.children.jsx.type
          {...props.children.jsx.props}
          pose={props.children.convertToField(props.children.pose, props.data)}
        />
      )
    ) : (
      <></>
    );

  return (
    <>
      <img
        src={props.data.imgSrc}
        alt="Image of field"
        style={{
          position: "absolute",
          width: props.data.imgSize.x,
          height: props.data.imgSize.y,
          zIndex: -100,
        }}
      />

      {fieldElements}
    </>
  );
};

export default Field;
