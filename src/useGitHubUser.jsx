import { useEffect } from "react";
import { useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      const dataJSON = await response.json();
      setData(dataJSON);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return {data}
}