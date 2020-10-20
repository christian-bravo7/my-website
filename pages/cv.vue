<template>
  <section class="container">
    <div class="grid-base cv-content">
      <div class="grid-base">
        <div class="card profile-card">
          <div>
            <div class="cv-profile-info">
              <figure class="cv-profile-info__selfie">
                <img
                  src="~assets/img/jest.svg"
                  alt=""
                >
              </figure>
              <div>
                <h1 class="cv-profile-info__name">
                  Christian Bravo
                </h1>
                <h2 class="cv-profile-info__position">
                  Frontend developer
                </h2>
              </div>
            </div>
            <div class="cv-profile-stats">
              <div class="cv-profile-stats__section">
                <h6 class="cv-profile-stats__section-name">
                  Exp. Years
                </h6>
                <span class="cv-profile-stats__section-value">2</span>
              </div>
              <div class="cv-profile-stats__section">
                <h6 class="cv-profile-stats__section-name">
                  Exp. Years
                </h6>
                <span class="cv-profile-stats__section-value">2</span>
              </div>
              <div class="cv-profile-stats__section">
                <h6 class="cv-profile-stats__section-name">
                  Exp. Years
                </h6>
                <span class="cv-profile-stats__section-value">2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card profile-card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quam beatae, neque sit pariatur voluptatum porro repellat id tenetur deleniti nihil aliquid voluptatibus atque! Incidunt eius esse reiciendis accusantium?
        </div>
      </div>
      <div class="card profile-card">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quam beatae, neque sit pariatur voluptatum porro repellat id tenetur deleniti nihil aliquid voluptatibus atque! Incidunt eius esse reiciendis accusantium?
      </div>
      <div class="card profile-card">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quam beatae, neque sit pariatur voluptatum porro repellat id tenetur deleniti nihil aliquid voluptatibus atque! Incidunt eius esse reiciendis accusantium?
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  layout: 'cv',
})
export default class Cv extends Vue {}
</script>

<style lang="scss" scoped>
.grid-base {
  display: grid;
  gap: rem(16);
}

.cv-content {
  grid-template-columns: 2fr 3fr 2fr;
}

.cv-profile-info {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: rem(8);

  &__name {
    font-weight: bold;
    font-size: rem(24);
  }

  &__selfie {
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(80);
    height: rem(80);
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.profile-card {
  padding: rem(8);
}

.cv-profile-stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: rem(8);
  margin: rem(16) 0;

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__section-name {
    font-size: rem(14);
  }

  &__section-value {
    color: $pink-800;
    font-weight: bold;
    font-size: rem(18);
  }
}
</style>
