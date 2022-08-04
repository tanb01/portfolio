<template>
  <v-container>
    <div class="experience-card -shadow">
      <router-link
        class="experience-link"
        :to="{
          name: 'experience-show',
          params: { id: experience.experienceId },
        }"
      >
        <div>
          <h3 class="title">{{ experience.name }}</h3>
          <span class="eyebrow"
            >Date: {{ this.experience.experienceDate }}</span
          >
        </div>
      </router-link>
      <div class="button-group">
        <router-link
          :to="{
            name: 'experience-edit',
            params: { id: experience.experienceId },
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
        <!-- <ConfirmDialog ref="confirm" /> -->
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    experience: Object,
  },
  // components: {
  //   ConfirmDialog: ConfirmDialog
  // },
  created() {
    // dayjs.extend(calendar)
    // dayjs.extend(updateLocale)
    // dayjs.updateLocale('en', {
    //   calendar: {
    //     sameElse: 'DD/MM/YYYY hh:mm A'
    //   }
    // })
  },
  filters: {
    // formatDate: (date) => {
    //   if (!date) {
    //     return null
    //   }
    //   return dayjs(date).calendar()
    // }
  },
  methods: {
    // async deleteexperience() {
    //   if (
    //     await this.$refs.confirm.open(
    //       'Confirm',
    //       'Are you sure you want to delete this experience?'
    //     )
    //   ) {
    //     this.$store.dispatch('experience/deleteexperience', this.experience)
    //   }
    // }
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
}
.experience-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.experience-card > .title {
  margin: 0;
}
.experience-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
.button-group {
  text-align: right;
}
</style>
