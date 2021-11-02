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
    {/* <Button label="Next" primary={true} />
    <Button 
            label="See All Posts" backgroundColor="#e94c5b" color="#fff" 
        />
         <StoryImage url='https://picsum.photos/300/200' height='300' width='200' altText="img" /> 

        <StoryCard 
           imageUrl='https://source.unsplash.com/collection/190727/700x400'
           title='qui est esse'
           cardBody='quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
           cardType='postDetail' /> */}
  </div>
);
export default Home;
