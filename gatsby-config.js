const dotenv = require(dotenv);

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft"
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ["name", "full_slug", "content"],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type StoryblokEntry, list how to resolve the fields` values
          StoryblokEntry: {
            name: node => node.name,
            full_slug: node => node.full_slug,
            content: node => {
              //TODO: parse the story content and look for text fields to improve index file and avoid bloating
              //make sure to update the fields to index if necessary
              if (typeof node.content !== "object") {
                return JSON.parse(node.content);
              }
              return node.content;
            }
          }
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-plugin-sass"
  ]
};
