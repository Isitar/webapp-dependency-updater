<template>
  <div class="content has-text-centered">
    <p>
      <Icon :icon="['fab', 'github']"/>
      <strong>{{ $t('app.name') }}</strong> by <a href="https://github.com/isitar" class="has-text-accent">Pascal Lüscher</a>
    </p>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Icon from "~/components/layout/Icon.vue";

@Component({
  components: {Icon}
})
export default class FooterContent extends Vue {

}
</script>
<style lang="scss" scoped>

</style>
