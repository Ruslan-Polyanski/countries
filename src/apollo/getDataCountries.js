import { gql } from "@apollo/client";

const ALL_COUNTRIES = gql`
  query {
    countries {
      name
      phone
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
      emoji
    }
  }
`;

export { ALL_COUNTRIES }