import React, { RefObject } from "react";
import styles from "./navbar.module.css";

export default function Navbar({
  galaryRef,
  footerRef,
}: Readonly<{
  galaryRef: RefObject<HTMLDivElement>;
  footerRef: RefObject<HTMLDivElement>;
}>) {
  const scrollTo = (ref: RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current?.offsetTop ?? 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="flex justify-center gap-[20px] mx-auto">
      <button
        className={`${styles.navBarBtn} bg-none items-center underline-offset-auto`}
      >
        Home
      </button>
      <button
        className={`${styles.navBarBtn} bg-none items-center underline-offset-auto`}
        onClick={() => scrollTo(galaryRef)}
      >
        Galary
      </button>
      <button
        className={`${styles.navBarBtn} bg-none items-center underline-offset-auto`}
        onClick={() => scrollTo(footerRef)}
      >
        Contact Us
      </button>
    </nav>
  );
}
