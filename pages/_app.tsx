import React from "react";
import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import { wrapper } from "../redux/skyPackageStore/store";

export const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
