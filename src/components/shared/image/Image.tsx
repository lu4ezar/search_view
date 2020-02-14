import React from 'react';
import './Image.scss';

const Image = ({ src }: { src: string }) => (
  <div className="img-outer">
    <a
      href={src}
      target="_blank"
      rel="noreferrer noopener"
      title="view full image"
    >
      <img key={src} className="img" src={src} alt="" />
    </a>
  </div>
);

export default Image;
