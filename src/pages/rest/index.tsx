export default function RestApi({ news }: any) {
  //   console.log(news);
  return (
    <>
      {news.data.map((item: any) => {
        return <p key={item.id}>{item.id}</p>;
      })}
    </>
  );
}
// export async function getServerSideProps(params: any) {
//   const res = await fetch("https://b-editor.blockerium.com/api/news");
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       news: data,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch("https://b-editor.blockerium.com/api/news");
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
}
