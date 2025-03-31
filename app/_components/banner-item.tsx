/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

const BannerItem = (props: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-52 w-full object-cover object-left rounded-lg md:h-[500px] md:w-[full] md:object-fill"
      sizes="100vw"
      quality={100}
      {...props}
    />
  );
};

export default BannerItem;