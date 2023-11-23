import { GetStaticProps } from 'next';

export default function Home({ repositories, date }: any) {
  return (
    <>
      <h1>{date}</h1>;
      <ul>
        {repositories.map((repo: any) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.github.com/users/aninhaalmeidav/repos'
  );

  const data = await response.json();
  const repositoryNames = data.map((item: any) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
