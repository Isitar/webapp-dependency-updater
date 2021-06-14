<template>
  <div class="detail-list-item block">
    <div class="detail-list-item-icon pt-2 pr-2 pb-2">
      <Icon :icon="icon"/>
    </div>
    <div class="detail-list-item-content">
      <div class="detail-list-item-title title is-size-7">{{ title }}</div>
      <div class="detail-list-item-description subtitle is-size-6 nl2br">
        <slot name="description">
          <template v-if="description">{{ description }}</template>
          <NullDisplay v-else/>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Icon from "~/components/layout/Icon.vue";
import NullDisplay from "~/components/detailView/NullDisplay.vue";

@Component({
  components: {NullDisplay, Icon}
})
export default class DetailListItem extends Vue {
  @Prop({type: String, required: true})
  public title!: string;

  @Prop({default: null})
  public description!: string | null;

  @Prop({type: String, default: null})
  public icon!: string | null;
}
</script>
<style lang="scss" scoped>
.detail-list-item {
  display: grid;
  grid-template-columns: auto 1fr;

  .detail-list-item-icon {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
</style>
