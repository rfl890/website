import Head from "next/head";
import Link from "next/link";
import "inter-ui/inter.css";

export default function Error404() {
  return (
    <div className="text-white">
      <Head>
        <title>404: Page not found</title>
        <link type="text/plain" rel="author" href="/humans.txt"></link>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <h1 className="text-center mt-5 text-7xl font-black" id="mainHeader">
        404
      </h1>
      <h1 className="text-center mt-2 text-4xl font-semibold" id="mainHeader">
        Page not found.
      </h1>
      <h1 className="text-center mt-4 text-xl" id="mainHeader">
        Head back{" "}
        <Link href="/" passHref>
          <span
            className="text-green-300 
 cursor-pointer"
          >
            home
          </span>
        </Link>
        ?
      </h1>
    </div>
  );
}
