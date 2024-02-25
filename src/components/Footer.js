import Image from "next/image";
import taosLogo from "../../public/images/taos-logo-light.jpg";
import { Typography } from "./Typography";
import { IconButton } from "./IconButton";
import { InstagramIcon } from "./Icons";
import { INSTAGRAM_LINK, EMAIL_LINK, COMPANY_WEBSITE } from "@/utils/urls";

export const Footer = () => {
  const handleOnClick = () => {
    window.open(INSTAGRAM_LINK, "_blank", "noreferrer");
  };

  return (
    <footer className="w-full py-4 bg-gray-900 text-center flex flex-col justify-center pb-10 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-48 sm:w-72">
          <Image
            className="-ml-3"
            src={taosLogo}
            alt="taos-design-logo"
            width={800}
            height={200}
          />
        </div>
        <Typography className="font-bold tracking-wide text-xs">
          {EMAIL_LINK} | {COMPANY_WEBSITE}
        </Typography>
        <IconButton
          icon={<InstagramIcon className="w-8 h-8 mt-2 md:mt-0 md:ml-4" />}
          onClick={handleOnClick}
          target="_blank"
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
