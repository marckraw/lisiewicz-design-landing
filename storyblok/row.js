const Col = require("./column");

module.exports = {
  display_name: "Row",
  is_nestable: true,
  is_root: false,
  name: "row",
  schema: {
    columns_alignment: {
      type: "option",
      default_value: "left",
      options: [
        { name: "left", value: "auto" },
        { name: "right", value: "right" },
        { name: "center", value: "center" }
      ]
    },
    columns_vertical_alignment: {
      type: "option",
      default_value: "default",
      options: [
        { name: "default", value: "default" },
        { name: "space between", value: "space-between" }
      ]
    },
    columns: {
      component_whitelist: [Col.name],
      restrict_components: true,
      type: "bloks"
    }
  }
};
