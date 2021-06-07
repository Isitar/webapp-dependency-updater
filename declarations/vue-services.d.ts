// noinspection ES6UnusedImports
import Vue from 'vue';
// noinspection ES6UnusedImports
import VueConstructor from 'vue-property-decorator';
import {IPlatformService} from "~/services/IPlatformService";

declare module 'vue/types/vue' {
  interface Vue {
    $platformService: IPlatformService;
  }
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $platformService: IPlatformService;
  }
}
