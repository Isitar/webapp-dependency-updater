import EditModel from "~/forms/EditModel";


export enum ProjectType {
  Undefined = 0,
  Dotnet = 1 << 0,
  Npm = 1 << 1,
}

export class ProjectListVm {
  public id!: string;
  public name!: string;
  public platform!: string;

  public isOutdated!: boolean;
}

export class ProjectDetailVm {
  public id!: string;
  public name!: string;
  public platformId!: string;
  public platformName!: string;

  public projectType!: ProjectType;
  public updateFrequency!: string;
  public targetBranch!: string;
  public platformProjectId!: string;
  public url!: string;

  public isOutdated!: boolean;
}

export class ProjectUpdate extends EditModel {
  public name: string | null = null;
  public platformId: string | null = null;
  public platformName: string | null = null;

  public projectType: ProjectType | null = null;
  public updateFrequency: string | null = null;
  public targetBranch: string | null = null;
  public platformProjectId: string | null = null;
  public url: string | null = null;

  public static fromDetail(project: ProjectDetailVm) {
    const retVal = new ProjectUpdate();
    retVal.name = project.name;
    retVal.platformId = project.platformId;
    retVal.platformName = project.platformName;
    retVal.projectType = project.projectType;
    retVal.updateFrequency = project.updateFrequency;
    retVal.targetBranch = project.targetBranch;
    retVal.platformProjectId = project.platformProjectId;
    retVal.url = project.url;
    return retVal;
  }
}

export interface IProjectService {
  projects(): Promise<ProjectListVm[]>;

  projectDetail(id: string): Promise<ProjectDetailVm>;

  updateProject(id: string, project: ProjectUpdate): Promise<null>;

  updateDependencies(id: string): Promise<null>;
}
