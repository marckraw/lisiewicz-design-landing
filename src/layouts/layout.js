import React from "react";
import PropTypes from "prop-types";

import "../styles/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends React.Component {
  render() {
    return (
      console.log(this.props) || (
        <>
          <Header
            pageContext={this.props.pageContext && this.props.pageContext}
          />
          <div className="body">{this.props.children}</div>
          <Footer />
        </>
      )
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
