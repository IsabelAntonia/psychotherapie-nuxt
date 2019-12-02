<template>
  <div>
    <div class="row m-0">
      <div class="col-xs-12 col-lg-4 pl-0">
        <div class="bold">Kontakt:</div>

        <ul>
          <li>Psychotherapeutische Praxis Barbara Seidl</li>
          <li>Iblherstr. 18, 82380 Peißenberg</li>
          <li>Tel.: 0176 56992742</li>
          <li id="small">Dipl.Psych.Barbara.Seidl@gmx.de</li>
        </ul>
      </div>

      <!-- <div class="col-xl-1 hidden-lg-and-down"></div> -->

      <div class="col-xs-12 col-lg-4 noPadding">
        <div class="bold">Zuständige Aufsichtsbehörde:</div>

        <ul>
          <li>Psychotherapeutenkammer Bayern</li>
          <li>Birketweg 30</li>
          <li>800639 München</li>
          <br />
          <li>Postfach 151506</li>
          <li>80049 München</li>
        </ul>
      </div>
      <!-- <div class="col-xl-1 hidden-lg-and-down"></div> -->

      <div class="col-xs-12 col-lg-4 noPadding">
        <div class="bold">Zuständige Kassenärztliche Vereinigung:</div>

        <ul>
          <li>Kassenärztliche Vereinigung Bayerns</li>
          <li>Elsenheimerstr. 39</li>
          <li>80687 München</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.row {
  text-align: left !important;
}

#small {
  font-size: 14px !important;
}

@media (max-width: 575.98px) {
  .noPadding {
    padding: 0 !important;
  }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .noPadding {
    padding: 0 !important;
  }
}
</style>
