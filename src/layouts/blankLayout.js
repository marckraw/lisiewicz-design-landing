import React from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";

class BlankLayout extends React.Component {
  render() {
    return <>{this.props.children}</>;
  }
}

BlankLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlankLayout;
