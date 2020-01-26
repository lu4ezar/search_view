import React from 'react';
import placeholder from '../../../icons/placeholder.png';
import './Image.scss';

const Image = ({ src }: { src: string }) => {
  const styles = {
    backgroundImage: `url(${src}), url(${placeholder})`
  };
  return (
    <div className="outer">
      <a
        href={src}
        target="_blank"
        rel="noreferrer noopener"
        title="view full image"
      >
        <div className="img" style={styles} />
      </a>
    </div>
  );
};

export default Image;
