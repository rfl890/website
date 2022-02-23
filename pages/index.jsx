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
      hide();
      visible = false;
    } else {
      show();
      visible = true;
    }
  }
  function hoverOnRepl() {
	let po = document.getElementsByClassName("jsx-4131126525")
	  Array.from(po).forEach(elem => {
		  elem.classList.remove("jsx-4131126525");
		  elem.classList.add("jsx-4131126525new");
	  })
  }
  function hoverOffRepl() {
	let po = document.getElementsByClassName("jsx-4131126525new")
	  Array.from(po).forEach(elem => {
		  elem.classList.remove("jsx-4131126525new");
		  elem.classList.add("jsx-4131126525");
	  })
  }
  return (
    <div className="container px-11 py-3 text-white">
      <Head>
        <title>RFL890</title>
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
          className="flex-none bg-zinc-700 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-all hover:bg-zinc-300 hover:text-zinc-700"
          onClick={openLinkGitHub}
        >
          <i className="bi bi-github"></i>
        </button>
        <button
          className="flex-initial ml-2 bg-zinc-700 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-all hover:bg-zinc-300 hover:text-zinc-700" id="lolololol"
          onClick={openLinkReplit}
	      onMouseEnter={hoverOnRepl}
		  onMouseLeave={hoverOffRepl}
        >
          <svg viewBox="0 0 100 100" id="lolololol2" className="jsx-4131126525"><path d="M98.849 45.191zM26.042 44.932S12.394 95.218 67.097 95.656c17.163-6.39 29.81-22.054 31.727-40.939.132-1.306.171-2.639.2-3.973.006-.352.053-.693.053-1.046 0-1.521-.093-3.02-.227-4.507-14.452 56.894-78.388 34.61-72.808-.259z" className="jsx-4131126525"></path><path d="M54.326 26.267S3.395 12.044 4.178 67.58a49.217 49.217 0 0011.87 17.742c.218.207.444.403.665.606a49.233 49.233 0 004.654 3.793c.253.18.49.38.744.556a48.884 48.884 0 005.373 3.19c.54.278 1.094.532 1.641.791a48.592 48.592 0 004.907 1.991c.41.14.802.315 1.218.446a48.66 48.66 0 006.108 1.444c.624.11 1.256.201 1.888.288 2.142.31 4.302.478 6.467.503.083 0 .163.013.246.013 1.632 0 3.244-.088 4.833-.244-57.146-13.628-35.425-77.529-.466-72.43z" className="jsx-4131126525"></path><path d="M74.178 52.604s12.05-50.8-42.19-48.532C13.8 11.257.924 28.954.924 49.694c.017 2.233.185 4.463.504 6.673 11.415-57.474 76.448-38.86 72.75-3.763z" className="jsx-4131126525"></path><path d="M48.135 74.465s51.02 6.66 47.827-41.848c-6.944-18.672-24.873-32-45.961-32a49.258 49.258 0 00-8.9.846c56.85 6.979 42.074 73.498 7.034 73.002z" className="jsx-4131126525"></path><path d="M64.163 49.7a13.746 13.746 0 11-27.493-.001 13.746 13.746 0 0127.493 0z" className="jsx-4131126525"></path></svg>
        </button>
        <Tippy
          content="Copied to clipboard! If it didn't copy, it's RightBehindYou#7522"
          visible={visible}
          onClickOutside={hide}
        >
          <button
            className="flex-initial ml-2 bg-zinc-700 text-white text-4xl rounded-lg shadow-2xl mt-4 box-border h-16 w-16 transition-all hover:bg-zinc-300 hover:text-zinc-700"
            onClick={copyDiscord}
          >
            <i className="bi bi-discord"></i>
          </button>
        </Tippy>
      </div>
    </div>
  );
}
