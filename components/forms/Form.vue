<template>
  <form>
    <div class="message is-danger" v-if="errorSummary">
      <div class="message-body">
        {{errorSummary}}
      </div>
    </div>
    <slot>

    </slot>
  </form>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Form extends Vue {
    @Prop() errorSummary!: string | null;
  }
</script>
<style lang="scss" scoped>

</style>
