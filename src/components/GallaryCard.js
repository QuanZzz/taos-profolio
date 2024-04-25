import cx from "classnames";
import { useState } from "react";
import { CirclePlusIcon } from "./Icons";
import { Typography } from "./Typography";
import { useRouter } from "next/router";

export const GalleryCard = ({ className, project }) => {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseOver={() => setIsFlipped(true)}
      onMouseOut={() => setIsFlipped(false)}
      className={cx("cursor-pointer md:w-1/3 md:flex md:z-0", className)}
      onClick={() => router.push(`/projects/${project?.id}`)}
      // style={{
      //   backgroundImage: isFlipped ? `url(${imgUrl})` : "",
      //   backgroundSize: isFlipped ? "cover" : "auto", // 'cover' behaves like 'object-fit: cover'
      //   backgroundPosition: isFlipped ? "center center" : "initial", // centers the background image
      //   backgroundRepeat: isFlipped ? "no-repeat" : "", // prevents the background image from repeating
      //   opacity: isFlipped ? 0.2 : 100,
      // }}
    >
      <img
        className={cx("grow", {
          hidden: isFlipped,
          block: !isFlipped,
        })}
        src={project?.img}
      />
      <div
        className={cx(
          "hidden md:grow md:flex md:flex-col md:items-center md:justify-center",
          {
            "md:block": isFlipped,
            "md:hidden": !isFlipped,
          }
        )}
        // style={{
        //   backgroundImage: isFlipped ? `url(${imgUrl})` : "",
        //   backgroundSize: isFlipped ? "cover" : "auto", // 'cover' behaves like 'object-fit: cover'
        //   backgroundPosition: isFlipped ? "center center" : "initial", // centers the background image
        //   backgroundRepeat: "no-repeat", // prevents the background image from repeating
        //   opacity: 0.2,
        // }}
      >
        {/* <Image
          src={imgUrl}
          quality={100}
          fill
          className="opacity-90 -z-10 object-fit"
          style={{
            // backgroundImage: isFlipped ? `url(${imgUrl})` : "",
            backgroundSize: isFlipped ? "cover" : "auto", // 'cover' behaves like 'object-fit: cover'
            backgroundPosition: isFlipped ? "center center" : "initial", // centers the background image
            backgroundRepeat: "no-repeat", // prevents the background image from repeating
            opacity: 0.2,
          }}
        /> */}
        <CirclePlusIcon className="h-10 w-10 text-gray-500 z-50" />
        <Typography bold={true} className="text-lg mt-2 z-50">
          {project?.title}
        </Typography>
        <Typography>{project?.date}</Typography>
      </div>
    </div>
  );
};
