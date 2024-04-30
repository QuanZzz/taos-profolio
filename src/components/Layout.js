import React from "react";
import { Footer } from "./Footer";
import PropTypes from "prop-types";
import cx from "classnames";
import { Analytics } from "@vercel/analytics/react";

export const Layout = ({ children, className }) => (
  <div className={cx("flex flex-col h-full", className)}>
    <main className="relative flex-1 overflow-y-auto z-10">
      <div className="flex flex-col justify-center mx-auto h-full">
        {children}
      </div>
      <Footer />
      <Analytics />
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  children: null,
};
