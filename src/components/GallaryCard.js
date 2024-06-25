import cx from "classnames";
import { useState } from "react";
import { CirclePlusIcon } from "./Icons";
import { Typography } from "./Typography";
import { useRouter } from "next/router";

export const GalleryCard = ({ className, project }) => {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);

  const overlayClasses = cx(
    "absolute inset-0 bg-cover bg-center bg-no-repeat z-0",
    { "md:opacity-20": isFlipped, "opacity-0": !isFlipped }
  );

  return (
    <div
      onMouseOver={() => setIsFlipped(true)}
      onMouseOut={() => setIsFlipped(false)}
      className={cx("cursor-pointer md:w-1/3 md:flex relative", className)}
      onClick={() => router.push(`/projects/${project?.id}`)}
    >
      <div
        className={overlayClasses}
        style={{ backgroundImage: `url(${project.img})` }}
      ></div>

      <img
        className={cx("grow", { "md:hidden": isFlipped })}
        src={project?.img}
        alt={project?.title}
      />

      <div
        className={cx(
          "hidden md:flex flex-col items-center justify-center absolute inset-0 z-10 font-montserrat",
          { "md:hidden": !isFlipped }
        )}
      >
        <CirclePlusIcon className="h-10 w-10 text-gray-500" />
        <Typography bold={true} className="text-lg mt-2">
          {project?.title}
        </Typography>
        <Typography>{project?.date}</Typography>
      </div>
    </div>
  );
};
