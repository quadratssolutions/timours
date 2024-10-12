import GalleryLogo from "@/components/molecules/logo/gallery-logo/gallery-logo";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="lg:max-w-[1200px] max-w-[100vw] mx-auto p-[30px] mt-[50px]">
      <div className="mx-auto w-fit mb-[20px] lg:hidden block">
        <GalleryLogo />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div>
          <div className="image-2 w-[100%] relative  h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery1.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative   h-[512px] mt-[16px]">
            <Image
              alt="img-2"
              src="/gallery/gallery2.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <div className="mx-auto w-fit mb-[20px] hidden lg:block">
            <GalleryLogo />
          </div>
          <div className="image-2 w-[100%] relative  h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery3.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative   h-[512px] mt-[16px]">
            <Image
              alt="img-2"
              src="/gallery/gallery4.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="">
          <div className="image-2 w-[100%] relative  h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery5.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative   h-[512px] mt-[16px]">
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
