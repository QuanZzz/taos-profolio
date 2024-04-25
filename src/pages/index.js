import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import Head from "next/head";
import "../app/globals.css";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/Icons";
import { projects } from "@/utils/projects";
import { GalleryCard } from "@/components/GallaryCard";
import { GallerySection } from "@/components/GallerySection";

export default function Page() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/favicon.ico"
          sizes="any"
        />
        <title>TAOS ARCHITECTURAL VISUALIZATION</title>
        <meta name="description" content="TAOS ARCHITECTURAL VISUALIZATION" />
      </Head>
      <Layout>
        <Header />
        <div className="w-full h-screen flex flex-col bg-main ">
          <div className="h-full flex flex-col justify-center mx-auto items-start text-white">
            <Typography bold={true} className="font-brand text-3xl md:text-7xl">
              Summerfest Pavilion Color Studies
            </Typography>
            <Typography className="font-brand text-base mt-4 md:text-xl">
              Jan 25, 2022
            </Typography>
          </div>
          <div></div>
        </div>

        <div className="bg-transparent flex flex-col items-center">
          <div className="py-8 px-40 w-full flex flex-col md:flex-row items-center md:justify-between">
            <Typography className="text-lg md:text-2xl font-bold md:pr-32 md:font-black">
              Visualization Projects
            </Typography>
            <div className="flex mt-8 md:mt-0 flex-row md:flex-col items-start text-black">
              <div className="flex items-center">
                <IconButton
                  icon={
                    <InstagramIcon className="w-12 h-12 mt-2 md:mt-0 md:ml-4 mr-6 md:mr-0" />
                  }
                  // onClick={handleOnClick}
                  target="_blank"
                  className="hover:text-blue-500"
                />
                <IconButton
                  icon={
                    <FacebookIcon className="w-12 h-12 mt-2 md:mt-0 md:ml-4 mr-6 md:mr-0" />
                  }
                  // onClick={handleOnClick}
                  target="_blank"
                  className="hover:text-blue-500"
                />
              </div>
              <IconButton
                icon={
                  <TwitterIcon className="w-12 h-12 mt-2 md:mt-4 md:ml-4 mr-6 md:mr-0" />
                }
                // onClick={handleOnClick}
                target="_blank"
                className="hover:text-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-[#e6f3f4] md:pl-10">
          <div className="py-16 md:py-0 w-full md:w-3/12 min-w-300[px] md:max-w-[400px] md:px-5 flex flex-col md:items-center">
            <Typography
              bold={true}
              className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
            >
              Summerfest pavilion
            </Typography>
            <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
            <Typography
              semiBold={true}
              className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
            >
              The backyard sanctuary of an opulent estate, where every detail
              whispers indulgence and tranquility. Here, a glistening pool
              beckons under the sun's warm embrace, surrounded by lush greenery
              that dances with the breeze. The spacious terrace, adorned with
              plush furnishings, invites you to unwind and savor moments of
              leisure in utmost comfort. This is more than a home; it's a
              retreat, where luxury intertwines effortlessly with the serenity
              of nature, promising a life of unparalleled richness and
              relaxation.
            </Typography>
          </div>
          <div className="pt-5 md:pt-0 md:pl-10">
            <img src="/images/1.webp" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center bg-[#eaeaea] md:pr-10">
          <div className="md:pr-10 pb-10 md:pb-0">
            <img src="/images/20.webp" />
          </div>
          <div className="py-16 md:py-0 w-full w-3/12 min-w-300[px] max-w-[400px] md:px-5 flex flex-col md:items-center">
            <Typography
              bold={true}
              className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
            >
              Summerfest pavilion
            </Typography>
            <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
            <Typography
              semiBold={true}
              className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
            >
              The rooftop terrace of a modern Oakville Condos, meticulously
              crafted and rendered by TAOSCO. This stunning sanctuary seamlessly
              blends breathtaking water features with inviting seating areas,
              creating an ambiance of comfort and tranquility. As the sun sets,
              basking the apartment in a warm glow, it ignites endless dreams
              and possibilities.
            </Typography>
          </div>
        </div>

        {/* remove opacity if needed */}
        <div className="flex flex-col md:flex-row items-center bg-[#f4eee3] opacity-95 md:pl-10">
          <div className="py-16 w-full md:w-3/12 min-w-300[px] md:max-w-[400px] md:px-5 flex flex-col md:items-center">
            <Typography
              bold={true}
              className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
            >
              Introducing our latest creation
            </Typography>
            <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
            <Typography
              semiBold={true}
              className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
            >
              A hidden gem nestled in the back alleys of Toronto, providing a
              fresh, affordable solution to the city's housing crunch. Designed
              by TAOSCO&Unikhouse, this innovative space maintains a
              high-quality design aesthetic while remaining budget-friendly.
              Large floor-to-ceiling windows flood the interiors with natural
              light, creating a bright and inviting atmosphere.
            </Typography>
          </div>
          <div className="pt-5 md:pt-0 md:pl-10">
            <img src="/images/5.webp" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center bg-[#ff493f] md:pr-10">
          <div className="md:pr-10 pb-10 md:pb-0">
            <img src="/images/14.webp" />
          </div>
          <div className="py-16 md:py-0 w-full w-3/12 min-w-300[px] max-w-[400px] md:px-5 flex flex-col md:items-center">
            <Typography
              bold={true}
              className="mx-16 md:mx-0 text-3xl md:max-w-[200px] md:mx-auto pb-10 md:border-b md:border-b-[3px] md:border-b-black"
            >
              Summerfest pavilion
            </Typography>
            <hr className="md:hidden border-2 border-black w-5/12 mx-16" />
            <Typography
              semiBold={true}
              className="text-base md:text-lg px-16 md:px-0 md:max-w-[200px] mx-auto pt-5"
            >
              A timeless blend of modern architecture and natural beauty, where
              stone and wood intertwine in perfect harmony. This classic
              mountain-inspired residence captures the hearts of homeowners with
              its seamless fusion of materials and exquisite craftsmanship,
              creating a sanctuary that resonates with tranquility and elegance.
            </Typography>
          </div>
        </div>

        <GallerySection projects={projects} />
      </Layout>
    </div>
  );
}
