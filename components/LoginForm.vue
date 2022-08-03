<template>
  <v-container>
    <v-btn primary @click.native="signInWithGoogle">Sign In with Google</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signInWithGoogle() {
      this.$store
        .dispatch("signInWithGoogle")
        .then(() => {})
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
};
</script>
