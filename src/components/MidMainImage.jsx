import React, { Container } from 'react';
import image from '../assets/img/lee-campbell-6njoEbtarec-unsplash.jpg';

export default function MidMainImage() {
  return (
    <div
      style={{
        maxHieght: '400px',
        overflow: 'hidden',
      }}
    >
      <img src={image} style={{ maxHeight: '100%' }} />
    </div>
  );
}
