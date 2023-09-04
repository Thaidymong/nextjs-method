import { QUERY_ARTICLES_CARD } from "@/graphql";
import { client } from "@/libs/apollo";
import { Card } from "react-bootstrap";

type SecondProps = {
  title: string;
  summary: string;
  image: string;
  description: string;
  created_at: string;
  category_id: string;
};

export default function TestGetServerServerProps({
  articles,
}: {
  articles: any;
}) {
  return (
    <>
      <div className="row p-4">
        {articles.map((article: any) => {
          const { title, summary, image, description, created_at } = article;
          return (
            <>
              <div className="col-lg-4 col-md-6 clo-sm-12 pt-3">
                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{summary}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Title>Posted on, {created_at}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: QUERY_ARTICLES_CARD,
  });
  return {
    props: {
      articles: data.articles,
    },
  };
}
