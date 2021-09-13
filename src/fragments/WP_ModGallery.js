import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModGallery on WP_ModGallery {
    modGalleryOptions {
      modGalleryImages {
        ...WP_ImageMedium
      }
    }
  }
`;
