import AxiosPlatformService from "~/services/AxiosPlatformService";


export default ({$axios}, inject: (name: string, service: object) => void) => {
  const platformService = new AxiosPlatformService($axios);
  inject('platformService', platformService)
};
