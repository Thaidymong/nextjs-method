import { QUERY_ARTICLE } from "@/graphql";
import { client } from "@/libs/apollo";
import { InferGetStaticPropsType } from "next";
import { Card } from "react-bootstrap";

type ArticleProps = {
  title: string;
  description: string;
  image: string;
  summary: string;
  created_at: string;
  category: {
    category_name: string;
  };
};

export default function ArticleDetail({ article }: { article: ArticleProps }) {
  const { title, description, summary, created_at, image, category } = article;
  const { category_name } = category;
  return (
    <>
      <Card className="bg-dark text-white m-4">
        <Card.Img src={image} alt="Card image" height="700px"/>
        <Card.ImgOverlay>
          <Card.Title style={{fontSize:'40px', color: 'black', fontWeight: "bold"}}>{title}</Card.Title>
          <Card.Title style={{fontSize:'30px', color: 'gray', padding: '15px 0'}}>{summary}</Card.Title>
          <Card.Text  style={{fontSize:'25px', color: 'black'}}>
           {description}
          </Card.Text>
          <Card.Text style={{fontSize:'30px', color: 'gray'}}>Posted on {created_at}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const { data } = await client.query({
    query: QUERY_ARTICLE,
    variables: {
      id: Number(id),
    },
    fetchPolicy: "no-cache",
  });
  return {
    props: {
      article: data.article,
    },
  };
}