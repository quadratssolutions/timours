"use client";

import Modal from "@/components/atoms/modal/modal";
import Logo from "@/components/molecules/logo/logo";
import Navbar from "@/components/molecules/navbar/navbar";
import BodyBottomArea from "@/components/organism/body/body-bottom-area/body-bottom-area";
import LeftSideImageArea from "@/components/organism/body/left-side-image-area/left-side-image-area";
import RightSideArea from "@/components/organism/body/right-side-conetent-area/right-side-conetent-area";
import Footer from "@/components/organism/footer/footer";
import Gallery from "@/components/organism/gallery/gallery";
import HeaderContent from "@/components/organism/header/header-content/header-contet";
import Menu from "@/components/organism/menu/menu";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [isModal, setIsModal] = useState(true);
  const galeryRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <>
      {isModal && (
        <Modal onClose={() => setIsModal(false)}>
          <div onClick={() => setIsModal(false)}>
            <div className="image-2 w-[80vw] max-w-[750px] max-h-[80vh] h-[calc(80vw*1.75)]">
              <Image
                alt="img-2"
                src="/gallery/invitation/invitation.jpg"
                layout="fill"
              />
            </div>
          </div>
        </Modal>
      )}
      <main className="lg:mx-auto lg:max-w-[1200px] mx-[36px] max-w-[100vw]">
        <div
          id="header"
          className="mx-auto mt-[50px] mb-[100px] md:flex items-center gap-10 justify-between"
        >
          <div className="md:block flex justify-center md:mb-0 mb-5">
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
            className="flex gap-4  bg-[#0B131A] p-[20px] bg-opacity-79"
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

        {/* menu area */}
        <div id="menu">
          <Menu />
        </div>
        {/* gallery area */}

        <div id="gallery" ref={galeryRef}>
          <Gallery />
        </div>
        <div id="contact"></div>
      </main>

      <div
        id="footer"
        className=" bg-main-colr-1 py-[40px] mt-[100px]"
        ref={footerRef}
      >
        <Footer />
      </div>
    </>
  );
}
