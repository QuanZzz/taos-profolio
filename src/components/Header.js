import { Typography } from "./Typography";

export const Header = () => {
  return (
    <header className="text-black w-full px-5 md:px-20 py-5 z-10 mx-auto flex items-center justify-between bg-transparent">
      <a href="/" className="text-xl font-bold pr-1">
        <Typography
          bold={true}
          className="tracking-normal uppercase text-black md:text-lg font-brand mt-2"
        >
          Taos & Co.
        </Typography>
      </a>
      <nav className="bg-transparent flex items-center">
        <div className="flex items-center mx-auto w-full px-2.5">
          <a href="/how-it-works" className="hover:text-[#ba9974]">
            Contact us
          </a>
        </div>
      </nav>
    </header>
  );
};
