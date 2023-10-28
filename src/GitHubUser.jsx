import { useGithubUser } from "./UseGitHubUser";


export const GithubUser = ({username}) => {
  const {loading, error, data  } = useGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>{data?.login}</h1>
      <h2>{data?.name}</h2>
      <img src={data?.avatar_url} />
    </>
  );
};