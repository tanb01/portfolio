<template>
  <v-container>
    <div class="school-card -shadow">
      <v-row>
        <v-col align="center" cols="12" lg="2" md="2" sm="3">
          <v-img class="school-logo" width="100px" :src="school.logo" />
        </v-col>
        <v-col>
          <h3 class="title">{{ school.name }}</h3>
          <h4 class="subtitle">
            {{ school.degree }}
          </h4>
          <h5 class="subtitle-text">
            {{ school.startDate }} - {{ school.endDate }} · Duration
          </h5>
          <h5 class="description">
            {{ school.description }}
          </h5>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    school: Object,
  },
};
</script>

<style scoped>
.school-card {
  margin: 0 auto;
  max-width: 700px;
  padding: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: rgba(147, 147, 147, 0.19);
  border-radius: 4px;
}
.school-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.school-card > .title {
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

.school-logo {
  border-radius: 4px;
}
</style>
