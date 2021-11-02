import { useRouter } from "next/dist/client/router";
import React from "react";
import { StoryCard } from "react-storybook-ui-app";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3002/skyPackages");
  const skyPackages = await res.json();

  const paths = skyPackages.map((pkg) => {
    return {
      params: { id: pkg.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3002/skyPackages/${id}`);
  const skyPackages = await res.json();

  return {
    props: {
      id: id,
      skyPackages,
    },
  };
};

export default function PostDetail({ id, skyPackages }) {
  const router = useRouter();
  const backBtnHandler = () => {
    router.push("/skyPackages");
  };
  return (
    <div>
      <StoryCard
        imageUrl={skyPackages.imgSrc}
        title={skyPackages.title}
        cardBody={skyPackages.body}
        cardType="cardInDetail"
        buttonText="Back to Sky Packages"
        buttonClickHandler={backBtnHandler}
        width="300px"
      />
    </div>
  );
}
