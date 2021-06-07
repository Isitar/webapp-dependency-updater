<template>
  <div>
    <PageHeader :title="$t('cockpit')"/>
    <section class="section">
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"># Platformen</p>
            <p class="title">1</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"># Projekte</p>
            <p class="title has-text-success">426</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading"># Outdated Projekte</p>
            <p class="title has-text-danger">3</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import PageHeader from "~/components/layout/PageHeader.vue";

@Component({
  components: {PageHeader}
})
export default class Cockpit extends Vue {

}
</script>

