import { falsey, loadConfig, truey } from "@municipio/gatsby-theme-basic";
import { createProxyMiddleware } from "http-proxy-middleware";

export const developMiddleware = (app) => {
  if (process.env.API_PROXY) {
    app.use(
      "/api",
      createProxyMiddleware({
        target: process.env.API_PROXY,
        secure: falsey(process.env.API_PROXY_INSECURE),
        changeOrigin: true,
        followRedirects: false,
        // subscribe to http-proxy's error event
        onError: function onError(err, req, res) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Something went wrong.");
        },
      }),
    );
  }
};

loadConfig();

export const siteMetadata = {
  author: "Municipio",
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
      search: {
        paths: ["sok", "en/search"],
      },
      siteIndex: {
        includePage: ({ page }) =>
          page.context.contentType && page.context.contentType.name === "page",
        localizations: {
          sv: {
            basePath: "/innehall",
            alphabet: Array.from("abcdefghijklmnopqrstuvwxyzåäö"),
            restInitial: {
              path: "/övriga-sidor",
              title: "Övriga sidor",
              label: "#",
            },
          },
          en: {
            basePath: "/content",
            alphabet: Array.from("abcdefghijklmnopqrstuvwxyz"),
            restInitial: {
              path: "/other-pages",
              title: "Other pages",
              label: "#",
            },
          },
        },
      },
      enableSEO: true,
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
