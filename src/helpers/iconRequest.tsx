import Image from 'next/image';

import DefaultImg from "@/assets/icons/delivery-fast.svg";

interface Params {
  path: string;
  className?: string;
  alt?: string;
  width?:  number;
  height?:number;
};

const dynamicRequireImage = (path: string) => {
  let image;
  try {
    image = require(`@/assets/${path}`);
  } catch (error) {
    console.log(error,'first');
  }
  return image;
};


const IconRequest = ({ path, className, alt='', width=100, height=width}: Params) => {
  let picture = dynamicRequireImage(path);
  const picturePath = picture ? picture.default : DefaultImg;
  return <Image src={picturePath} className={className} alt={alt} width={width} height={height} />
};

export default IconRequest ;