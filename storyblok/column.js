module.exports = {
  display_name: "Column",
  is_nestable: true,
  is_root: false,
  name: "column",
  preview_field: "m_size",
  schema: {
    s_size: {
      type: "option",
      display_name: "Column size on mobile",
      default_value: "auto",
      options: [
        { name: "stacked", value: "auto" },
        { name: "50%", value: "6" }
      ]
    },
    m_size: {
      type: "option",
      display_name: "Column size on desktop",
      default_value: "auto",
      options: [
        { name: "1", value: "1" },
        { name: "2", value: "2" },
        { name: "3", value: "3" },
        { name: "4", value: "4" },
        { name: "5", value: "5" },
        { name: "6", value: "6" },
        { name: "7", value: "7" },
        { name: "8", value: "8" },
        { name: "9", value: "9" },
        { name: "10", value: "10" },
        { name: "11", value: "11" },
        { name: "12", value: "12" },
        { name: "auto", value: "auto" }
      ]
    },
    m_offset: {
      type: "option",
      display_name: "Column offset on desktop",
      default_value: "0",
      options: [
        { name: "0", value: "0" },
        { name: "1", value: "1" },
        { name: "2", value: "2" },
        { name: "3", value: "3" },
        { name: "4", value: "4" },
        { name: "5", value: "5" },
        { name: "6", value: "6" },
        { name: "7", value: "7" },
        { name: "8", value: "8" },
        { name: "9", value: "9" },
        { name: "10", value: "10" },
        { name: "11", value: "11" },
        { name: "12", value: "12" }
      ]
    },
    components: {
      restrict_components: false,
      type: "bloks",
      maximum: 1
    }
  }
};
