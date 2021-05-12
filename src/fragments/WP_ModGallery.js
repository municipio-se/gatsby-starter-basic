import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModGallery on WP_ModGallery {
    gallery {
      modGalleryImages {
        ...WP_ImageMedium
      }
    }
  }
`;
