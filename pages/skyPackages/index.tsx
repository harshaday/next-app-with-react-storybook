import { useRouter } from "next/dist/client/router";
import React, { MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoryCard } from "react-storybook-ui-app";
import { SkyPackage, wrapper } from "../../redux/skyPackageStore/store";

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3002/skyPackages/");
  const skyPackages = await res.json();

  return {
    props: {
      skyPackages,
    },
  };
}

export default function SkyPackages({ skyPackages }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector<SkyPackage, SkyPackage>(
    (state) => state.skyPackages
  );

  useEffect(() => {
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
  return (
    <div data-testid="cardWrapper" className="cardWrapper">
      {state.skyPackages.map((skyPackage) => (
        <div key={skyPackage.id}>
          <StoryCard
            data-testid="cardStory"
            title={skyPackage.title}
            imageUrl={skyPackage.imgSrc}
            buttonText="Delete"
            cardType="SimpleCard"
            height="330px"
            onClickHandler={(e) => onClickHandler(e, skyPackage.id)}
            buttonClickHandler={(e) => onClickHandler(e, skyPackage.id)}
          />
        </div>
      ))}
    </div>
  );
}
