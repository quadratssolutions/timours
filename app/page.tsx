"use client";

import Logo from "@/components/molecules/logo/logo";
import Navbar from "@/components/molecules/navbar/navbar";
import BodyBottomArea from "@/components/organism/body/body-bottom-area/body-bottom-area";
import LeftSideImageArea from "@/components/organism/body/left-side-image-area/left-side-image-area";
import RightSideArea from "@/components/organism/body/right-side-conetent-area/right-side-conetent-area";
import Footer from "@/components/organism/footer/footer";
import Gallery from "@/components/organism/gallery/gallery";
import HeaderContent from "@/components/organism/header/header-content/header-contet";
import { useRef } from "react";

export default function Home() {
  const galeryRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <>
      <main className="mx-auto  max-w-[1200px]">
        <div
          id="header"
          className="mx-auto mt-[50px] mb-[100px] max-w-[1200px] flex items-center gap-10 justify-between"
        >
          <div>
            <Logo />
          </div>
          <div className="flex justify-center">
            <Navbar footerRef={footerRef} galaryRef={galeryRef} />
          </div>
        </div>

        <div id="header-content" className="my-[50px] mx-auto max-w-[900px]">
          <HeaderContent />
        </div>

        <div id="body-content w-full bg-[linear-gradient(180deg,rgba(51,51,51,0.5)_0%,rgba(22,46,74,0.8)_102.17%)]">
          <div
            id="area-1"
            className="flex gap-4  max-w-[1200px] bg-[#0B131A] p-[20px] bg-opacity-79"
          >
            <div id="left-area" className="w-[50%]">
              <LeftSideImageArea />
            </div>
            <div id="right-area" className="w-[50%]">
              <RightSideArea />
            </div>
          </div>
          <div id="area-2">
            <BodyBottomArea />
          </div>
        </div>

        <div id="gallery" ref={galeryRef}>
          <Gallery />
        </div>
        <div id="contact"></div>
      </main>
      <div
        id="footer"
        className="w-full bg-main-colr-1 py-[40px] mx-auto mt-[100px]"
        ref={footerRef}
      >
        <Footer />
      </div>
    </>
  );
}
