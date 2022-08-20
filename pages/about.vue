<template>
  <div class="page">
    <v-row justify="center">
      <v-col align="center">
        <h1>About Me</h1>
      </v-col>
    </v-row>
    <AboutMeCard />
  </div>
</template>

<script>
import AboutMeCard from "@/components/AboutMeCard";
export default {
  name: "AboutMePage",
  components: {
    AboutMeCard,
  },
  data() {
    return {
      schools: [],
    };
  },
};
</script>
