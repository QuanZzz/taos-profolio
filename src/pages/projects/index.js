import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { GallerySection } from "@/components/GallerySection";
import Head from "next/head";
import favicon from "../../../public/favicon.ico";
import { ALL_PROJECTS } from "@/utils/projects";

export default function Page() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} sizes="any" />
        <title>TAOS ARCHITECTURAL VISUALIZATION</title>
        <meta name="description" content="TAOS ARCHITECTURAL VISUALIZATION" />
      </Head>
      <Layout>
        <Header />
        <GallerySection projects={ALL_PROJECTS} className="bg-[#e6e6e6]" />
      </Layout>
    </div>
  );
}
