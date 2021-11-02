export interface SkyPackage {
  id: number;
  title: string;
  body: string;
  imgSrc: URL;
}

export type SkyPackageState = {
  skyPackages: SkyPackage[];
};

export type SkyPackageAction = {
  type: string;
  SkyPackage: SkyPackage;
};

export type dispatchType = (args: SkyPackageAction) => SkyPackageAction;
