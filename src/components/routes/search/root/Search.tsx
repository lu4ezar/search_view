import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../../shared/input';
import Card from '../card';
import useFetch, { UseFetch, FetchData } from '../../../../hooks/useFetch';

const Search = (props: RouteComponentProps) => {
  const [id, setId] = useState('');

  const [data, fetchData] = useFetch();

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
