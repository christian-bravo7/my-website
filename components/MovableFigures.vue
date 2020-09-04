<template>
  <div class="movable-figures">
    <figure
      class="figure figure--1"
      :class="currentRoute"
    >
      <TriangleSolid />
    </figure>
    <figure
      class="figure figure--2"
      :class="currentRoute"
    >
      <TriangleOutlined />
    </figure>
    <figure
      class="figure figure--3"
      :class="currentRoute"
    >
      <SquareOutlined />
    </figure>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TriangleSolid from '~/assets/img/triangle-solid.svg?inline';
import TriangleOutlined from '~/assets/img/triangle-outlined.svg?inline';
import SquareSolid from '~/assets/img/square-solid.svg?inline';
import SquareOutlined from '~/assets/img/square-outlined.svg?inline';

@Component({
  components: {
    TriangleSolid,
    TriangleOutlined,
    SquareSolid,
    SquareOutlined,
  },
})
export default class MovableFigures extends Vue {
  @Prop({ type: String, required: true }) currentRoute!: string;
}

</script>

<style lang="scss" scoped>
.movable-figures {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.figure {
  $self: &;

  position: absolute;
  width: rem(25);
  height: rem(25);
  transition: 4s;

  & > svg {
    width: 100%;
    height: 100%;
  }

  &--1 {
    > svg {
      fill: var(--asset-normal);
    }
  }

  &--2 {
    > svg {
      fill: var(--asset-highlight);
    }
  }

  &--3 {
    > svg {
      fill: var(--asset-highlight);
    }
  }

  &.index {
    &#{$self}--1 {
      top: 25%;
      left: 80%;
      transform: rotate(35deg);
    }
    &#{$self}--2 {
      top: 20%;
      left: 20%;
      transform: rotate(-35deg);
    }
    &#{$self}--3 {
      top: 80%;
      left: 60%;
      transform: rotate(100deg);
    }
  }

  &.me {
    &#{$self}--1 {
      top: 25%;
      left: 50%;
      transform: rotate(0deg);
    }
    &#{$self}--2 {
      top: 80%;
      left: 30%;
      transform: rotate(-100deg);
    }
    &#{$self}--3 {
      top: 50%;
      left: 75%;
      transform: rotate(-80deg);
    }
  }
}

@include mobile {
  .figure {
    & > svg {
      opacity: 0.6;
    }
  }
}
</style>
