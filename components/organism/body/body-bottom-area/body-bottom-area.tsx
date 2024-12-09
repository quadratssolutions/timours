import BodyBottomSvg from "@/public/bodyImages/bodyBottomSvg";
import React from "react";

const BodyBottomArea = () => {
  return (
    <div className="mt-[50px]">
      <p className="w-fit mx-auto font-[400] text-[16px] mt-[20px] text-center">
        Timour’s Lounge Bar offers an unforgettable experience with a welcoming
        atmosphere and exceptional service, perfect for creating memorable
        moments with friends and family.
      </p>
      <div className="mx-auto w-auto !max-w-[100vw] mt-10 ">
        <BodyBottomSvg />
      </div>
    </div>
  );
};

export default BodyBottomArea;
