import {IPlatformService, PlatformDetailVm, PlatformListVm} from "~/services/IPlatformService";
import {AxiosError} from "axios";
import {NuxtAxiosInstance} from "@nuxtjs/axios";

export default class AxiosPlatformService implements IPlatformService {
  private axios: NuxtAxiosInstance;

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios;
  }

  platforms(): Promise<PlatformListVm[]> {
    return this.axios.get<PlatformListVm[]>('platforms', {
      params: {},
    })
      .then((res) => res.data
      ).catch((err: AxiosError) => {
        throw err
      })
  }

  platformDetail(id: string): Promise<PlatformDetailVm> {
    return this.axios.get<PlatformDetailVm>(`platforms/${id}`)
      .then(res => res.data)
      .catch((err: AxiosError) => {
        throw err
      })
  }
}
