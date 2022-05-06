import React from "react";
import Head from "next/head";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ecommerce Store</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
