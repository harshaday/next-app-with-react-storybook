import { SkyPackageState, SkyPackage } from "./type.d";
import { FETCH_SKY_PACKAGES, DELETE_SKY_PACKAGES } from "./actions";

const InitialState: SkyPackageState = {
  skyPackages: [],
};

export const skyPackageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_SKY_PACKAGES:
      if (state.skyPackages.length > 1) {
        return state;
      }
      return {
        ...state,
        skyPackages: action.payload,
      };
    case DELETE_SKY_PACKAGES:
      const updatedPackages = state.skyPackages.filter(
        (pkg) => pkg.id !== action.payload
      );
      deletePosts(action.payload);
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
};

export default skyPackageReducer;
