import "../app/globals.css";
import { Rubik, Montserrat } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --montserrat-font: ${montserrat.style.fontFamily};
          --rubik-font: ${rubik.style.fontFamily};
        }
      `}</style>{" "}
      <Component {...pageProps} />
    </>
  );
}
