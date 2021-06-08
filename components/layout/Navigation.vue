<template>
  <nav class="navbar" :class="{'is-transparent': isTransparent, 'is-primary': !isTransparent}" role="navigation">
    <div class="navbar-brand">
      <NuxtLink :to="localePath('/')" class="navbar-item">
        <Logo height="32px" color="#fff"/>
      </NuxtLink>

      <a class="navbar-burger" @click="mobileMenuOpen = !mobileMenuOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': mobileMenuOpen }">
      <div class="navbar-end">
        <NuxtLink class="navbar-item" :to="localePath('/cockpit')">{{ $t('cockpit') }}</NuxtLink>
        <NuxtLink class="navbar-item" :to="localePath('/platforms')">{{ $t('platform.plural') }}</NuxtLink>
        <NuxtLink class="navbar-item" :to="localePath('/projects')">{{ $t('project.plural') }}</NuxtLink>
        <a class="navbar-item" @click="$store.commit('ui/setDarkMode', !$store.state.ui.darkMode)">Darkmode</a>
        <div v-if="availableLocales.length > 0" class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">{{ $i18n.locale }}</div>
          <div class="navbar-dropdown is-boxed has-text-black">
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale"
              class="navbar-item"
              :to="switchLocalePath(locale)"
            >
              {{ locale }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator';
import Logo from '~/components/layout/Logo.vue';
import {Prop} from "vue-property-decorator";

@Component({
  components: {Logo}
})
export default class Navigation extends Vue {
  private mobileMenuOpen: boolean = false;
  @Prop({type: Boolean, default: false})
  public isTransparent!: boolean;

  private get availableLocales(): string[] {
    const locales = this.$i18n.locales as { code: string }[];
    return locales.filter(l => l.code !== this.$i18n.locale).map(l => l.code);
  }

}
</script>

<style lang="scss" scoped>

</style>
