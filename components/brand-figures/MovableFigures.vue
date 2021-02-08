<template>
  <div class="hidden md:block absolute overflow-hidden w-full h-full pointer-events-none">
    <figure
      class="absolute w-48 h-48 rounded-full figure figure--1"
      :class="currentRoute"
    />
    <figure
      class="absolute w-32 h-32 rounded-full figure figure--2"
      :class="currentRoute"
    />
    <figure
      class="absolute w-20 h-20 rounded-full figure figure--3"
      :class="currentRoute"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MovableFigures extends Vue {
  @Prop({ type: String, required: true })
  currentRoute!: string;
}
</script>

<style lang="scss" scoped>

.figure--1 {
  background: linear-gradient(210deg, #FFFFFF1A 0%, #FE65651A 58%, #A40EB033 100%);
}

.figure--2 {
  background: linear-gradient(210deg, #FFFFFF1A 0%, #A8EDE938 58%, #FED6E385 100%);
}

.figure--3 {
  background: linear-gradient(210deg, #FFFFFF1A 0%, #C7EAFD3F 58%, #E8198B28 100%);
}

.figure {
  $self: &;

  transition: color 200ms, top 6s, left 6s, transform 6s;

  &.index {
    &#{$self}--1 {
      top: 30%;
      left: 92%;
    }
    &#{$self}--2 {
      top: 20%;
      left: 10%;
    }
    &#{$self}--3 {
      top: 80%;
      left: 60%;
    }
  }

  &.me {
    &#{$self}--1 {
      top: 20%;
      left: 80%;
    }
    &#{$self}--2 {
      top: 50%;
      left: 15%;
    }
    &#{$self}--3 {
      top: 90%;
      left: 70%;
    }
  }

  &.blog {
    &#{$self}--1 {
      top: 10%;
      left: 88%;
    }
    &#{$self}--2 {
      top: 60%;
      left: 5%;
    }
    &#{$self}--3 {
      top: 94%;
      left: 50%;
    }
  }
}

html.dark-mode {
  .figure {
    &::after {
      position: absolute;
      top: 50%;
      right: 0;
      bottom: 0;
      left: 50%;
      width: 97%;
      height: 97%;
      background: theme('colors.blue.800');
      border-radius: 50%;
      transform: translate(-50%, -50%);
      content: '';
    }
  }

  .figure--1 {
    background: linear-gradient(210deg, rgba(255, 255, 255, 0.46) 0%, rgba(254, 101, 101, 0.52) 58%, rgba(164, 14, 176, 0.86) 100%);
  }

  .figure--2 {
    background: linear-gradient(210deg, rgba(255, 255, 255, 0.62) 0%, rgba(168, 237, 233, 0.27) 58%, rgba(255, 71, 131, 0.6) 100%);
  }

  .figure--3 {
    background: linear-gradient(210deg, rgba(255, 255, 255, 0.44) 0%, rgba(199, 234, 253, 0.17) 58%, rgba(232, 25, 139, 0.86) 100%);
  }
}
</style>
