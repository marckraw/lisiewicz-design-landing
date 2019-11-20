import React from "react";
import SbEditable from "storyblok-react";

import Components from "./components.js";

const Column = props => {
  return (
    <SbEditable content={props.blok}>
      <div
        style={{
          paddingLeft: "8px",
          paddingRight: "8px"
        }}
        className={`t-col ${props.blok.s_size === "6" ? "-xs-6" : "-xs-12"}
         ${props.blok.m_size ? "-m-" + props.blok.m_size : "-m-auto"}
    ${props.blok.m_offset ? "-m-offset-" + props.blok.m_offset : ""}`}
      >
        {props.blok.components &&
          props.blok.components.map(blok =>
            React.createElement(Components(blok.component), {
              key: blok._uid,
              blok: blok
            })
          )}
      </div>
    </SbEditable>
  );
};

export default Column;
