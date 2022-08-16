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
import { StoreDB } from "../services/fireinit";
export default {
  name: "ExperiencePage",
  components: {
    ExperienceCard,
  },
  data() {
    return {
      experiences: [],
    };
  },
  async fetch() {
    const ref = StoreDB.collection("experiences");
    try {
      const snapshot = await ref.get();
      snapshot.forEach((doc, obj) => {
        obj = { ...doc.data(), ...{ id: doc.id } };
        this.experiences.push(obj);
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
.page {
  background-color: rgba(123, 123, 123, 0.2);
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  padding: 12px;
}
</style>
