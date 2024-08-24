import Image from "next/image";
import React from "react";

const LeftSideImageArea = () => {
  return (
    <div className="flex gap-2 w-full h-full items-center">
      <div className="image-1 w-[50%] relative h-full">
        <Image
          alt="img-2"
          src="/bodyImages/body-image-2.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="image-2 w-[50%] relative h-full">
        <Image
          alt="img-2"
          src="/bodyImages/body-image-1.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default LeftSideImageArea;
