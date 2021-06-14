import {IProjectService, ProjectDetailVm, ProjectListVm, ProjectUpdate} from "~/services/IProjectService";
import {NuxtAxiosInstance} from "@nuxtjs/axios";
import AxiosResponseCatcher from "~/services/AxiosResponseCatcher";

export default class AxiosProjectService implements IProjectService {
  private axios: NuxtAxiosInstance;

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios;
  }

  projects(): Promise<ProjectListVm[]> {
    return this.axios.get<ProjectListVm[]>('projects', {
      params: {},
    })
      .then((res) => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)))
  }

  projectDetail(id: string): Promise<ProjectDetailVm> {
    return this.axios.get<ProjectDetailVm>(`projects/${id}`)
      .then(res => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)))
  }

  updateProject(id: string, project: ProjectUpdate): Promise<null> {
    return this.axios.patch(`projects/${id}`, project)
      .then(() => null)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)))
  }
}
