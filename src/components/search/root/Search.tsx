import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../input';
import Card from '../card';
import useFetch from '../utils/useFetch';

const Search = (props: RouteComponentProps) => {
  const [id, setId] = useState('');
  const [response, doFetch] = useFetch(id);
  return (
    <div className="container">
      <div className="main-header">Search</div>
      <Input
        label="character id:"
        value={id}
        type="text"
        onChange={setId}
        onSubmit={doFetch}
      />
      {id && <Card {...response} />}
    </div>
  );
};

export default Search;
