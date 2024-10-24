import MenuLogo from "@/components/molecules/logo/menu-logo/menu-logo";
import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="">
      <div className="mx-auto w-fit mt-[48px] mb-[24px]">
        <MenuLogo />
      </div>
      <div className="grid lg:grid-cols-1 grid-cols-1 gap-4">
        <div className="col-span-1">
          <div className="image-2 w-[80vw] mx-auto">
            <img alt="img-2" src="/gallery/menu/food.jpg" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="image-2 w-[80vw] mx-auto">
            <img alt="img-2" src="/gallery/menu/drinks.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
