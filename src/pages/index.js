import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import Head from "next/head";
import "../app/globals.css";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { InstagramIcon, TiktokIcon, TwitterIcon } from "@/components/Icons";
import { MAIN_PROJECTS, projects } from "@/utils/projects";
import { GallerySection } from "@/components/GallerySection";
import { INSTAGRAM_LINK, TIKTOK_LINK, TWITTER_LINK } from "@/utils/urls";
import { HightlightSection } from "@/components/HighlightSection";
import favicon from "../../public/favicon.ico";

export default function Page() {
  const links = {
    instagramLink: INSTAGRAM_LINK,
    tiktokLink: TIKTOK_LINK,
    twitterLink: TWITTER_LINK,
  };

  const handleOnClick = (e) => {
    window.open(links[e.currentTarget.id], "_blank", "noreferrer");
  };

  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} sizes="any" />
        <title>TAOS&CO. ARCHITECTURE</title>
        <meta name="description" content="TAOS&CO. ARCHITECTURE" />
      </Head>
      <Layout>
        <Header />
        <div className="w-full h-screen flex flex-col bg-main">
          <div className="md:px-0 pt-20 md:pt-36 h-full flex flex-col mx-auto items-start text-white">
            <Typography
              semiBold={true}
              className="mx-8 font-montserrat text-3xl md:text-[44px]"
            >
              Luxury in Detail: Architectural Design and Rendering Excellence
            </Typography>
          </div>
          <div></div>
        </div>

        <div className="bg-transparent flex flex-col items-center font-montserrat">
          <div className="py-8 md:px-40 w-full flex flex-col md:flex-row items-center md:justify-between">
            <Typography
              semiBold={true}
              className="text-lg md:text-2xl md:pr-32 md:font-black"
            >
              Unveiling Our Latest Works
            </Typography>
            <div className="flex mt-8 md:mt-0 flex-row items-start text-black">
              <IconButton
                id="instagramLink"
                icon={
                  <InstagramIcon className="w-12 h-12 mt-2 md:mt-0 md:ml-4 mr-6 md:mr-0" />
                }
                onClick={(e) => handleOnClick(e)}
                target="_blank"
                className="hover:text-[#ba9974]"
              />
              <IconButton
                id="tiktokLink"
                icon={
                  <TiktokIcon className="w-12 h-12 mt-2 md:mt-0 md:ml-4 mr-6 md:mr-0" />
                }
                onClick={(e) => handleOnClick(e)}
                target="_blank"
                className="hover:text-[#ba9974]"
              />
              <IconButton
                id="twitterLink"
                icon={
                  <TwitterIcon className="w-12 h-12 mt-2 md:mt-0 md:ml-4 mr-6 md:mr-0" />
                }
                onClick={(e) => handleOnClick(e)}
                target="_blank"
                className="hover:text-[#ba9974]"
              />
            </div>
          </div>
        </div>

        <HightlightSection />

        <GallerySection projects={MAIN_PROJECTS} />
      </Layout>
    </div>
  );
}
