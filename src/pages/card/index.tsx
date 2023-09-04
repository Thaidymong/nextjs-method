import { QUERY_ARTICLES_CARD } from "@/graphql";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  const { data, loading } = useQuery(QUERY_ARTICLES_CARD);
  if (!data || loading) return <>Loading</>;
  return (
    <div className="row p-4">
      {data.articles.map((article: any) => {
        const { title, summary, description, image, created_at } = article;
        return (
          <>
            <div className="col-lg-4 col-md-6 clo-sm-12 pt-3">
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "25px", fontWeight: "bold" }}>
                    {title}
                  </Card.Title>
                  <Card.Title
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      padding: "10px 0",
                    }}
                  >
                    {summary}
                  </Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>Posted on {created_at}</Card.Text>
                  <Link
                    href={`/card/${article.id}`}
                    className="btn btn-success btn-sm"
                  >
                  Preview
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ImgOverlayExample;
