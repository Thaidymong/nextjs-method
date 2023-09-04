import { QUERY_ARTICLES_CARD } from "@/graphql";
import { client } from "@/libs/apollo";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Card } from "react-bootstrap";

type ArticleProps = {
  id: number;
  title: string;
  summary: string;
  image: string;
  description: string;
  created_at: string;
  category_id: string;
};

export default function First() {
  return (
    <>
      {/* <div className="row p-4">
        {articles.map((article: ArticleProps) => {
          const { id, title, summary, image, description, created_at } =
            article;
          return (
            <div key={id} className="col-lg-4 col-md-6 col-sm-12 pt-3">
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{id}</Card.Title>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{summary}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Card.Title>Posted on, {created_at}</Card.Title>
                  {/* <Link href={`/second/${id}`} passHref>
                    <a className="btn btn-success btn-sm">Preview On Second</a>
                  </Link> }
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

// export const getStaticProps: GetStaticProps<{articles: ArticleProps[]}> = async () => {

//   const { data } = await client.query({
//     query: QUERY_ARTICLES_CARD,
//   });

//   return {
//     props: {
//       articles: data.articles,
//     },
//   };
// };

// export async function getStaticProps(): Promise<{props: { articles: ArticleProps[] };}> {

//   const { data } = await client.query({
//     query: QUERY_ARTICLES_CARD,
//   });

//   return {
//     props: {
//       articles: data.articles,
//     },
//   };
// };
