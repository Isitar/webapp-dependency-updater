<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div>
        <p class="title">{{ $t('project.plural') }}</p>
        <p class="subtitle">Hero subtitle</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';

@Component({})
export default class Projects extends Vue {

}
</script>
