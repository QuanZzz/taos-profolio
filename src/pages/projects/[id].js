import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { projects } from "@/utils/projects";
import { Typography } from "@/components/Typography";
import { GallerySection } from "@/components/GallerySection";

export default function Page() {
  const router = useRouter();
  const projectId = router?.query?.id;
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <Header />

      <div className="my-12">
        <div className="px-10 py-8">
          <img src={project.img} />
        </div>
        <div className="px-10 py-8">
          <Typography bold={true} className="text-lg">
            {project.title}
          </Typography>
        </div>

        <GallerySection projects={projects} />
      </div>
    </Layout>
  );
}
