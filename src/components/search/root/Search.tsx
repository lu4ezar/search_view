import React, { useState, useCallback } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../input';
import Card from '../card';
import { getQuery } from '../utils/query';
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
  data: Query | null;
  error: string | null;
};

const Search = (props: RouteComponentProps) => {
  const [id, setId] = useState('');
  const [{ isLoading, data, error }, setFetchState] = useState({
    isLoading: false,
    data: null as FetchData['data'],
    error: null
  });

  const fetchData = useCallback(async () => {
    setFetchState({ isLoading: true, data: null, error: null });
    try {
      const url = 'https://rickandmortyapi.com/graphql';
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: getQuery(id)
        })
      };
      let response = await fetch(url, options);
      const responseJSON: GraphQLResponse = await response.json();
      if ((responseJSON as Errors).errors) {
        throw new Error('GraphQL Error');
      }
      setFetchState({
        isLoading: false,
        data: (responseJSON as Data).data,
        error: null
      });
    } catch (err) {
      setFetchState({
        isLoading: false,
        data: null,
        error: err.message
      });
      return;
    }
    return [
      {
        isLoading,
        data,
        error
      },
      setId
    ];
  }, [data, error, id, isLoading]);

  const response = {
    isLoading,
    data,
    error
  };

  return (
    <div className="container">
      <div className="main-header">Search</div>
      <Input
        label="character id:"
        value={id}
        type="text"
        onChange={setId}
        onSubmit={fetchData}
      />
      <Card {...response} />
    </div>
  );
};

export default Search;
