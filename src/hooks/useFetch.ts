import { useState, useCallback } from 'react';
import { getQuery } from '../queries/characterById';
import { FetchData } from '../types/UseFetch';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData: FetchData = useCallback(
    async id => {
      setIsLoading(true);
      setError(null);
      try {
        const url = 'https://rickandmortyapi.com/graphql';
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: getQuery(id)
          })
        };
        const response = await fetch(url, options).then(res => res.json());
        if (response['errors']) {
          throw new Error('GraphQL Error');
        }
        setData(response['data']);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
      return { isLoading, data, error };
    },
    [data, error, isLoading]
  );
  return [{ isLoading, data, error }, fetchData];
};

export default useFetch;
