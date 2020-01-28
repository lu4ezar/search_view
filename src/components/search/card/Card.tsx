import React from 'react';
import Image from '../../gallery/image';
import './Card.scss';

const Card = ({ isLoading, data, error }: any) => {
  const render = () => {
    if (error) {
      return <div>{error.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (data.character) {
      const { name, species, status, origin, image } = data.character;
      return (
        <div className="card">
          <Image src={image} />
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
    }
    return null;
  };
  const content = render();
  return <div className="card-outer">{content}</div>;
};

export default Card;
