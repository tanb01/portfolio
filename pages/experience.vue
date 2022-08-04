<template>
  <div class="page">
    <v-row justify="center">
      <v-col align="center">
        <h1>Experience</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col align="center">
        <v-btn :to="{ name: 'experience-create' }" text color="blue"
          ><v-icon left>mdi-plus-circle-outline</v-icon>
          <span>Create an Experience</span>
        </v-btn>
      </v-col>
    </v-row>
    <ExperienceCard
      v-for="experience in experiences"
      :key="experience.experienceId"
      :experience="experience"
    />
  </div>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard";
import { mapState } from "vuex";
export default {
  name: "ExperiencePage",
  components: {
    ExperienceCard,
  },
  data() {
    return {
      experiences: [
        {
          experienceId: 1,
          name: "something",
          date: "cool",
        },
      ],
    };
  },
  created() {
    // this.$store.dispatch("experience/fetchExperiences");
    // experiences = {
    //   experienceId: 1,
    //   name: "something",
    //   date: "cool",
    // };
  },
  // computed: mapState({
  //   experiences: (state) => state.experience.experiences,
  // }),
  // computed() {
  // this.$store.dispatch("experience/fetchExperiences");
  // experiences = {
  //   experienceId: 1,
  //   name: "something",
  //   date: "cool",
  // };
  // },
};
</script>

<style>
.page {
  height: 670px;
}
</style>
