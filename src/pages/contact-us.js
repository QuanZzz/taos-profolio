import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        /> */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/favicon.ico"
          sizes="any"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        ></link>
        <title>TAOS ARCHITECTURAL VISUALIZATION</title>
        <meta name="description" content="TAOS ARCHITECTURAL VISUALIZATION" />
      </Head>
      <Layout>
        <Header />

        <div className="h-full bg-black flex flex-col justify-center items-center">
          <form
            className="text-white flex flex-col w-60 font-rubik"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <input
              className="mt-3 rounded-md h-10 text-black"
              type="text"
              name="user_name"
              required
              // onChange={handleOnChange}
            />
            <label className="mt-3 rounded-md">Email</label>
            <input
              className="mt-3 rounded-md h-10 text-black"
              type="email"
              name="user_email"
              required
              // onChange={handleOnChange}
            />
            <label className="mt-3 rounded-md">Message</label>
            <textarea
              className="mt-3 rounded-md h-20 text-black"
              name="message"
              required
              // onChange={handleOnChange}
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
