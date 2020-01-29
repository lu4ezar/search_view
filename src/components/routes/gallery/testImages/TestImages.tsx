import React from 'react';
import { images } from './testImages';
import './TestImages.scss';

type TestImages = {
  onClick: (value: string) => void;
  onSubmit: (value: string) => void;
};

const TestImages = ({ onClick, onSubmit }: TestImages) => {
  const buttons = images.map((imgLink, index) => (
    <button
      key={index}
      className="test-img-btn"
      onClick={() => onClick(imgLink)}
      onDoubleClick={() => onSubmit(imgLink)}
      title="click to set image link, double click to auto-submit"
    >{`#${index + 1}`}</button>
  ));
  return <div className="test-images">{buttons}</div>;
};

export default TestImages;
