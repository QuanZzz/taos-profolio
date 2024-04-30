import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import Head from "next/head";
import "../app/globals.css";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { InstagramIcon, TiktokIcon, TwitterIcon } from "@/components/Icons";
import { projects } from "@/utils/projects";
import { GallerySection } from "@/components/GallerySection";
import { INSTAGRAM_LINK, TIKTOK_LINK, TWITTER_LINK } from "@/utils/urls";
import { HightlightSection } from "@/components/HighlightSection";
import favicon from "../public/favicon.ico";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/x-icon" href={favicon} sizes="any" />
        <title>TAOS ARCHITECTURAL VISUALIZATION</title>
        <meta name="description" content="TAOS ARCHITECTURAL VISUALIZATION" />
      </Head>
      <Layout>
        <Header />
        <div className="w-full h-screen flex flex-col bg-main">
          <div className="px-3 md:px-0 h-full flex flex-col justify-center mx-auto items-start text-white">
            <Typography
              semiBold={true}
              className="font-rubik text-3xl md:text-6xl"
            >
              Summerfest Pavilion Color Studies
            </Typography>
            <Typography className="font-rubik text-base mt-4 md:text-xl">
              Jan 25, 2022
            </Typography>
          </div>
          <div></div>
        </div>

        <div className="bg-transparent flex flex-col items-center font-rubik">
          <div className="py-8 px-40 w-full flex flex-col md:flex-row items-center md:justify-between">
            <Typography
              semiBold={true}
              className="text-lg md:text-2xl md:pr-32 md:font-black"
            >
              Visualization Projects
            </Typography>
            <div className="flex mt-8 md:mt-0 flex-row md:flex-col items-start text-black">
              <div className="flex items-center">
                <IconButton
                  id="instagramLink"
                  icon={
                    <InstagramIcon className="w-12 h-12 mt-2 md:mt-0 md:ml-4 mr-6 md:mr-0" />
                  }
                  onClick={(e) => handleOnClick(e)}
                  target="_blank"
                  className="hover:text-blue-500"
                />
                <IconButton
                  id="tiktokLink"
                  icon={
                    <TiktokIcon className="w-12 h-12 mt-2 md:mt-0 md:ml-4 mr-6 md:mr-0" />
                  }
                  onClick={(e) => handleOnClick(e)}
                  target="_blank"
                  className="hover:text-blue-500"
                />
              </div>
              <IconButton
                id="twitterLink"
                icon={
                  <TwitterIcon className="w-12 h-12 mt-2 md:mt-4 md:ml-4 mr-6 md:mr-0" />
                }
                onClick={(e) => handleOnClick(e)}
                target="_blank"
                className="hover:text-blue-500"
              />
            </div>
          </div>
        </div>

        <HightlightSection />

        <GallerySection projects={projects} />
      </Layout>
    </div>
  );
}
