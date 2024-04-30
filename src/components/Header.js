import Link from "next/link";
import { Typography } from "./Typography";
import Image from "next/image";
import taosLogo from "../../public/images/taos-logo.jpg";

export const Header = () => {
  return (
    <header className="text-black w-full px-5 md:px-20 py-5 z-10 mx-auto flex items-center justify-between bg-transparent">
      <Link href="/">
        <Image
          className="-ml-4 hover:text-blue-500 cursor-pointer"
          src={taosLogo}
          alt="taos-design-logo"
          width={200}
          height={100}
        />
      </Link>
      <nav className="bg-transparent flex items-center">
        <div className="flex items-center mx-auto w-full px-2.5">
          <Link href="/contact-us" className="hover:text-[#ba9974]">
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  );
};
