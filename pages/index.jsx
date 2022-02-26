import Head from "next/head";
import Script from "next/script";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "inter-ui/inter.css";

export default function Home() {
  let [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const openLink = (link) => {
    let element = document.createElement("a");
    element.setAttribute("href", link);
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noreferrer");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  }
  const handleClickButton = (e) => {
    const button = e.target;
    switch (button.getAttribute("id")) {
      case 'gh_button':
      case 'gh_button_icon':
        openLink("https://github.com/rfl890")
        break;
      case 'replit_button':
      case 'replit-icon-1':
        openLink("https://replit.com/@RFL890");
        break;
      case 'discord_button':
      case 'discord_button_icon':
        copyToClipboard("RightBehindYou#7522");
        if (visible) {
          hide();
          visible = false;
        } else {
          show();
          visible = true;
        }
        break;
    }
  }
  const hoverOnRepl = async () => {
    let elems = document.getElementsByClassName("icon-replit");
    Array.from(elems).forEach((elem) => {
      elem.classList.remove("icon-replit");
      elem.classList.add("icon-replit-hover");
    });
  }
  const hoverOffRepl = async () => {
    let elems = document.getElementsByClassName("icon-replit-hover");
    Array.from(elems).forEach((elem) => {
      elem.classList.remove("icon-replit-hover");
      elem.classList.add("icon-replit");
    });
  }
  return (
    <div className="container px-11 py-3 text-white">
      <Head>
        <title>RFL890</title>
        <link rel="preload" href="/replit.svg" as="image" type="image/svg+xml"></link>
        <link type="text/plain" rel="author" href="/humans.txt"></link>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <h1 className="mt-5 text-8xl font-bold" id="mainHeader">
        Hello!
      </h1>
      <h1 className="mt-3  text-4xl font-bold">I&apos;m RFL890.</h1>
      <p className="text-lg mt-5">
        I&apos;m a developer. I wouldn&apos;t really call myself front-end or
        back-end, since I&apos;m alright-ish at both. I know Node.js, Lua,
        Python and HTML/CSS/JS. I am attempting to learn C++, C# and Java.
        <br></br>
        <br></br>
        I&apos;ve been playing Minecraft since 2014. I think it&apos;s awesome.
      </p>
      <h1 className="mt-6 text-6xl font-bold">My projects</h1>
      <p className="text-lg mt-5">
        I have some file storage that serves as both a CDN to host JS, CSS etc
        and file storage. Check it out{" "}
        <a
          href="https://cdn.rfl890.cf"
          className="text-blue-400"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . That&apos;s really it, but my GitHub page has random stuff and some
        utilities. I also published a couple npm packages.
      </p>
      <h1 className="mt-6 text-6xl font-bold">Social stuff</h1>
      <div className="flex">
        <button
          className="flex-initial bg-zinc-700 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-all hover:bg-zinc-300 hover:text-zinc-700"
          onClick={handleClickButton}
          id="gh_button"
        >
          <i className="bi bi-github" id="gh_button_icon"></i>
        </button>
        <button
          className="flex-initial ml-2 bg-zinc-700 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-all hover:bg-zinc-300 hover:text-zinc-700"
          onClick={handleClickButton}
          onMouseEnter={hoverOnRepl}
          onMouseLeave={hoverOffRepl}
          id="replit_button"
        >
          <img src="/replit.svg" id="replit-icon-1" className="icon-replit"></img>
        </button>
        <Tippy
          content="Copied to clipboard! If it didn't copy, it's RightBehindYou#7522"
          visible={visible}
          onClickOutside={hide}
        >
          <button
            className="flex-initial ml-2 bg-zinc-700 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-all hover:bg-zinc-300 hover:text-zinc-700"
            onClick={handleClickButton}
            id="discord_button"
          >
            <i className="bi bi-discord" id="discord_button_icon"></i>
          </button>
        </Tippy>
      </div>
    </div>
  );
}