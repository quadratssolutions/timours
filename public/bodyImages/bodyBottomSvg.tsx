import React from "react";

function BodyBottomSvg() {
  return (
    <div
      className="lg:!max-w-[877px] mx-auto w-fit"
      style={{ maxWidth: "calc(100vw - 75px)" }}
    >
      <img
        alt="img-body-btm"
        src="/bodyImages/bodyBottom.png"
        style={{ objectFit: "contain", height: "102px" }}
        // layout="fill"
        // objectFit="cover"
      />
    </div>
  );
}

export default BodyBottomSvg;
