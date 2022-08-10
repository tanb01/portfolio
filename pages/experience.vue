<template>
  <div class="page">
    <v-row justify="center">
      <v-col align="center">
        <h1>Experience</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col align="center">
        <v-btn :to="{ name: 'experience-create' }" text color="blue" nuxt
          ><v-icon left>mdi-plus-circle-outline</v-icon>
          <span>Create an Experience</span>
        </v-btn>
      </v-col>
    </v-row>
    <ExperienceCard
      v-for="experience in experiences"
      :key="experience.company"
      :experience="experience"
    />
  </div>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard";
import { mapState } from "vuex";
import { StoreDB } from "../services/fireinit";
export default {
  name: "ExperiencePage",
  components: {
    ExperienceCard,
  },
  data() {
    return {
      // experiences: [],
    };
  },
  computed: mapState({
    experiences: (state) => state.experience.experiences,

    // alert(this.$store.state.experiences);
  }),
  // async fetch() {
  //   const ref = StoreDB.collection("experiences");
  //   try {
  //     const snapshot = await ref.get();
  //     snapshot.forEach((doc, obj) => {
  //       obj = { ...doc.data(), ...{ id: doc.id } };
  //       this.experiences.push(obj);
  //     });
  //     // console.log("exper", this.experiences);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
};
</script>

<style>
.page {
  /* height: 670px; */
  background-color: rgba(123, 123, 123, 0.2);
}
</style>
