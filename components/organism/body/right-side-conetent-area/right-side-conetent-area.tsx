import React from "react";
import LeftSideImageArea from "../left-side-image-area/left-side-image-area";

const RightSideArea = () => {
  return (
    <div>
      <h1 className="w-[100%] font-[900] text-[36px] text-main-colr-1 text-center lg:text-left">
        Our Story
      </h1>
      <div
        id="left-area"
        className="w-[100%] lg:w-[50%] lg:hidden block my-[20px]"
      >
        <LeftSideImageArea />
      </div>
      <p className="w-fit font-[400] text-[16px] mt-[5px] text-left">
        Timour’s Lounge Bar started with a vision to blend great flavors with
        memorable moments. Our crafted cocktails and globally inspired dishes
        aim to delight every guest. What began as an idea evolved into a spot
        where friends and newcomers gather for good food and conversation. Every
        dish and drink is crafted to help guests relax and create lasting
        memories. Our passion for detail makes Timour’s special, with each
        aspect designed to enhance your experience. At Timour’s Lounge Bar, it’s
        not just about the drinks or food; it’s about their perfect combination.
        Whether celebrating, relaxing, or enjoying the atmosphere, you’ll always
        feel at home.
      </p>
    </div>
  );
};

export default RightSideArea;
