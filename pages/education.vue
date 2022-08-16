<template>
  <div class="page">
    <v-row justify="center">
      <v-col align="center">
        <h1>Education</h1>
      </v-col>
    </v-row>
    <EducationCard
      v-for="school in schools"
      :key="school.company"
      :school="school"
    />
  </div>
</template>

<script>
import EducationCard from "@/components/EducationCard";
import { StoreDB } from "../services/fireinit";
export default {
  name: "EducationPage",
  components: {
    EducationCard,
  },
  data() {
    return {
      schools: [],
    };
  },
  async fetch() {
    const ref = StoreDB.collection("schools");
    try {
      const snapshot = await ref.get();
      snapshot.forEach((doc, obj) => {
        obj = { ...doc.data(), ...{ id: doc.id } };
        this.schools.push(obj);
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
