import GalleryLogo from "@/components/molecules/logo/gallery-logo/gallery-logo";
import useMediaQuery from "@/hooks/use-media-query";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  const isDesktop = useMediaQuery("(min-width: 904px)");
  return (
    <div className="lg:max-w-[1200px] max-w-[100vw] mx-auto p-[30px] mt-[50px]">
      {!isDesktop && (
        <div className="mx-auto w-fit mb-[20px]">
          <GalleryLogo />
        </div>
      )}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div>
          <div className="image-2 w-[100%] relative  h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery1.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative   h-[512px] mt-[16px]">
            <Image
              alt="img-2"
              src="/gallery/gallery2.JPG"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          {isDesktop && (
            <div className="mx-auto w-fit mb-[20px]">
              <GalleryLogo />
            </div>
          )}
          <div className="image-2 w-[100%] relative  h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery3.JPG"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative   h-[512px] mt-[16px]">
            <Image
              alt="img-2"
              src="/gallery/gallery4.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="">
          <div className="image-2 w-[100%] relative  h-[512px]">
            <Image
              alt="img-2"
              src="/gallery/gallery5.JPG"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="image-2 w-[100%] relative   h-[512px] mt-[16px]">
            <Image
              alt="img-2"
              src="/gallery/gallery6.jpg"
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
