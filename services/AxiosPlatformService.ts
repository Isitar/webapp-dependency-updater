import {IPlatformService, PlatformCreate, PlatformDetailVm, PlatformListVm, PlatformUpdate} from "~/services/IPlatformService";
import {NuxtAxiosInstance} from "@nuxtjs/axios";
import AxiosResponseCatcher from "~/services/AxiosResponseCatcher";
import CreateResponse from "~/services/CreateResponse";

export default class AxiosPlatformService implements IPlatformService {
  private axios: NuxtAxiosInstance;

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios;
  }

  platforms(): Promise<PlatformListVm[]> {
    return this.axios.get<PlatformListVm[]>('platforms', {
      params: {},
    })
      .then((res) => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }

  platformDetail(id: string): Promise<PlatformDetailVm> {
    return this.axios.get<PlatformDetailVm>(`platforms/${id}`)
      .then(res => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }

  updatePlatform(id: string, platform: PlatformUpdate): Promise<null> {
    return this.axios.patch(`platforms/${id}`, platform)
      .then(() => null)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }

  createPlatform(platformCreate: PlatformCreate): Promise<CreateResponse> {
    return this.axios.post<CreateResponse>(`platforms`, platformCreate)
      .then(res => res.data)
      .catch(e => Promise.reject(AxiosResponseCatcher.handleAxiosError(e)));
  }
}
