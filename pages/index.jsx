import Head from "next/head";
import Script from "next/script";
import React, {useState} from "react";
import ButtonPrimaryOutline from "../components/ButtonPrimaryOutline";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createPopper } from '@popperjs/core';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Home() {
  let [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  function openLinkGitHub() {
    let element = document.createElement("a");
    element.setAttribute("href", "https://github.com/rfl890");
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noreferrer");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  function openLinkReplit() {
    let element = document.createElement("a");
    element.setAttribute("href", "https://replit.com/@RFL890");
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noreferrer");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  function copyDiscord() {
    navigator.clipboard.writeText("RightBehindYou#7522");
    if (visible) {
      hide()
      visible = false
    } else {
      show();
      visible = true
    }
  }  
  return (
    <div className="container px-11 py-3">
      <Head>
        <title>RFL890</title>
        <meta name="viewport" content="width=device-width"></meta>
        <link
          rel="preconnect"
          href="https://cdn.rfl890.cf"
        ></link>
        <link
          href="https://cdn.rfl890.cf/inter/3.19/inter.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <h1 className="mt-11 transition-all text-8xl font-bold" id="mainHeader">
        Hello!
      </h1>
      <h1 className="mt-3 transition-all text-4xl font-bold">I&apos;m RFL890.</h1>
      <p className="text-xl mt-5">
        I&apos;m a developer. I wouldn&apos;t really call myself front-end or back-end,
        since I&apos;m alright-ish at both. I know Node.js, Lua, Python and
        HTML/CSS/JS. I am attempting to learn C++, C# and Java.
        <br></br>
        <br></br>
        As for hobbies, I like cooking, reading and playing tennis. I also like
        playing Minecraft, as I think it&apos;s an original, fun game.
      </p>
      <h1 className="mt-6 transition-all text-6xl font-bold">My projects</h1>
      <p className="text-xl mt-5">
        I have some file storage that serves as both a CDN to host JS, CSS etc and file storage. Check it out <a href="https://cdn.rfl890.cf" class="text-blue-400" target="_blank" rel="noreferrer">here</a>. That&apos;s really it, but my GitHub page has random stuff
        and some utilities. I also published a couple npm packages.
      </p>
      <h1 className="mt-6 transition-all text-6xl font-bold">Social stuff</h1>
      <div className="flex">
        <button
          className="flex-none bg-zinc-800 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-colors"
          onClick={openLinkGitHub}
        >
          <i className="bi bi-github"></i>
        </button>
        <button
          className="flex-initial ml-2 bg-zinc-800 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-colors"
          onClick={openLinkReplit}
        >
          <ion-icon src="/img/replit.svg"></ion-icon>
        </button>
        <Tippy content="Copied to clipboard! If it didn't copy, it's RightBehindYou#7522" visible={visible} onClickOutside={hide}>
        <button
          className="flex-initial ml-2 bg-zinc-800 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-colors"
          onClick={copyDiscord}
        >
          <i className="bi bi-discord"></i>
        </button>
        </Tippy>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/ionicons@6.0.0/dist/ionicons/ionicons.js"></Script>
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/ionicons@6.0.0/dist/ionicons/ionicons.esm.js"
      ></Script>
    </div>
  );
}
