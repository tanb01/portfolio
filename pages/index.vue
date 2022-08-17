<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <!-- <v-parallax :src="require('@/assets/img/hack.jpg')" height="700" -->
          <v-parallax
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            height="700"
            ><v-row align="center" justify="center">
              <v-col class="text-left pa-16" cols="12" md="10" sm="6">
                <h3 class="h3-message">Hi,</h3>
                <h1 class="h1-message">I'm Ben,</h1>
                <h2 class="h2-message">A cybersecurity engineer by day,</h2>
                <h2 class="h2-message">
                  a software and web developer by night.
                </h2>
                <h4 class="headline">
                  Coding, and developing secure projects for humans around the
                  world.
                </h4>
              </v-col>
            </v-row>
          </v-parallax>
        </v-card>
      </v-col>
    </v-row>
    <v-row id="experience" justify="center" align="center">
      <v-col>
        <ExperiencePage />
      </v-col>
    </v-row>
    <v-row id="education" justify="center" align="center">
      <v-col>
        <EducationPage />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ExperiencePage from "../pages/experience.vue";
import EducationPage from "./education.vue";
export default {
  name: "IndexPage",
  components: { ExperiencePage, EducationPage },
};
</script>

<style>
.h1-message {
  font-weight: 300px;
  font-size: 6rem;
}

.h2-message {
  font-weight: 300px;
  font-size: 3.75rem;
}

.h3-message {
  font-weight: 300px;
  font-size: 3rem;
}
</style>
