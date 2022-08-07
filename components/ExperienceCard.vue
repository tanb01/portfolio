<template>
  <v-container>
    <div class="experience-card -shadow">
      <router-link
        class="experience-link"
        :to="{
          name: 'experience-show',
          params: { id: experience.id },
        }"
      >
        <div>
          <h3 class="title">{{ this.experience.position }}</h3>
          <h4 class="subtitle">
            {{ experience.company }} · {{ this.experience.contractType }}
          </h4>
          <h5 class="subtitle-text">
            {{ this.experience.startDate }} - {{ this.experience.endDate }} ·
            Duration
          </h5>
          <h5 class="subtitle-text">
            {{ this.experience.city }}, {{ this.experience.country }}
          </h5>
          <h5 class="description">
            {{ this.experience.description }}
          </h5>
        </div>
      </router-link>
      <div class="button-group">
        <router-link
          :to="{
            name: 'experience-edit',
            params: { id: experience.id },
          }"
        >
          <v-btn text color="primary"
            ><v-icon left>mdi-pencil</v-icon>
            <span>Edit</span>
          </v-btn>
        </router-link>
        <v-btn text color="red" @click="deleteExperience()"
          ><v-icon left>mdi-delete</v-icon>
          <span>Delete</span>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { deleteField } from "firebase/firestore";
import { StoreDB } from "../services/fireinit";
export default {
  props: {
    experience: Object,
  },
  methods: {
    async deleteExperience() {
      const ref = StoreDB.collection("experiences").doc(this.experience.id);
      console.log("ref", ref);
      try {
        const deleteFieldsRes = await ref.update({
          city: deleteField(),
          company: deleteField(),
          contractType: deleteField(),
          country: deleteField(),
          description: deleteField(),
          endDate: deleteField(),
          startDate: deleteField(),
          image: deleteField(),
          position: deleteField(),
        });
        const deleteDocumentRes = await StoreDB.collection("experiences")
          .doc(this.experience.id)
          .delete();
        console.log("res", deleteDocumentRes);
        alert("Success!");
      } catch (error) {
        alert("Error!");
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.experience-card {
  margin: 0 auto;
  max-width: 700px;
  padding: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
  background-color: rgba(147, 147, 147, 0.19);
  border-radius: 4px;
}
.experience-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.experience-card > .title {
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
.experience-link {
  color: white;
  text-decoration: none;
  font-weight: 100;
  text-align: justify;
}
.button-group {
  text-align: right;
}
</style>
