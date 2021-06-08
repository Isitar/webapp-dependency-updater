// noinspection ES6UnusedImports
import Vue from 'vue';
// noinspection ES6UnusedImports
import VueConstructor from 'vue-property-decorator';
import {IPlatformService} from "~/services/IPlatformService";
import {NuxtAxiosInstance} from "@nuxtjs/axios";

declare module 'vue/types/vue' {
  interface Vue {
    $platformService: IPlatformService;
    $api: NuxtAxiosInstance;
  }
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $platformService: IPlatformService;
    $api: NuxtAxiosInstance;
  }
}
