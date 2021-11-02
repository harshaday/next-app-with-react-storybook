import { SkyPackageState } from "./type.d";
//Action Types
export const FETCH_SKY_PACKAGES = "FETCH_SKY_PACKAGES";
export const DELETE_SKY_PACKAGES = "DELETE_SKY_PACKAGES";

export const fetchSkyPackages = (skyPackage: SkyPackageState) => ({
  type: FETCH_SKY_PACKAGES,
  payload: skyPackage,
});

export const deleteSkyPackages = (skyPackageid: number) => ({
  type: DELETE_SKY_PACKAGES,
  payload: skyPackageid,
});
