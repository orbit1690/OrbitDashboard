import React from "react";
import Vector from "../utils/Vector";

export interface FieldData {
  readonly imgSrc: string;
  readonly imgSize: Vector;
  readonly dimensions: Vector;
}

interface ElementWithPosition {
  readonly jsx: JSX.Element;
  readonly position: Vector;
}

interface FieldProps {
  readonly fieldData: FieldData;
  readonly children: ElementWithPosition[];
}

const Field = (props: FieldProps): JSX.Element => {
  return (
    <>
      <img
        src={props.fieldData.imgSrc}
        alt="Image of Field"
        style={{
          position: "absolute",
          width: props.fieldData.imgSize.x,
          height: props.fieldData.imgSize.y,
        }}
      />
      {...props.children.map(
        (el: ElementWithPosition, index: number): JSX.Element => {
          return React.cloneElement(el.jsx, {
            ...el.jsx.props,
            position: new Vector(
              (el.position.x / props.fieldData.dimensions.x) *
                props.fieldData.imgSize.x,

              props.fieldData.imgSize.y -
                ((el.position.y / props.fieldData.dimensions.y) *
                  props.fieldData.imgSize.y +
                  18)
            ),
            key: index,
          });
        }
      )}
    </>
  );
};

export default Field;
