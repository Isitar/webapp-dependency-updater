import EditModel from "~/forms/EditModel";

export enum PlatformType {
  GitLab = 1,
  GitHub= 2,
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

export class PlatformUpdate extends EditModel {
  public name: string | null = null;
  public platformType: PlatformType | null = null;
  public privateKey: string | null = null;
  public apiBaseUrl: string | null = null;
  public token: string | null = null;

  public static fromDetail(platform: PlatformUpdate) {
    const retVal = new PlatformUpdate();
    retVal.name = platform.name;
    retVal.platformType = platform.platformType;
    retVal.privateKey = platform.privateKey;
    retVal.apiBaseUrl = platform.apiBaseUrl;
    retVal.token = platform.token;
    return retVal;
  }
}

export interface IPlatformService {
  platforms(): Promise<PlatformListVm[]>;

  platformDetail(id: string): Promise<PlatformDetailVm>;

  updatePlatform(id: string, platform: PlatformUpdate): Promise<null>;
}
