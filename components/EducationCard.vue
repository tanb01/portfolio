<template>
  <v-container>
    <div class="school-card -shadow">
      <v-row>
        <v-col cols="12" lg="1" md="4" sm="12">
          <v-img
            max-width="50"
            :src="require('@/static/img/audencia-logo.jpg')"
          />
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
import { deleteField } from "firebase/firestore";
import { StoreDB } from "../services/fireinit";
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
.school-link {
  color: white;
  text-decoration: none;
  font-weight: 100;
  text-align: justify;
}
.button-group {
  text-align: right;
}
a:link {
  text-decoration: none;
}
</style>
