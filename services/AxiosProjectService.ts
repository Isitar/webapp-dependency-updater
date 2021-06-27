import {IProjectService, ProjectCreate, ProjectDetailVm, ProjectListFilter, ProjectListVm, ProjectUpdate} from "~/services/IProjectService";
import {NuxtAxiosInstance} from "@nuxtjs/axios";
import AxiosResponseCatcher from "~/services/AxiosResponseCatcher";
import CreateResponse from "~/services/CreateResponse";

export default class AxiosProjectService implements IProjectService {
  private axios: NuxtAxiosInstance;

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios;
  }

  projects(projectListFilter: ProjectListFilter): Promise<ProjectListVm[]> {
    return this.axios.get<ProjectListVm[]>('projects', {
      params: projectListFilter,
    })
      .then((res) => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }

  projectDetail(id: string): Promise<ProjectDetailVm> {
    return this.axios.get<ProjectDetailVm>(`projects/${id}`)
      .then(res => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }

  updateProject(id: string, project: ProjectUpdate): Promise<null> {
    return this.axios.patch(`projects/${id}`, project)
      .then(() => null)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }

  updateDependencies(id: string): Promise<null> {
    return this.axios.post(`projects/${id}/update-dependencies`)
      .then(() => null)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }

  createProject(projectCreate: ProjectCreate): Promise<CreateResponse> {
    return this.axios.post<CreateResponse>(`platforms/${projectCreate.platformId}/projects`, projectCreate)
      .then(res => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }
}
