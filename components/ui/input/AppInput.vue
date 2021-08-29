<template>
  <label
    :for="id"
    class="relative | w-full max-w-xl"
  >
    <span class="absolute | left-4 top-1/2 | text-gray-400 | transform -translate-y-1/2 | select-none cursor-text | material-icons">
      search
    </span>
    <input
      :id="id"
      v-model="inputValue"
      class="w-full | py-4 px-14 | bg-white | rounded-md | shadow-md"
      type="text"
      placeholder="Search..."
    >
    <button
      class="absolute | right-4 top-1/2 | text-gray-400 | transform -translate-y-1/2 | select-none cursor-pointer | material-icons"
      :class="{ 'hidden' : isEmpty }"
      @click="clearInput"
      @keydown.enter="clearInput"
    >
      cancel
    </button>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from 'nuxt-property-decorator';

@Component
export default class AppInput extends Vue {
  @Prop({ type: String, required: true })
  readonly id!: string;

  @VModel({ type: String }) inputValue!: string;

  get isEmpty (): boolean {
    return !this.inputValue.trim();
  }

  clearInput (): void {
    this.inputValue = '';
  }
}
</script>
