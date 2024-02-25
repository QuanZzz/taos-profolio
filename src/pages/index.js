import { Background } from "@/components/Background";
import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import Head from "next/head";

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
        <Background />
        <div className="flex flex-col items-center">
          <Typography
            semiBold={true}
            className="tracking-wider uppercase text-3xl text-black md:text-6xl font-brand"
          >
            Taos & Co.
          </Typography>
          <Typography
            semiBold={true}
            className="tracking-wider uppercase text-sm text-black md:text-lg font-brand pt-2"
          >
            A creative company
          </Typography>
          <Typography
            semiBold={true}
            className="pt-6 tracking-wider uppercase text-3xl text-black md:text-6xl font-brand"
          >
            Coming soon
          </Typography>
        </div>
      </Layout>
    </div>
  );
}
