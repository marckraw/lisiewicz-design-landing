module.exports = {
  name: "product-card",
  display_name: "Product card",
  is_root: false,
  is_nestable: true,
  schema: {
    link: {
      type: "multilink",
      pos: 1,
      required: true
    },
    title: {
      type: "text",
      pos: 2
    },
    image: {
      type: "image",
      required: true,
      pos: 3
    }
  }
};
