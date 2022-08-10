<template>
  <div class="page">
    <h1>Showing experience #{{ this.id }}</h1>
    <v-container>
      <v-card elevation="2" outlined>
        <v-row>
          <v-col>
            <v-card-title class="display-1 text--primary">{{
              this.id
            }}</v-card-title></v-col
          >
          <v-col>
            <div class="button-group">
              <v-btn
                :to="{
                  name: 'experience-edit',
                  params: { id: experience.id },
                }"
                text
                color="primary"
                ><v-icon left>mdi-pencil</v-icon>
                <span>Edit</span>
              </v-btn>
              <v-btn text color="red" @click="deleteExperience()"
                ><v-icon left>mdi-delete</v-icon>
                <span>Delete</span>
              </v-btn>
              <!-- <ConfirmDialog ref="confirm" /> -->
            </div>
          </v-col>
        </v-row>
        <v-card-text>
          <div class="headline text--primary">Date of experience: {{}}</div>
          <!-- <v-date-picker v-model="picker" readonly></v-date-picker> -->
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { StoreDB } from "../services/fireinit";

export default {
  props: ["id"],
  components: {
    // ConfirmDialog: ConfirmDialog,
  },

  data() {
    return {
      experience: {},
      picker: "", // this.picker = this.experience.experienceDate.substr(0, 10)
    };
  },
  async fetch() {
    const ref = StoreDB.collection("experiences").doc(this.experience.id);
    console.log("idd", this.id);
    try {
      const snapshot = await ref.get();
      this.experience = { ...snapshot.data(), ...{ id: this.experience.id } };
      console.log("exper", this.experience);
      // console.log("exper", this.experiences);
    } catch (error) {
      console.error(error);
    }
  },
  computed: mapState({
    // ...mapState(["product"]),
  }),
};
</script>

<style scoped>
.button-group {
  padding: 10px;
  text-align: right;
}
</style>
