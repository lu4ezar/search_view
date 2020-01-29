import { useState, useCallback } from 'react';
import { getQuery } from './query';
import { Query } from '../../../types';

type Errors = {
  errors: Error;
};

type Data = {
  data: Query;
};

type GraphQLResponse = Data | Errors;

export type FetchData = {
  isLoading: boolean;
  data: Data | null;
  error: string | null;
};

const defaultInitialState = {
  isLoading: false,
  data: null as FetchData['data'],
  error: null as FetchData['error']
};

const useFetch = (id: string, initialState = defaultInitialState) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
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
      if ((response as Errors).errors) {
        throw new Error('GraphQL Error');
      }
      setData(response['data']);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
    return { isLoading, data, error };
  }, [data, error, id, isLoading]);
  return [{ isLoading, data, error }, fetchData];
};

export default useFetch;
