import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../shared/input';
import Card from '../card';
import useFetch, { FetchData } from '../utils/useFetch';

const Search = (props: RouteComponentProps) => {
  const [id, setId] = useState('');

  const [{ isLoading, data, error }, fetchData]: any = useFetch(id, {
    isLoading: false,
    data: null as FetchData['data'],
    error: null
  });

  const response = {
    isLoading,
    data,
    error
  };

  const onSubmit = () => {
    fetchData(id, null);
  };

  return (
    <div className="container">
      <div className="main-header">Search</div>
      <Input
        label="character id:"
        value={id}
        type="text"
        onChange={setId}
        onSubmit={onSubmit}
      />
      <Card {...response} />
    </div>
  );
};

export default Search;
