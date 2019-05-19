import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center w-full">
            {children}
          </div>

          <footer className="bg-black-300">
            <div className="flex justify-center max-w-6xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white font-semibold uppercase">
                @ 2019 TREC Dental All Rights Reserved
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
