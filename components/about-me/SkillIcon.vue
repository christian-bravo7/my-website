<template>
  <div class="skill-icon">
    <slot name="default" />
    <span>
      {{ name }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class SkillIcon extends Vue {
  @Prop({ type: String, required: true })
  readonly name!: string;
}
</script>

<style lang="scss" scoped>
.skill-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: rem(8);
  transition: box-shadow 250ms;

  > span {
    margin-top: rem(8);
    color: var(--text-light);
    font-weight: $weight-bold;
    font-size: $size-5;
    transition: color 250ms;
  }

  > svg {
    width: rem(50);
    fill: var(--asset-highlight);
  }

  &:hover {
    box-shadow: $box-shadow;

    > span {
      color: var(--asset-highlight);
    }
  }
}

@include mobile {
  .skill-icon {
    > span {
      font-size: rem(16);
    }
  }
}
</style>
