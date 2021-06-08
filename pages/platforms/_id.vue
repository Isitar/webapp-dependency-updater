<template>
  <PlatformDetailContainer :id="this.$route.params.id"/>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import PlatformDetailContainer from "~/components/platform/PlatformDetailContainer.vue";

@Component({
  components: {PlatformDetailContainer}
})
export default class PlatformDetail extends Vue {

}
</script>
<style lang="scss" scoped>

</style>
