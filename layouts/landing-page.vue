<template>
  <div>
    <Nuxt/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navigation from "~/components/layout/Navigation.vue";

@Component({
  components: {Navigation}
})
export default class LandingPage extends Vue {

}
</script>
<style lang="scss" scoped>

</style>

