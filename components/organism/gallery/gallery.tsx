import Modal from "@/components/atoms/modal/modal";
import GalleryLogo from "@/components/molecules/logo/gallery-logo/gallery-logo";
import useMediaQuery from "@/hooks/use-media-query";
import Image from "next/image";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  const isDesktop = useMediaQuery("(min-width: 904px)");
  const [isModal, setIsModal] = useState(false);
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
              src="/gallery/gallery3.jpg"
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
          <div className="image-2 w-[100%] relative h-[512px] mt-[16px]">
            {/* Image */}
            <Image
              alt="img-2"
              src="/gallery/gallery6.jpg"
              layout="fill"
              objectFit="cover"
            />

            {/* Overlay */}
            <div
              role="button"
              tabIndex={0}
              className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-80"
              onClick={() => setIsModal(true)}
            >
              <div className="flex items-center justify-center h-full">
                <div className="font-[600] text-[36px]">More...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModal && (
        <Modal
          className="!bg-transparent border-spacing-2 border-[4px]"
          onClose={() => setIsModal(false)}
        >
          <div>
            <div className="image-2 w-[80vw] max-w-[750px]">
              <Carousel
                className="max-h-[512px]"
                selectedItem={5}
                emulateTouch
                useKeyboardArrows
                showStatus={false}
              >
                <div className="image-2 w-[100%] relative h-full">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative h-[512px]">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery2.JPG"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative  h-full">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery3.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative h-[512px]">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery4.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative  h-full">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery5.JPG"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative h-[512px]">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery6.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative  h-full">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery7.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative h-[512px]">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery8.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="image-2 w-[100%] relative  h-full">
                  <Image
                    alt="img-2"
                    src="/gallery/gallery9.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
