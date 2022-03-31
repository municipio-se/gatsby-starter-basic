import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModFeedback on WP_ModFeedback {
    id
    # content
    # contentMedia {
    #   ...WP_ImageMedium
    # }
    # modFeedbackOptions {

    # }
  }
`;
