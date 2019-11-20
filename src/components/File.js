import React from "react";
import SbEditable from "storyblok-react";

import Components from "./components.js";

const File = props => {
  return (
    <SbEditable content={props.blok}>
      <div style={{ width: "100%" }}>
        <h2>{props.blok.kind}</h2>
      </div>
    </SbEditable>
  );
};

export default File;
