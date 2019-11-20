import React from "react";
import Layout from "./layout";
import BlankLayout from "./blankLayout";

export default ({ children, pageContext }) => {
  const settings = Object.assign({}, pageContext.globalSettings);
  if (typeof settings.content === "string") {
    settings.content = JSON.parse(settings.content);
  }

  if (pageContext.layout === "blank") {
    return (
      <BlankLayout pageContext={pageContext} settings={settings}>
        {children}
      </BlankLayout>
    );
  }
  return (
    <Layout pageContext={pageContext} settings={settings}>
      {children}
    </Layout>
  );
};
