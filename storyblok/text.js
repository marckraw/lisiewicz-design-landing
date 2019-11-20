module.exports = {
  name: "text",
  display_name: "Text",
  is_root: false,
  is_nestable: true,
  schema: {
    title: {
      type: "text",
      pos: 1
    },
    title_size: {
      type: "option",
      use_uuid: true,
      options: [
        {
          value: "6",
          name: "h6"
        },
        {
          value: "5",
          name: "h5"
        },
        {
          value: "4",
          name: "h4"
        },
        {
          value: "3",
          name: "h3"
        },
        {
          value: "2",
          name: "h2"
        },
        {
          value: "1",
          name: "h1"
        }
      ],
      default_value: "2",
      pos: 0
    },
    title_align: {
      type: "option",
      use_uuid: true,
      options: [
        {
          value: "left",
          name: "left"
        },
        {
          value: "center",
          name: "center"
        },
        {
          value: "right",
          name: "right"
        },
        {
          value: "justify",
          name: "justify"
        }
      ],
      default_value: "4",
      pos: 0
    },
    title_color: {
      type: "option",
      use_uuid: true,
      options: [
        {
          value: "light",
          name: "light"
        },
        {
          value: "dark",
          name: "dark"
        }
      ],
      default_value: "dark",
      pos: 2
    },
    text_color: {
      type: "option",
      use_uuid: true,
      options: [
        {
          value: "light",
          name: "light"
        },
        {
          value: "dark",
          name: "dark"
        }
      ],
      default_value: "dark",
      pos: 3
    },
    content: {
      type: "markdown",
      rich_markdown: false,
      pos: 4
    }
  }
};
