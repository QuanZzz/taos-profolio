import Link from "next/link";
import { Typography } from "./Typography";
import Image from "next/image";
import taosLogo from "../../public/images/taos-logo.jpg";

export const Header = () => {
  return (
    <header className="text-black w-full px-5 md:px-20 py-5 z-10 mx-auto flex items-center justify-between bg-transparent">
      <Link href="/">
        <Image
          className="-ml-4 hover:text-blue-500 cursor-pointer w-40 h-20 md:w-52 md:h-28"
          src={taosLogo}
          alt="taos-design-logo"
          layout="intrinsic"
          // width={200}
          // height={100}
        />
      </Link>
      <div className="flex items-center">
        <nav className="bg-transparent flex items-center">
          <div className="flex items-center mx-auto w-full px-2.5 text-xs md:text-base md:mr-4">
            <Link href="/contact-us" className="hover:text-[#ba9974]">
              Contact us
            </Link>
          </div>
        </nav>
        <nav className="bg-transparent flex items-center">
          <div className="flex items-center mx-auto w-full px-2.5 text-xs md:text-base">
            <Link href="/projects" className="hover:text-[#ba9974]">
              Projects
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
