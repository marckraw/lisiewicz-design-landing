import React from "react";
import SbEditable from "storyblok-react";

import Components from "./components.js";

const FileList = props => {
  return (
    <SbEditable content={props.blok}>
      <div style={{ width: "100%" }}>
        <h2>{props.blok.title}</h2>
        {props.blok.files &&
          props.blok.files.map(blok =>
            React.createElement(Components(blok.component), {
              key: blok._uid,
              blok: blok
            })
          )}
      </div>
    </SbEditable>
  );
};

export default FileList;
