import Image from "next/image";
import taosLogo from "../../public/images/taos-logo-light.jpg";
import { Typography } from "./Typography";
import { IconButton } from "./IconButton";
import { InstagramIcon } from "./Icons";
import { INSTAGRAM_LINK, GMAIL_LINK } from "@/utils/urls";

export const Footer = () => {
  const handleOnClick = () => {
    window.location.href = INSTAGRAM_LINK;
  };

  return (
    <footer className="w-full py-4 bg-gray-900 text-center flex flex-col justify-center pb-10 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-48 sm:w-72">
          <Image
            className="-ml-3"
            src={taosLogo}
            alt="taos-design-logo"
            layout="responsive"
            width={800}
            height={200}
          />
        </div>
        <Typography className="font-bold tracking-wide text-xs">
          Email: {GMAIL_LINK}
        </Typography>
        <IconButton
          icon={<InstagramIcon className="w-8 h-8 mt-2 md:mt-0 md:ml-4" />}
          onClick={handleOnClick}
          className="hover:text-blue-500"
        />
      </div>
      <p className="text-xs text-gray-700 mt-4">
        © {new Date().getFullYear()} by TAOS ARCHITECTURAL VISUALIZATION. All
        rights reserved.
      </p>
    </footer>
  );
};
