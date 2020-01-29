import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../shared/input';
import Card from '../card';
import useFetch, { UseFetch, FetchData } from '../utils/useFetch';

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
    (fetchData as FetchData)(id);
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
      <Card {...(data as UseFetch)} />
    </div>
  );
};

export default Search;
