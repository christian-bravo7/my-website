<template>
  <div class="theme-switch">
    <input
      id="theme-switch"
      class="theme-switch__checkbox"
      type="checkbox"
      :checked="hasDarkTheme"
      @change="changeTheme"
    >
    <label
      class="theme-switch__label"
      for="theme-switch"
    >
      <span class="theme-switch__bar" />
      <span class="theme-switch__circle">
        <i
          v-if="hasDarkTheme"
          class="theme-switch__icon material-icons"
        >
          brightness_2
        </i>
        <i
          v-else
          class="theme-switch__icon material-icons"
        >
          wb_sunny
        </i>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { mapGetters, mapMutations } from 'vuex';

@Component({
  computed: {
    ...mapGetters({
      hasDarkTheme: 'guest/hasDarkTheme',
    }),
  },
  methods: {
    ...mapMutations({
      changeTheme: 'guest/changeTheme',
    }),
  },
})
export default class ThemeSwitch extends Vue {}
</script>

<style lang="scss" scoped>
.theme-switch {
  position: relative;
  display: flex;
  user-select: none;

  &__bar {
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--text-light);
    border-radius: 10px;
    transform: translateY(-50%);
  }

  &__circle {
    position: absolute;
    top: 50%;
    left: calc(0% - 12px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(24);
    height: rem(24);
    background-color: $gray-50;
    border-radius: 50%;
    box-shadow: 0 0 8px -2px;
    transform: translateY(-50%);
    transition-duration: 250ms;
    transition-property: transform, box-shadow, background-color, left;

    & > i {
      color: $pink-800;
      font-size: 14px;
      transition-duration: 250ms;
      transition-property: color;
    }
  }

  &__label {
    position: relative;
    display: block;
    width: rem(30);
    height: rem(16);
    cursor: pointer;
  }

  &__checkbox {
    display: none;

    &:checked + .theme-switch__label {
      .theme-switch__circle {
        left: calc(100% - 12px);
        background-color: #FFF;
        box-shadow: none;
        transform: translateY(-50%);

        & > i {
          color: var(--text-light);
        }
      }
    }
  }
}
</style>
