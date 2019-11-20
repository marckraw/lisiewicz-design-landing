const File = require("./file");

module.exports = {
  name: "file-list",
  display_name: "File list",
  is_root: false,
  is_nestable: true,
  schema: {
    title: {
      type: "text",
      pos: 1
    },
    files: {
      component_whitelist: [File.name],
      restrict_components: true,
      type: "bloks"
    }
  }
};
