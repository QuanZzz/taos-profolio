import "../app/globals.css";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --rubik-font: ${rubik.style.fontFamily};
        }
      `}</style>{" "}
      <Component {...pageProps} />
    </>
  );
}
