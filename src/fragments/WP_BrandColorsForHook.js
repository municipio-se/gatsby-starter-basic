import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_BrandColorsForHook on WP {
    themeOptions {
      colorScheme {
        brandColors {
          key
          value
        }
      }
    }
  }
`;
