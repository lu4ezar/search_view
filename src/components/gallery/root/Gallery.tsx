import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Input from '../../input';
import Image from '../image';
import './Gallery.scss';
import TestImages from '../testImages/TestImages';

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
  const onImgLinkChange = (value: string) => {
    setImageLink(value);
  };
  return (
    <>
      <Input
        label="Enter picture URL"
        type="url"
        value={imageLink}
        onChange={setImageLink}
        onSubmit={addImageToGallery}
      />
      <TestImages onClick={onImgLinkChange} onSubmit={addImageToGallery} />
      <div className="gallery">{getImagesToShow(images)}</div>
    </>
  );
};

export default Gallery;
