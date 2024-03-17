import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import Head from "next/head";
import "../app/globals.css";

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
        <div className="flex flex-col items-center mt-4 md:mt-6">
          <Typography
            bold={true}
            className="tracking-normal uppercase text-[45px] text-black md:text-6xl font-brand mb-[-7px]"
          >
            Taos & Co.
          </Typography>
          <Typography
            semiBold={true}
            className="tracking-wider uppercase text-[10px] text-black md:text-sm md:mt-2 font-brand"
          >
            A creative company
          </Typography>
        </div>
      </Layout>
    </div>
  );
}
