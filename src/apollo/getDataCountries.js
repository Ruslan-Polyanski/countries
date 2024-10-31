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
      code
    }
  }
`;

export { ALL_COUNTRIES }