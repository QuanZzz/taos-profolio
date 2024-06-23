import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import favicon from "../../public/favicon.ico";
import { Background } from "@/components/Background";
import background from "../../public/images/contact.jpg";

export default function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    if (
      !e.target.user_name.value ||
      !e.target.user_email.value ||
      !e.target.message.value
    ) {
      return;
    }
    e.preventDefault();

    emailjs
      .sendForm("service_tl35zgh", "template_dzbmv8i", form.current, {
        publicKey: "U5-YfeRZvBlw6b1za",
      })
      .then(
        (result) => {
          toast.success("Successfully sent!");
        },
        (error) => {
          toast.error("Oops, something wrong. Please try again later.");
        }
      );
  };

  return (
    <div>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} sizes="any" />
        <title>TAOS ARCHITECTURAL VISUALIZATION</title>
        <meta name="description" content="TAOS ARCHITECTURAL VISUALIZATION" />
      </Head>
      <Layout className="h-screen">
        <Header />
        <div
          className="h-full bg-black flex flex-col justify-center items-center md:flex-row ms:items-start md:justify-start"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <form
            className="text-white flex flex-col w-72 font-rubik h-auto bg-black opacity-60 md:ml-40 px-5 py-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <input
              className="mt-3 rounded-md h-10 text-black"
              type="text"
              name="user_name"
              required
            />
            <label className="mt-3 rounded-md">Email</label>
            <input
              className="mt-3 rounded-md h-10 text-black"
              type="email"
              name="user_email"
              required
            />
            <label className="mt-3 rounded-md">Message</label>
            <textarea
              className="mt-3 rounded-md h-20 text-black"
              name="message"
              required
            />
            <input
              className="w-24 py-2 bg-blue-500 mt-5 rounded-lg hover:text-indigo-600 cursor-pointer"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <Toaster position="bottom-right" />
      </Layout>
    </div>
  );
}
