import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { ALL_PROJECTS } from "@/utils/projects";
import { Typography } from "@/components/Typography";
import { GallerySection } from "@/components/GallerySection";
import Head from "next/head";
import favicon from "../../../../public/favicon.ico";

export default function Page() {
  const router = useRouter();
  const projectId = router?.query?.id;
  const project = ALL_PROJECTS.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return null;
  }

  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} sizes="any" />
        <title>TAOS ARCHITECTURAL VISUALIZATION</title>
        <meta name="description" content="TAOS ARCHITECTURAL VISUALIZATION" />
      </Head>
      <Layout>
        <Header />

        <div className="mt-12">
          <div className="px-10 py-8">
            <img src={project.img} />
          </div>
          <div className="px-10 py-8">
            <Typography bold={true} className="text-lg font-montserrat">
              {project.title}
            </Typography>
          </div>

          <GallerySection projects={ALL_PROJECTS} />
        </div>
      </Layout>
    </div>
  );
}
