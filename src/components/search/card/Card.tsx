import React from 'react';
import Image from '../../shared/image';
import './Card.scss';
import { FetchData } from '../utils/useFetch';
import { Character, Query } from '../../../types';

const Card = ({ isLoading, data, error }: FetchData) => {
  const render = () => {
    switch (true) {
      case !!error:
        return <div>{error}</div>;
      case isLoading:
        return <div>Loading...</div>;
      case data != null:
        const { name, species, status, origin, image } = (data as Query)
          .character as Character;
        return (
          <div className="card">
            <Image src={image as string} />
            <div className="info">
              <h4>{name}</h4>
              <p>
                <span>Species: </span>
                {species}
              </p>
              <p>
                <span>Status: </span>
                {status}
              </p>
              <p>
                <span>Origin: </span>
                {origin?.name}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const content = render();
  return <div className="card-outer">{content}</div>;
};

export default Card;
