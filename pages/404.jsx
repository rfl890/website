import Head from "next/head";
import Link from 'next/link'
import React, { useState } from "react";
import "inter-ui/inter.css";

export default function Home() {
  return (
    <div className="container text-white">
      <Head>
        <title>404: Page not found</title>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
	  <h1 className="text-center mt-5 text-7xl font-bold" id="mainHeader">
        404
      </h1>
	   <h1 className="text-center mt-2 text-4xl font-bold" id="mainHeader">
        Page not found.
      </h1>
	  <h1 className="text-center mt-4 text-xl" id="mainHeader">
        Head back <Link href='/'><span className="text-green-300 
 cursor-pointer">home</span></Link>?
      </h1>
    </div>
  );
}
