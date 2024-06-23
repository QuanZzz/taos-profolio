import taosBg from "../../public/images/contact.jpg";
import Image from "next/image";

export const Background = () => (
  <Image
    alt="taos-design-background"
    src={taosBg}
    placeholder="blur"
    quality={100}
    fill
    sizes="100vw"
    className="opacity-90 -z-10 object-cover"
  />
);
