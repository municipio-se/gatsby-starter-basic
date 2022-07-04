import { loadConfig, truey } from "@municipio/gatsby-theme-basic";

loadConfig();

export const siteMetadata = {
  author: `Whitespace`,
  description: `Starter site using Wordpress and Gatsby`,
  siteUrl: process.env.GATSBY_SITE_URL,
  title: `Wordpress Starter`,
};

export const plugins = [
  "gatsby-plugin-remove-serviceworker",
  {
    resolve: `@municipio/gatsby-theme-basic`,
    options: {
      basePath: __dirname,
      fragmentsDir: `${__dirname}/src/fragments`,
      i18next: {
        defaultLanguage: "sv",
        languages: ["sv", "en"],
      },
      wp: {
        url: process.env.GATSBY_WORDPRESS_URL,
        refetchInterval: process.env.WORDPRESS_REFETCH_INTERVAL,
        nodesPerFetch: Number(process.env.WORDPRESS_NODES_PER_FETCH),
      },
      // XXX: postcss.config.js doesn’t seem to load automatically
      postCss: { postcssOptions: require("./postcss.config")() },
    },
  },
  {
    resolve: "@whitespace/gatsby-plugin-matomo",
    options: {
      routeChangeEventName: false,
      trackPageViews: true,
      mtmContainerId: process.env.MATOMO_CONTAINER_ID,
      mtmHost: process.env.MATOMO_HOST,
      includeInDevelopment: truey(process.env.MATOMO_INCLUDE_IN_DEV),
    },
  },
];
