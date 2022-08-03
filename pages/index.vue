<template>
  <div>
    <v-card>
      <v-responsive>
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
      </v-responsive>
    </v-card>
    <v-row justify="center" align="center" class="mt-4">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <NuxtLogo />
          <VuetifyLogo />
        </v-card>
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/education"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
