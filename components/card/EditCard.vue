<template>
  <Card :is-loading="isLoading">
    <template v-slot:header>
      <h2 class="card-header-title" v-if="title">{{ title }}</h2>
      <a class="card-header-icon" @click="edit" v-if="!editMode && !hideEdit">
        <Icon :icon="editIcon"/>
      </a>
      <span class="card-header-icon" v-if="editMode">
        <a @click="cancel" class="mr-1" v-if="!hideCancel">
          <Icon :icon="cancelIcon"/>
        </a>
        <a @click="save">
          <Icon :icon="saveIcon"/>
        </a>
      </span>

    </template>
    <template v-slot:body>
      <slot/>
    </template>
    <template v-slot:footer>
      <slot name="footer"/>
    </template>
  </Card>

</template>

<script lang="ts">
import {Component, Emit, Prop} from 'vue-property-decorator';
import Card from "@/components/card/Card.vue";
import Icon from "~/components/layout/Icon.vue";
import Icons from "~/constants/icons";

@Component({
  components: {Icon, Card}
})
export default class EditCard extends Card {
  @Prop() title!: string | null;
  @Prop({type: Boolean, default: false}) editMode!: boolean;
  @Prop({type: String, default: Icons.edit}) editIcon!: string;
  @Prop({type: String, default: Icons.save}) saveIcon!: string;
  @Prop({type: String, default: Icons.cancel}) cancelIcon!: string;
  @Prop({type: Boolean, default: false}) hideCancel!: boolean;
  @Prop({type: Boolean, default: false}) public hideEdit!: boolean;


  @Emit('edit') edit(event: Event) {
    return event;
  }

  @Emit('save') save(event: Event) {
    return event;
  }

  @Emit('cancel') cancel(event: Event) {
    return event;
  }
}
</script>
<style lang="scss" scoped>
</style>
