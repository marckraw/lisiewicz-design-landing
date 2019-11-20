const Row = require("./row");

const spacingOptions = [
  {
    name: "no margin",
    value: "no-padding"
  },
  {
    name: "extra small",
    value: "xs"
  },
  {
    name: "small",
    value: "s"
  },
  {
    name: "medium",
    value: "m"
  },
  {
    name: "large",
    value: "l"
  },
  {
    name: "x large",
    value: "xl"
  },
  {
    name: "xx large",
    value: "xxl"
  }
];

module.exports = {
  display_name: "Container",
  is_nestable: true,
  is_root: false,
  name: "container",
  schema: {
    fluid: {
      type: "boolean"
    },
    padding_top: {
      type: "option",
      options: spacingOptions,
      default_value: "xxl",
      required: true
    },
    padding_bottom: {
      type: "option",
      options: spacingOptions,
      default_value: "xxl",
      required: true
    },
    margin_top: {
      type: "option",
      options: spacingOptions,
      default_value: "xxl",
      required: true
    },
    margin_bottom: {
      type: "option",
      options: spacingOptions,
      default_value: "xxl",
      required: true
    },
    background: {
      type: "custom",
      description: "",
      field_type: "native-color-picker",
      options: [],
      default_value: "",
      display_name: ""
    },
    content: {
      component_whitelist: [Row.name, "container"],
      restrict_components: true,
      type: "bloks"
    }
  }
};
