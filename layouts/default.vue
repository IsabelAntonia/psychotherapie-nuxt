<template>
  <v-app>
    <Menu></Menu>

    <v-content>
      <!-- <div class="background-image"> -->
      <nuxt />
      <!-- </div> -->
    </v-content>

    <v-footer id="footer" inset class="hidden-sm-and-down fixed-bottom">
      <v-layout>
        <v-flex text-xs-center>
          Psychotherapie Barbara Seidl |
          <router-link to="/datenschutz">Datenschutz</router-link>&
          <router-link to="/impressum">Impressum |</router-link>Gestaltung:
          Isabel Seidl
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  name: 'App',

  components: { Menu },

  data() {
    return {
      //
    }
  }
}
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.background-image {
  position: fixed;
  z-index: 1;
  background-image: url('~@/assets/flower2.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.content {
  margin-top: 10% !important;
  position: absolute;
  width: 80%;
  padding: 5%;
  height: auto;
  margin-left: 10%;
  margin-right: 10%;
  z-index: 2;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.9);
  margin-bottom: 10%;
  text-align: left;
  color: #2c3e50;
}

@media (min-width: 768px) and (max-width: 1199.98px) {
  p {
    text-align: justify !important;
  }
}

@media (min-width: 1200px) {
  p {
    text-align: justify !important;
  }

  .content {
    width: 70% !important;
    margin-left: 15% !important;
    margin-right: 15% !important;
  }
}

@media (max-width: 575.98px) {
  .content {
    font-size: 14px;
  }

  h2 {
    font-size: 3.5vh !important;
  }
}

h2 {
  font-size: 3vh;
  margin-bottom: 4vh;
  text-align: center;
}

.bold {
  font-weight: bolder;
  text-decoration: underline;
}

ul {
  margin-bottom: 4vh;
  list-style: none;
}

li {
  margin-top: 1vh;
}

.marginBottom {
  margin-bottom: 4vh;
}

#footer {
  background-color: #fff7f8;
}
</style>
