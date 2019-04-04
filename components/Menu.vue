<template>
  <div>
    <v-toolbar id="toolbar" class="setColor" dark fixed>
      <v-toolbar-side-icon
        @click="sideNav = true"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>

      <v-toolbar-items id="toolBarItems">
        <v-btn class="hidden-xs-only" flat to="/">Startseite</v-btn>
        <v-btn class="hidden-xs-only" flat to="/therapieangebot"
          >Therapieangebot</v-btn
        >
        <v-btn class="hidden-xs-only" flat to="/datenschutz">Datenschutz</v-btn>
        <v-btn class="hidden-xs-only" flat to="/impressum">Impressum</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="sideNav"
      class="setColor"
      dark
      height="80vh"
      width="250px"
      fixed
      temporary
    >
      <v-list>
        <v-btn to="/">Startseite</v-btn>

        <v-btn to="/therapieangebot">Therapieangebot</v-btn>

        <v-btn to="/datenschutz">Datenschutz</v-btn>

        <v-btn to="/impressum">Impressum</v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    }
  }
}
</script>

<style scoped>
#toolBarItems {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}

#toolbar {
  z-index: 3;
}

.setColor {
  background-color: #90a5e4 !important;
}

.v-list > .v-btn {
  height: 20vh;
  margin: 0;
  padding: 0;
  background-color: #90a5e4 !important;
}

.v-list {
  height: 100%;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
