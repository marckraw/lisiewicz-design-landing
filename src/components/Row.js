import React from "react";
import SbEditable from "storyblok-react";

import Components from "./components.js";

const Row = props => {
  return (
    <SbEditable content={props.blok}>
      <div className="t-row">
        {props.blok.columns.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok
          })
        )}
      </div>
    </SbEditable>
  );
};

export default Row;
