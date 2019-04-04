<template>
  <div>
    <div class="row mt-4">
      <div class="col-6 hidden-sm-and-down">
        <div class="bold mb-2">Kontakt:</div>
        <div>Psychotherapeutische Praxis Barbara Seidl</div>
        <div>Iblherstraße 18, 82380 Peißenberg</div>
        <div class="mt-2">Telefonnummer: 0176 56992742</div>
        <div class="mt-2">Telefonische Sprechzeiten:</div>
        <div>Dienstags 8:00 bis 08:50 und Donnerstags 12:00 bis 12:50</div>

        <div style="border: 1px solid black;" class="row mt-4 p-2 m-0">
          <v-icon class="col-2 p-0">info</v-icon>

          <div class="col-10 p-0" style="width:100%;">
            Erstanfragen zur Psychotherapie richten Sie bitte immer während der
            telefonischen Sprechzeiten an mich.
          </div>
        </div>
      </div>

      <div class="col-12 hidden-md-and-up">
        <div class="bold mb-2">Kontakt:</div>
        <div>Psychotherapeutische Praxis Barbara Seidl</div>
        <div>Iblherstraße 18, 82380 Peißenberg</div>
        <div class="mt-2">Telefonnummer: 0176 56992742</div>
        <div class="mt-2">Telefonische Sprechzeiten:</div>
        <div>Dienstags 8:00 bis 08:50 und Donnerstags 12:00 bis 12:50</div>

        <div style="border: 1px solid black;" class="row mt-4 p-3 pr-2 m-0">
          <v-icon class="col-1 p-0">info</v-icon>
          <div class="col-1 p-0"></div>
          <div class="col-10 p-0">
            Erstanfragen zur Psychotherapie richten Sie bitte immer während der
            telefonischen Sprechzeiten an mich.
          </div>
        </div>
      </div>

      <div class="col-12 hidden-md-and-up mt-4">
        <div class="mapouter">
          <div class="gmap_canvas img-fluid">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%20Iblherstra%C3%9Fe%2018%2C%2082380%20Pei%C3%9Fenberg&t=&z=17&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <a href="https://www.pureblack.de"></a>
          </div>
        </div>
      </div>

      <div class="col-6 hidden-sm-and-down">
        <div class="mapouter">
          <div class="gmap_canvas img-fluid">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%20Iblherstra%C3%9Fe%2018%2C%2082380%20Pei%C3%9Fenberg&t=&z=17&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <a href="https://www.pureblack.de"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#gmap_canvas {
  width: 100vw;
  min-height: 40vh;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
