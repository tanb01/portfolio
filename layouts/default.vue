<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-container>
        <v-btn class="ma-2" outlined href="" download> Resume </v-btn>
        <v-btn
          v-if="$vuetify.theme.dark"
          class="mx-2"
          fab
          small
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon> mdi-brightness-6 </v-icon>
        </v-btn>
        <v-btn
          v-if="!$vuetify.theme.dark"
          class="mx-2"
          fab
          small
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon> mdi-weather-night </v-icon>
        </v-btn>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app :class="{ 'navbar--hidden': !showNavbar }">
      <v-app-bar-nav-icon icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-briefcase",
          title: "Experience",
          to: { path: "/", hash: "#experience" },
        },
        {
          icon: "mdi-school",
          title: "Education",
          to: { path: "/", hash: "#education" },
        },
        {
          icon: "mdi-creation",
          title: "Skills",
          to: { path: "/", hash: "#skills" },
        },
        {
          icon: "mdi-clipboard-check-multiple-outline",
          title: "Projects",
          to: { path: "/", hash: "#projects" },
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Benjamin Tan",
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style>
.v-navigation-drawer {
  height: 500px;
}

.v-app-bar {
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}

.v-app-bar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0) !important;
  transition: 0.2s all ease-out;
}
</style>
