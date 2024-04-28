import React from "react";
import { Footer } from "./Footer";
import PropTypes from "prop-types";

export const Layout = ({ children }) => (
  <div className="flex flex-col h-full">
    <main className="relative flex-1 overflow-y-auto z-10">
      <div className="flex flex-col justify-center mx-auto h-full">
        {children}
      </div>
      <Footer />
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  children: null,
};
