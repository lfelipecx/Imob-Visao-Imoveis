/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

const BannerItem = (props: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full object-contain rounded-lg"
      sizes="100vw"
      quality={100}
      {...props}
    />
  );
};

export default BannerItem;