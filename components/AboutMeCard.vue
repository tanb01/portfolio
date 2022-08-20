<template>
  <v-container>
    <div class="about-card -shadow">
      <v-row>
        <v-col>
          <h3 class="title">Title</h3>
          <h4 class="subtitle">Subtitle</h4>
          <h5 class="subtitle-text">Subtitle-Text</h5>
          <h5 class="description">Description</h5>
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
