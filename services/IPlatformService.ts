import EditModel from "~/forms/EditModel";
import CreateResponse from "~/services/CreateResponse";

export enum PlatformType {
  GitLab = 1,
  GitHub = 2,
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
  public gitUserName!: string | null;
  public gitUserEmail!: string | null;
}

export class PlatformUpdate extends EditModel {
  public name: string | null = null;
  public platformType: PlatformType | null = null;
  public privateKey: string | null = null;
  public apiBaseUrl: string | null = null;
  public token: string | null = null;
  public gitUserName: string | null = null;
  public gitUserEmail: string | null = null;

  public static fromDetail(platform: PlatformDetailVm) {
    const retVal = new PlatformUpdate();
    retVal.name = platform.name;
    retVal.platformType = platform.platformType;
    retVal.privateKey = platform.privateKey;
    retVal.apiBaseUrl = platform.apiBaseUrl;
    retVal.token = platform.token;
    retVal.gitUserName = platform.gitUserName;
    retVal.gitUserEmail = platform.gitUserEmail;
    return retVal;
  }
}

export class PlatformCreate extends EditModel {
  public name: string | null = null;
  public platformType: PlatformType | null = null;
}

export interface IPlatformService {
  createPlatform(platformCreate: PlatformCreate): Promise<CreateResponse>

  platforms(): Promise<PlatformListVm[]>;

  platformDetail(id: string): Promise<PlatformDetailVm>;

  updatePlatform(id: string, platform: PlatformUpdate): Promise<null>;
}
