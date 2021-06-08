import {NuxtAxiosInstance} from "@nuxtjs/axios";

export enum PlatformType {
  Gitlab = 1,
}

export class PlatformListVm {
  public id!: string;
  public name!: string;
  public platformType!: PlatformType;
}

export class PlatformDetailVm {
  public id!: string;
  public name!: string;
  public platformType!: PlatformType;
  public privateKey!: string;
  public apiBaseUrl!: string;
  public token!: string;
}

export interface IPlatformService {
  platforms(): Promise<PlatformListVm[]>;
  platformDetail(id: string): Promise<PlatformDetailVm>
}
