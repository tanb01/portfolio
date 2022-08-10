<template>
  <div class="page">
    <h1>Add an Experience</h1>
    <form @submit.prevent="writeExperienceToFirestore">
      <h3>Name and date your experience</h3>
      <div class="field">
        <v-text-field
          label="Company"
          v-model="experience.company"
          type="text"
          required
        />
      </div>
      <div class="field">
        <v-text-field
          label="Position"
          v-model="experience.position"
          type="text"
          required
        />
      </div>
      <div class="field">
        <v-text-field
          label="City"
          v-model="experience.city"
          type="text"
          required
        />
      </div>
      <div class="field">
        <v-text-field
          label="Country"
          v-model="experience.country"
          type="text"
          required
        />
      </div>
      <div class="field">
        <v-text-field
          label="Contract Type"
          v-model="experience.contractType"
          type="text"
          required
        />
      </div>
      <div class="field">
        <v-text-field
          label="Description"
          v-model="experience.description"
          type="text"
          required
        />
      </div>
      <div class="field">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="startdate"
              label="Start Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="startdate"
            @input="menu = false"
          ></v-date-picker>
        </v-menu>
      </div>
      <div class="field">
        <v-menu
          v-model="endMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="enddate"
              label="End Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="enddate"
            @input="endMenu = false"
          ></v-date-picker>
        </v-menu>
      </div>
      <v-btn type="submit" class="blue white--text">Submit</v-btn>
    </form>
  </div>
</template>

<script>
import { StoreDB } from "../services/fireinit";
export default {
  data() {
    return {
      experience: this.createExperienceObject(),
      startDate: null,
      endDate: null,
      startdate: null,
      enddate: null,
      endMenu: false,
      menu: false,
    };
  },
  methods: {
    createExperience() {
      this.experience.startDate = this.startDate;
      this.experience.startDate = this.endDate;
    },
    createExperienceObject() {
      return {
        city: "",
        company: "",
        contractType: "",
        country: "",
        description: "",
        startDate: "",
        endDate: "",
        image: "",
        position: "",
      };
    },
    async writeExperienceToFirestore() {
      try {
        const res = await StoreDB.collection("experiences").add({
          city: this.experience.city,
          company: this.experience.company,
          contractType: this.experience.contractType,
          country: this.experience.country,
          description: this.experience.description,
          startDate: this.experience.startDate,
          endDate: this.experience.endDate,
          image: "",
          position: this.experience.position,
        });
        // console.log("Added document with ID: ", res.id);
        alert("Success!");
        Object.keys(this.experience).forEach((key) => {
          this.experience[key] = "";
        });
      } catch (e) {
        alert("Error!");
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
.page {
  text-align: center;
  margin: 0 auto;
}
.field {
  max-width: 300px;
  margin-bottom: 24px;
  margin: 0 auto;
}
</style>
