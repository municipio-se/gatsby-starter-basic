import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModContactsForSearch on WP_ModContacts {
    modContactsOptions {
      contacts {
        ... on WP_ModContacts_Modcontactsoptions_Contacts_Custom {
          address
          administrationUnit
          email
          firstName
          workTitle
          visitingAddress
          other
          # openingHours
          lastName
          socialMedia {
            media
            # url
          }
          phoneNumbers {
            number
            # type
          }
        }
      }
    }
  }
`;
