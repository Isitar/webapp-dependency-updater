import AxiosPlatformService from "~/services/AxiosPlatformService";
import {NuxtAxiosInstance} from "@nuxtjs/axios";
import AxiosProjectService from "~/services/AxiosProjectService";


export default ({$axios}: { $axios: NuxtAxiosInstance }, inject: (name: string, service: object) => void) => {
  const platformService = new AxiosPlatformService($axios);
  const projectService = new AxiosProjectService($axios);
  inject('platformService', platformService)
  inject('projectService', projectService)
};
