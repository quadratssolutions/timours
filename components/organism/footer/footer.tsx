import FooterLogo from "@/components/molecules/logo/footer-logo/footer-logo";
import useMediaQuery from "@/hooks/use-media-query";
import React from "react";

const Footer = () => {
  const isDesktop = useMediaQuery("(min-width: 904px)");

  const handleCallClick = () => {
    const telUri = `tel:(+61) 03 5926 6834`;
    window.location.href = telUri;
  };
  return (
    <div className="lg:w-[800px] lg:mx-auto mx-[36px]">
      {!isDesktop && (
        <div className="w-fit mx-auto">
          <FooterLogo />
        </div>
      )}
      <div className="grid lg:grid-cols-3 lg:items-center tablet:grid-cols-2 col-span-1 gap-4">
        <div className="col-span-1">
          <p className="text-[16px] text-center font-[600] text-main-colr-2">
            5 Thompson avenue , Cowes , <br />
            Victoria 3922
          </p>
          <p className="text-[16px] font-[600] text-center  text-main-colr-2 mt-5">
            timoursloungebar@gmail.com
          </p>
        </div>
        {isDesktop && (
          <div className="col-span-1">
            <FooterLogo />
          </div>
        )}
        <div className="col-span-1">
          <div className="lg:text-right text-center">
            <p className="text-[16px] font-[600] lg:text-right text-center text-main-colr-2 mt-5">
              {" "}
              Tel :{" "}
              <button
                className="text-[16px] font-[600] text-main-colr-2"
                onClick={() => handleCallClick()}
              >
                (+61) 03 5926 6834 <br />
              </button>
            </p>

            <p className="text-[16px] font-[600]  text-main-colr-2 mt-5">
              Sunday,Monday,Tuesday,Wednesday,Thursday <br />
              Open : 11:00 am
              <br />
              Close : 9:00 pm
            </p>

            <p className="text-[16px] font-[600]  text-main-colr-2 mt-5">
              Friday & Saturday <br />
              Open : 11:00 am
              <br />
              Close : 11:00 pm
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="w-fit mx-auto font-[400] text-[16px] text-center text-main-colr-2">
          Experience the art of relaxation with our expertly crafted drinks and
          gourmet dishes, served in a setting that invites you to unwind and
          savor life’s best moments
        </p>
      </div>

      <div className="mt-[40px]">
        <p className="mx-auto font-[400] text-[16px] text-center text-main-colr-2">
          @2024 Timour’s lounge bar. All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
