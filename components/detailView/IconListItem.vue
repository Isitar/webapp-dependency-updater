<template>
  <div class="icon-list-item">
    <Icon :icon="icon" class="mr-2 has-tooltip-right has-tooltip-right-top" :data-tooltip="tooltip"></Icon>
    <slot v-if="$slots.default"></slot>
    <NullDisplay v-else/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import NullDisplay from "~/components/detailView/NullDisplay.vue";
import Icon from "~/components/layout/Icon.vue";

@Component({
  components: {NullDisplay, Icon}
})
export default class ComponentName extends Vue {
  @Prop() public icon!: string;
  @Prop() public tooltip!: string | null;
}
</script>
<style lang="scss" scoped>
.icon-list-item {
  display: grid;
  grid-template-areas: "icon text";
  grid-template-columns: auto 1fr;
}
</style>
