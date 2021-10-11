import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModMenu on WP_ModMenu {
    menu {
      node {
        menuItems {
          nodes {
            connectedNode {
              node {
                ... on WP_Page {
                  id
                  contentType {
                    node {
                      name
                    }
                  }
                  ...WP_PageForMenuItem
                }
              }
            }
            label
            description
            url
            target
            ...WP_MenuItem
          }
        }
      }
    }
  }
`;
