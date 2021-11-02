import Link from "next/link";
import React from "react";
import { Button } from "react-storybook-ui-app";
import Head from "../components/Head";

const Home = () => (
  <div>
    <Head>
      <title>Posts | Home</title>
      <meta name="keywords" content="posts" />
    </Head>
    <h1 className="title">Home Page</h1>
    <p className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium,
      libero, sit aliquam blanditiis voluptas voluptate corrupti ipsum tenetur
      obcaecati sed laudantium tempore in voluptates. Inventore velit ducimus
      nulla fuga!
    </p>
    <Link href="/skyPackages">
      <a className="btn">
        <Button
          label="See All Sky Packages"
          backgroundColor="#e94c5b"
          color="#fff"
        />
      </a>
    </Link>
  </div>
);
export default Home;
