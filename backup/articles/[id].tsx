import { Layout } from '@components/layouts/layout';
import { Box, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const Article = (props: any) => (
  <Layout>
    <Box minHeight="150vh">
      <motion.div layoutId="title">
        <Typography variant="h1">Header</Typography>
      </motion.div>
    </Box>
  </Layout>
);

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const articles: any[] = await res.json();

  const ids = articles.map((article) => article.id.toString());

  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );

  const article = await res.json();

  return {
    props: { article },
  };
}

export default Article;
