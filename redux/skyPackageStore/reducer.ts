import { SkyPackageState, SkyPackage } from "./type.d";
import { FETCH_SKY_PACKAGES, DELETE_SKY_PACKAGES } from "./actions";

const InitialState: SkyPackageState = {
  skyPackages: [],
};

export const skyPackageReducer = (state = InitialState, action) => {
  console.log("reducer", state);

  switch (action.type) {
    case FETCH_SKY_PACKAGES:
      console.log("fetch", action.payload);

      if (state.skyPackages.length > 1) {
        return state;
      }
      return {
        ...state,
        skyPackages: action.payload,
      };
    case DELETE_SKY_PACKAGES:
      console.log("delete");

      let updatedPackages = { ...state };
      updatedPackages = updatedPackages.skyPackages.filter(
        (pkg) => pkg.id !== action.payload
      );
      console.log("update", updatedPackages);

      //   updatedPackages = updatedPackages.skyPackages.filter((pkg) => pkg.id !== action.payload);
      // updatedPackages = updatedPackages.skyPackages.filter(
      //   (post) => post.id !== action.payload
      // );
      //   deletePosts(action.payload);
      return {
        ...state,
        skyPackages: updatedPackages,
      };
    default: {
      return state;
    }
  }
};
const deletePosts = async (id) => {
  const res = await fetch("http://localhost:3002/skyPackages/" + id, {
    method: "DELETE",
  });
  console.log(res);
};

export default skyPackageReducer;
