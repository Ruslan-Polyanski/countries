import { gql } from "@apollo/client";

const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
        rtl
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;

export { ALL_COUNTRIES }