import { gql } from "@apollo/client";

export const QUERY_ARTICLES_CARD = gql`
  query articles{
    articles {
      id
      title
      summary
      image
      description
      created_at
      category_id
      category {
        id
        category_name
      }
    }
  }
`;

export const QUERY_ARTICLE = gql`
  query ($id: Int!) {
    article(id: $id) {
      id
      title
      summary
      description
      image
      created_at
      category {
        id
        category_name
      }
    }
  }
`;

