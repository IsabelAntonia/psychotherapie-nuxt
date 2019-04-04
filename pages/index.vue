<template>
  <div>
    <div class="background-image"></div>
    <div class="content">
      <div class="hidden-sm-and-up">
        <br />
        <br />
      </div>

      <h2>
        Herzlich Willkommen in meiner Praxis für Psychotherapie in Peißenberg
      </h2>

      <ImageText></ImageText>
      <v-divider></v-divider>
      <TextforDesktop></TextforDesktop>
      <Map></Map>
      <v-divider></v-divider>
      <Anreise></Anreise>

      <br />
      <br />
    </div>
  </div>
</template>

<script>
import ImageText from '../components/ImageText.vue'
import TextforDesktop from '../components/TextforDesktop.vue'
import Map from '../components/Map.vue'
import Anreise from '../components/Anreise.vue'

export default {
  components: { ImageText, TextforDesktop, Map, Anreise }
}
</script>
