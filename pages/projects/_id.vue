<template>
  <ProjectDetailContainer :id="this.$route.params.id"/>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ProjectDetailContainer from "~/components/project/ProjectDetailContainer.vue";

@Component({
  components: {ProjectDetailContainer}
})
export default class ProjectDetail extends Vue {

}
</script>
<style lang="scss" scoped>

</style>
