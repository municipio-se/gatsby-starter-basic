import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModFileslistForSearch on WP_ModFileslist {
    modFileslistOptions {
      fileList {
        file {
          title
        }
      }
    }
  }
`;
