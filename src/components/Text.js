import React from "react";
import ReactMardown from "react-markdown";
import SbEditable from "storyblok-react";

const Text = props => {
  const Heading = `h${props.blok.title_size}`;

  return (
    <SbEditable content={props.blok}>
      <div>
        <Heading
          style={{ textAlign: props.blok.title_align }}
          className={
            props.blok.title_color === "dark" ? "--u-dark" : "--u-light"
          }
        >
          {props.blok.title}
        </Heading>
        <ReactMardown
          source={props.blok.content}
          className={
            props.blok.text_color === "dark" ? "--u-dark" : "--u-light"
          }
        />
      </div>
    </SbEditable>
  );
};

export default Text;
