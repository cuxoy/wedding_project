import { CirclePicker } from "react-color";
import { useState } from "react";
import styled from "styled-components";
export function Colors() {
  const [blockPickerColor, setBlockPickerColor] = useState("#173e5f");

  return (
    <div
      id="dressCode"
      className="color-wrapper"
      // style={{ color: blockPickerColor }}
    >
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="colorsTitle"
          style={{
            // color: blockPickerColor,
            fontSize: 40,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          Нам буде дуже приємно, якщо ви підтримаєте кольорову гамму нашого
          весілля
          <br />
          <br />
          Tиць 👇
        </div>
        <div
          className="blockpicker"
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <CirclePicker
            width={"auto"}
            colors={[
              "#406a52",
              "#cf9ece",
              "#a3cbf5",
              "#7c8ee5",
              "#4c5ba3",
              "#2d42a8",
            ]}
            circleSize={50}
            circleSpacing={10}
            color={blockPickerColor}
            styles={{ justifyContent: "center" }}
            onChange={(color) => {
              setBlockPickerColor(color.hex);
            }}
          />
        </div>
        <Heart color={blockPickerColor} />
      </div>
    </div>
  );
}

const Heart = styled.div`
  position: relative;
  width: 100px;
  height: 175px;
  background-color: ${({ color }) => color};
  box-shadow: -1px 0px 2px #444;
  -webkit-border-radius: 50px 50px 0 0;
  -moz-border-radius: 50px 50px 0 0;
  border-radius: 50px 50px 0 0;
  /* Определяем угол наклона */
  -webkit-transform: rotate(315deg);
  -moz-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  -o-transform: rotate(315deg);
  transform: rotate(315deg) translateY(-42px);
  margin-bottom: 10px;
  margin-top: 50px;

  &:before {
    position: absolute;
    width: 175px;
    height: 100px;
    left: 0;
    bottom: 0;
    content: "";
    background-color: ${({ color }) => color};
    box-shadow: 0px 3px 3px #444444;
    -webkit-border-radius: 50px 50px 0 0;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 0 50px 50px 0;
  }
`;

export default Colors;
