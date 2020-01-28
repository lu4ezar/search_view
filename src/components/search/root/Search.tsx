import React, { useState, useCallback } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../input';
import Card from '../card';
import { getQuery } from '../utils/query';

const Search = (props: RouteComponentProps) => {
  const [id, setId] = useState('');
  const [{ isLoading, data, error }, setFetchState] = useState({
    isLoading: false,
    data: {},
    error: null
  });

  const fetchData = useCallback(async () => {
    setFetchState({ isLoading: true, data: {}, error: null });
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
      const responseJSON: any = await response.json();
      if (responseJSON.errors) {
        throw new Error('GraphQL Error');
      }
      setFetchState({
        isLoading: false,
        data: responseJSON.data,
        error: null
      });
    } catch (err) {
      throw new Error('oi');
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
