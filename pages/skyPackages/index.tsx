import { useRouter } from "next/dist/client/router";
import React, { MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoryCard } from "react-storybook-ui-app";
import { SkyPackage, wrapper } from "../../redux/skyPackageStore/store";

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ preview }) => {
      const res = await fetch("http://localhost:3002/skyPackages/");
      const skyPackages = await res.json();
      store.dispatch({ type: "FETCH_SKY_PACKAGES", payload: skyPackages });

      return {
        props: {
          skyPackages,
        },
        revalidate: 5,
      };
    }
);

export default function SkyPackages({ skyPackages }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector<SkyPackage, SkyPackage>(
    (state) => state.skyPackages
  );

  useEffect(() => {
    console.log("effect", skyPackages);

    dispatch({ type: "FETCH_SKY_PACKAGES", payload: skyPackages });
  }, []);

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    const el = e.target as HTMLElement;

    if (el.tagName === "BUTTON") {
      dispatch({ type: "DELETE_SKY_PACKAGES", payload: id });
      router.push(`/skyPackages/`);
      return;
    } else {
      router.push(`/skyPackages/${id}`);
    }
  };
  console.log("index", state);
  return (
    <div data-testid="cardWrapper" className="cardWrapper">
      {state.skyPackages.map((skyPackage) => (
        <div key={skyPackage.id}>
          <StoryCard
            data-testid="cardStory"
            title={skyPackage.title}
            imageUrl={skyPackage.imgSrc}
            buttonText="Delete"
            cardType="postsCard"
            height="330px"
            onClickHandler={(e) => onClickHandler(e, skyPackage.id)}
            buttonClickHandler={(e) => onClickHandler(e, skyPackage.id)}
          />
        </div>
      ))}
    </div>
  );
}
