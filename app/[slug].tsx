import { GetStaticProps, GetStaticPaths } from 'next';

export default function Home({ date }: any) {
  return <h1>{date}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4, //atualiza de 4 em 4 horas
  };
};
