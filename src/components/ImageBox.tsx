// components/ImageBox.tsx
import React from 'react';
import Image from 'next/image';

type ImageBoxProps = {
  src: string;
  alt: string;
};

const ImageBox: React.FC<ImageBoxProps> = ({ src, alt }) => {
  return (
    <div className="w-24 h-24 border rounded-lg overflow-hidden relative">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-lg" />
    </div>
  );
};

export default ImageBox;
