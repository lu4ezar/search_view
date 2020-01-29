import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../../shared/input';
import Image from '../../../shared/image';
import './Gallery.scss';
import TestImages from '../testImages';

const getImagesToShow = (images: string[]) =>
  images.map((image, index) => <Image key={index} src={image} />);

const Gallery = (props: RouteComponentProps) => {
  const [images, setImages] = useState([] as string[]);
  const [imageLink, setImageLink] = useState('');
  const addImageToGallery = (url: string) => {
    if (!url) return;
    setImages([url, ...images]);
    setImageLink('');
  };
  const gallery = getImagesToShow(images);
  return (
    <div className="container">
      <div className="main-header">Gallery</div>
      <Input
        label="Picture URL:"
        type="url"
        value={imageLink}
        onChange={setImageLink}
        onSubmit={addImageToGallery}
      />
      <TestImages onClick={setImageLink} onSubmit={addImageToGallery} />
      <div className="gallery">{gallery}</div>
    </div>
  );
};

export default Gallery;
