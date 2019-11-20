import React from "react";
import SbEditable from "storyblok-react";

import Components from "./components.js";

const Container = props => {
  let paddingTopClassname = "";
  switch (props.blok.padding_top) {
    case "no-margin":
      paddingTopClassname = "--pt-0";
      break;
    case "xs":
      paddingTopClassname = "--pt-xs";
      break;
    case "s":
      paddingTopClassname = "--pt-s";
      break;
    case "m":
      paddingTopClassname = "--pt-m";
      break;
    case "l":
      paddingTopClassname = "--pt-l";
      break;
    case "xl":
      paddingTopClassname = "--pt-xl";
      break;
    case "xxl":
      paddingTopClassname = "--pt-xxl";
      break;
    default:
  }

  let paddingBottomClassname = "";
  switch (props.blok.padding_bottom) {
    case "no-padding":
      paddingBottomClassname = "--pb-0";
      break;
    case "xs":
      paddingBottomClassname = "--pb-xs";
      break;
    case "s":
      paddingBottomClassname = "--pb-s";
      break;
    case "m":
      paddingBottomClassname = "--pb-m";
      break;
    case "l":
      paddingBottomClassname = "--pb-l";
      break;
    case "xl":
      paddingBottomClassname = "--pb-xl";
      break;
    case "xxl":
      paddingBottomClassname = "--pb-xxl";
      break;
    default:
  }

  let marginTopClassname = "";
  switch (props.blok.margin_top) {
    case "no-margin":
      marginTopClassname = "--mt-0";
      break;
    case "xs":
      marginTopClassname = "--mt-xs";
      break;
    case "s":
      marginTopClassname = "--mt-s";
      break;
    case "m":
      marginTopClassname = "--mt-m";
      break;
    case "l":
      marginTopClassname = "--mt-l";
      break;
    case "xl":
      marginTopClassname = "--mt-xl";
      break;
    case "xxl":
      marginTopClassname = "--mt-xxl";
      break;
    default:
  }

  let marginBottomClassname = "";
  switch (props.blok.margin_bottom) {
    case "no-padding":
      marginBottomClassname = "--mb-0";
      break;
    case "xs":
      marginBottomClassname = "--mb-xs";
      break;
    case "s":
      marginBottomClassname = "--mb-s";
      break;
    case "m":
      marginBottomClassname = "--mb-m";
      break;
    case "l":
      marginBottomClassname = "--mb-l";
      break;
    case "xl":
      marginBottomClassname = "--mb-xl";
      break;
    case "xxl":
      marginBottomClassname = "--mb-xxl";
      break;
    default:
  }

  return (
    <SbEditable content={props.blok}>
      <div
        style={{
          backgroundColor: props.blok.background && props.blok.background.color
        }}
        className={`${
          props.blok.fluid ? "t-container-fluid" : "t-container"
        } ${marginBottomClassname} ${marginTopClassname} ${paddingBottomClassname} ${paddingTopClassname}`}
      >
        {props.blok.content.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok
          })
        )}
      </div>
    </SbEditable>
  );
};

export default Container;
