import AxiosPlatformService from "~/services/AxiosPlatformService";
import {NuxtAxiosInstance} from "@nuxtjs/axios";


export default ({$axios}: { $axios: NuxtAxiosInstance }, inject: (name: string, service: object) => void) => {
  const platformService = new AxiosPlatformService($axios);
  inject('platformService', platformService)
};
