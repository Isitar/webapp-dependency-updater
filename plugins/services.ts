import AxiosPlatformService from "~/services/AxiosPlatformService";

const platformService = new AxiosPlatformService();
const Plugin = (context, inject) => {
  inject('platformService', platformService)
};


export default Plugin;
