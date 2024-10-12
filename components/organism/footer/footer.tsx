import FooterLogo from "@/components/molecules/logo/footer-logo/footer-logo";
import useMediaQuery from "@/hooks/use-media-query";
import React from "react";

const Footer = () => {
  const isDesktop = useMediaQuery("(min-width: 904px)");
  return (
    <div className="lg:w-[800px] lg:mx-auto mx-[36px]">
      {!isDesktop && (
        <div className="w-fit mx-auto">
          <FooterLogo />
        </div>
      )}
      <div className="grid lg:grid-cols-3 tablet:grid-cols-2 col-span-1 gap-4">
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
            <p className="text-[16px] font-[600] text-main-colr-2">
              (+67) 54 255 846 441 <br />
              (+67) 54 525 846 781
            </p>

            <p className="text-[16px] font-[600]  text-main-colr-2 mt-5">
              Open : 04:00 pm
              <br />
              Close : 02:00 am
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
