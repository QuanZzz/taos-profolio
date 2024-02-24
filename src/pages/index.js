import { Background } from "@/components/Background";
import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="images/favicon.ico" sizes="any" />
        <title>TAOS ARCHITECTURAL VISUALIZATION</title>
        <meta name="description" content="TAOS ARCHITECTURAL VISUALIZATION" />
      </Head>
      <Layout>
        <Background />
        <Typography
          bold
          className="tracking-wider uppercase text-3xl text-black md:text-6xl font-brand"
        >
          Taos & Co. Coming Soon
        </Typography>
      </Layout>
    </div>
  );
}
