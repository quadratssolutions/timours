import FooterLogo from "@/components/molecules/logo/footer-logo/footer-logo";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[800px] mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-[16px] font-[600] text-main-colr-2">
            5 Thompson avenue , Cowes , <br />
            Victoria 3922
          </p>

          <p className="text-[16px] font-[600]  text-main-colr-2 mt-5">
          timoursloungebar@gmail.com 
          </p>
        </div>
        <div>
          <FooterLogo />
        </div>
        <div className="text-right">
          <p className="text-[16px] font-[600] text-main-colr-2">
            {/* (+67) 54 255 846 441 <br />
            (+67) 54 525 846 781 */}
          </p>

          <p className="text-[16px] font-[600]  text-main-colr-2 mt-5">
            Open : 04:00 pm
            <br />
            Close : 02:00 am
          </p>
        </div>
      </div>

      <div>
        <p className="w-fit mx-auto font-[400] text-[16px] text-center text-main-colr-2">
          Experience the art of relaxation with our expertly crafted drinks and
          gourmet dishes, served in a setting that invites you to unwind and
          savor life’s best moments
        </p>
      </div>
      <div className="mt-[40px]">
        <p className="w-fit mx-auto font-[400] text-[16px] text-center text-main-colr-2">
          @2024 Timour’s lounge bar. All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
