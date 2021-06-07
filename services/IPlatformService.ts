import {NuxtAxiosInstance} from "@nuxtjs/axios";

export enum PlatformType {
  Gitlab = 1,
}

export class PlatformListVm {
  public id!: string;
  public name!: string;
  public platformType!: PlatformType;
}

export interface IPlatformService {
  platforms($axios: NuxtAxiosInstance): Promise<PlatformListVm[]>;
}
