// noinspection ES6UnusedImports
import Vue from 'vue';
// noinspection ES6UnusedImports
import VueConstructor from 'vue-property-decorator';
import {IPlatformService} from "~/services/IPlatformService";
import {NuxtAxiosInstance} from "@nuxtjs/axios";
import {IProjectService} from "~/services/IProjectService";

declare module 'vue/types/vue' {
  interface Vue {
    $platformService: IPlatformService;
    $projectService: IProjectService;
  }
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $platformService: IPlatformService;
    $projectService: IProjectService;
  }
}
