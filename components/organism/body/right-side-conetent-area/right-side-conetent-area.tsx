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
        <span className="w-fit font-[600] text-[18px] mt-[5px] text-left">
          Welcome to Timour’s Lounge Bar
        </span>
        <br />
        <br /> Located in the heart of Cowes, Timour’s Lounge Bar offers a
        perfect coastal escape with beautiful views and a relaxed atmosphere.
        Enjoy a diverse menu of delicious food, from fresh seafood to gourmet
        burgers, and a selection of exotic cocktails and mocktails, like the
        refreshing Beach Breeze and Sunset Spritzer. As evening falls, the
        lounge comes alive with live music and entertainment, featuring local
        artists and a vibrant atmosphere. With stylish decor and a welcoming
        vibe, it’s the ideal spot to relax, celebrate, and savor coastal
        life—just steps from the beach.
      </p>
    </div>
  );
};

export default RightSideArea;
