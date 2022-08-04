<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-parallax
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            height="700"
            ><v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="text-h4 font-weight-thin mb-4">Never Stop Daring</h1>
                <h4 class="headline">Cybersecurity & Management</h4>
              </v-col>
            </v-row>
          </v-parallax>
        </v-card>
      </v-col>
    </v-row>
    <v-row id="experience" justify="center" align="center">
      <v-col>
        <v-card>
          <!-- <v-responsive height="660"> -->
          <ExperiencePage />
          <!-- </v-responsive> -->
        </v-card>

        <!-- <v-card class="logo py-4 d-flex justify-center">
          <NuxtLogo />
          <VuetifyLogo />
        </v-card>
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/experience"> Continue </v-btn>
          </v-card-actions>
        </v-card> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ExperiencePage from "../pages/experience.vue";
export default {
  name: "IndexPage",
  components: { ExperiencePage },
};
</script>
