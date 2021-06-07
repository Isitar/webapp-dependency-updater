import {IPlatformService, PlatformListVm} from "~/services/IPlatformService";
import {AxiosError} from "axios";
import Vue from 'vue';
import {NuxtAxiosInstance} from "@nuxtjs/axios";

export default class AxiosPlatformService implements IPlatformService {

  platforms(axios: NuxtAxiosInstance): Promise<PlatformListVm[]> {
    console.log(axios)
    return axios.get<PlatformListVm[]>('platforms', {
      params: {},
    })
      .then((res) => res.data
      ).catch((err: AxiosError) => {
        throw err
      })
  }
}
