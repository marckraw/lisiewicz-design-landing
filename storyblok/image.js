module.exports = {
  name: "image",
  display_name: "Image",
  is_root: false,
  is_nestable: true,
  schema: {
    alt: {
      type: "text",
      pos: 1
    },
    caption: {
      type: "text",
      pos: 2
    },
    image: {
      type: "image",
      pos: 3
    }
  }
};
