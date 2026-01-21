"use client";

import Image from "next/image";
import { useState } from "react";

interface EnterpriseImagesProps {
  name: string;
  imageUrls: string[];
}

const EnterpriseImages = ({ name, imageUrls }: EnterpriseImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div>
      <div className="h-[380px] w-full relative">
        <Image
          src={currentImage}
          alt={name}
          fill
          quality={100}
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-2 mt-5 ml-4">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex items-center justify-center rounded-md bg-accent h-[92px] lg:w-[180px]
                            ${
                              imageUrl === currentImage &&
                              "border-2 border-solid border-primary"
                            }
                        `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <div className="h-[90px] w-full relative">
              <Image
                src={imageUrl}
                alt={name}
                fill
                quality={100}
                className="object-cover rounded-md"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseImages;
