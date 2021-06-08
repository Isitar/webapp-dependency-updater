<template>
  <div class="is-flex is-flex-direction-column">
    <Navigation />
    <Nuxt class="is-flex-grow-1" />
    <footer class="footer">
      <FooterContent />
    </footer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navigation from "~/components/layout/Navigation.vue";
import FooterContent from "~/components/layout/FooterContent.vue";

@Component({
  components: {FooterContent, Navigation}
})
export default class Default extends Vue {

}
</script>
<style lang="scss" scoped>

</style>

