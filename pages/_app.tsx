import React from "react";
import { Provider } from "react-redux";

import "../styles/global.css";
import Layout from "../components/Layout/Layout";
import { wrapper } from "../redux/skyPackageStore/store";
// import { wrapper } from '../redux/postStore';

export const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
// export default MyApp;

export default wrapper.withRedux(MyApp);
