import React from "react";
import { Footer } from "./Footer";
import PropTypes from "prop-types";

export const Layout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <main className="relative flex-1 overflow-y-auto z-10">
      <div className="flex justify-center items-start mx-auto h-full px-6 py-16 max-w-7xl">
        {children}
      </div>
      {/* move Footer to here if scrolling needed */}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  children: null,
};
