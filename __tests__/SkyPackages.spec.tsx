import { render } from "@testing-library/react";
import SkyPackages from "../pages/skyPackages";

const skyPackages = {
  skyPackages: [
    {
      id: 1,
      title: "Entertainment",
      body: [
        "Exclusive top series from Sky and HBO",
        "Large selection of complete series and documentation available on demand at any time",
        "New Sky Originals every month",
      ],
      imgSrc: "/images/entertainment.jpg",
    },
  ],
};

jest.mock("react-redux", () => {
  const originalRedux = jest.requireActual("react-redux");
  return {
    ...originalRedux,
    useDispatch: () => jest.fn(),
    useSelector: jest.fn().mockReturnValue(skyPackages),
  };
});

describe("Check Posts", () => {
  it("Post data should not be empty", async () => {
    const container = render(<SkyPackages skyPackages={skyPackages} />);
    expect(container).toMatchSnapshot();
    expect(container.getByText("Entertainment"));
  });

  it("Post data contains Cards", async () => {
    const { getByTestId } = render(<SkyPackages skyPackages={skyPackages} />);

    const container = getByTestId("cardWrapper");
    expect(container).toContainElement(getByTestId("storyCard"));
  });
});
