import taosBg from "../../public/images/taos-bg.jpg";
import Image from "next/image";

export const Background = () => (
  <Image
    alt="taos-design-background"
    src={taosBg}
    placeholder="blur"
    quality={100}
    fill
    sizes="100vw"
    objectFit="cover"
    className="opacity-85 -z-10"
  />
);
