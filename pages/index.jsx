import Head from "next/head";
import React from "react";
import ButtonPrimaryOutline from "../components/ButtonPrimaryOutline";
import "bootstrap-icons/font/bootstrap-icons.css"
export default function Home() {
  React.useEffect(async function(){
  }, []);
  return (
    <div className="container px-11 py-3">
      <Head>
        <title>RFL890</title>
        <meta name="viewport" content="width=device-width"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Roboto+Mono&display=swap" rel="stylesheet"></link>
      </Head>
      <h1 className="mt-11 transition-all text-6xl font-bold" id="mainHeader">Test heading</h1>
      <ButtonPrimaryOutline><i className="bi bi-cloud"></i> Test button with icon</ButtonPrimaryOutline>
    </div>
  );
}