import Link from "next/link";
import React from "react";
import Component from "./login-btn";

function header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="./img/nftlogo.png" className="h-20" />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 hover:text-white font-bold text-purple-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="mr-5 hover:text-white active:text-purple-400"
            href="coin"
          >
            Nft
          </Link>
          <Link className="mr-5 hover:text-white" href="blockchain">
            BlockChain
          </Link>
          <Link className="mr-5 hover:text-white" href="web3">
            Web3
          </Link>
        </nav>
        <Component />
      </div>
    </header>
  );
}

export default header;
