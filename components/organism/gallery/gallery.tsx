import GalleryLogo from "@/components/molecules/logo/gallery-logo/gallery-logo";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="w-[1200px] mx-auto p-[30px] mt-[50px]">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="image-2 w-[100%] relative h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery1.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative  h-[512px] mt-[4px]">
            <Image
              alt="img-2"
              src="/gallery/gallery2.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <div className="mx-auto w-fit mb-[20px]">
            <GalleryLogo />
          </div>
          <div className="image-2 w-[100%] relative h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery3.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative  h-[512px] mt-[4px]">
            <Image
              alt="img-2"
              src="/gallery/gallery4.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <div className="image-2 w-[100%] relative h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery5.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative  h-[512px] mt-[4px]">
            <Image
              alt="img-2"
              src="/gallery/gallery6.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
