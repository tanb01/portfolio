<template>
  <v-container>
    <div class="about-card -shadow">
      <v-row>
        <v-col class="pa-10">
          <p :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'h4']">
            Hi! My name is Benjamin, I love technology, coding applications and
            websites.
          </p>
          <p :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'h4']">
            I am naturally curious and I am always learning. My insatiable
            hunger for knowledge has led me to completing a dual masters
            program. My first masters is in information systems engineering with
            a focus in cybersecurity at ECE, an engineering school in Paris,
            France. My second masters is in management at Audencia Business
            School in Nantes, France.
          </p>
          <p :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'h4']">
            Today I search for an internship in cybersecurity consulting to
            start working in January 2023. I am open to all opportunities, you
            can contact me at
            <a href="mailto:bentanpro@gmail.com">bentanpro@gmail.com</a>
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    about: Object,
  },
};
</script>

<style scoped>
.about-card {
  margin: 0 auto;
  max-width: 700px;
  padding: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: rgba(147, 147, 147, 0.19);
  border-radius: 4px;
}
.about-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.about-card > .title {
  margin: 0;
}
.subtitle {
  font-weight: 500;
}
.subtitle-text {
  font-weight: 300;
}
.description {
  font-weight: 400;
}

a:link {
  text-decoration: none;
}

.about-logo {
  border-radius: 4px;
}
</style>
