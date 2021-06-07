<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-head">
      <Navigation />
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">{{ $t('app.name') }}</p>
        <p class="subtitle">{{ $t('app.slogan') }}</p>
      </div>
    </div>
    <div class="hero-foot mb-3">
      <FooterContent class="has-text-white"/>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Icon from "~/components/Icon.vue";
import FooterContent from "~/components/layout/FooterContent.vue";
import Navigation from "~/components/Navigation.vue";

@Component({
  components: {Navigation, FooterContent, Icon}
})
export default class Index extends Vue {

  public layout(): string {
    return 'landing-page';
  }
}
</script>
