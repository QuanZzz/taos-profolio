import { Typography } from "./Typography";
import { GalleryCard } from "./GallaryCard";
import cx from "classnames";

export const GallerySection = ({ projects, className = "" }) => {
  if (!projects) {
    return;
  }

  return (
    <div
      className={cx(
        "flex flex-col items-center md:items-start font-montserrat",
        className
      )}
    >
      <Typography className="px-40 py-16 text-lg md:text-2xl font-bold md:pr-32 md:font-black">
        Projects
      </Typography>
      {/* Mobile view */}
      <div className="block md:hidden">
        {projects?.map((p, index) => (
          <GalleryCard key={index} project={p} />
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex md:flex-wrap w-full md:items-stretch">
        {projects?.map((p, index) => {
          return <GalleryCard key={index} project={p} />;
        })}
      </div>
    </div>
  );
};
