import { useGithubUser } from "./UseGitHubUser";


export const GithubUser = ({username}) => {
  const { data } = useGithubUser(username);

  return (
    <>
      <h1>{data?.login}</h1>
      <h2>{data?.name}</h2>
      <img src={data?.avatar_url} />
    </>
  );
};