<template>
  <div>
    <div class="row mb-4">
      <!-- for sm and xs -->
      <div
        style="text-align: center !important"
        class="col-12 hidden-md-and-up"
      >
        <img
          id="therapeutBildXsAndSm"
          class="img-fluid maxWidth"
          src="@/assets/Seidl_Barbara.jpg"
          alt="Barbara Seidl"
        />
      </div>

      <!-- for md -->
      <div class="col-4 hidden-sm-and-down hidden-lg-and-up">
        <img
          id="therapeutBildMd"
          class="img-fluid"
          src="@/assets/hochkannt.png"
          alt="Barbara Seidl"
        />
      </div>

      <!-- for lg and up -->
      <div class="hidden-md-and-down col-4">
        <img
          class="img-fluid therapeutBild"
          src="@/assets/Seidl_Barbara.jpg"
          alt="Barbara Seidl"
        />
      </div>

      <!-- for sm -->
      <div class="hidden-xs-only hidden-md-and-up col-12 mt-4">
        <p>
          Mein Name ist Barbara Seidl. Ich bin 1959 in Baden-Württemberg geboren
          und lebe seit 1995 in Oberbayern. Ich bin verheiratet und habe eine
          erwachsene Tochter. Nach meinem Psychologiestudium in Tübingen habe
          ich lange Jahre als angestellte Psychologin in verschiedenen Bereichen
          gearbeitet: Neuropädiatrische Klinik, Beratungsstellen, Frühförderung
          und Fachdienst in Kindergärten und heilpädagogische Horte. Nach meiner
          Approbation als Psychologische Psychotherapeutin habe ich die
          Ausbildung zur Kinder- und Jugendpsychotherapeutin absolviert und mich
          2014 selbständig gemacht. Neben der Verhaltenstherapie habe ich
          verschiedene Weiterbildungen im Bereich Hypnotherapie und Psychodrama
          und ich bin systemische Familientherapeutin (IGST, Heidelberg).
        </p>
      </div>

      <!-- for md and up-->

      <div class="hidden-sm-and-down col-8">
        <p>
          Mein Name ist Barbara Seidl. Ich bin 1959 in Baden-Württemberg geboren
          und lebe seit 1995 in Oberbayern. Ich bin verheiratet und habe eine
          erwachsene Tochter. Nach meinem Psychologiestudium in Tübingen habe
          ich lange Jahre als angestellte Psychologin in verschiedenen Bereichen
          gearbeitet: Neuropädiatrische Klinik, Beratungsstellen, Frühförderung
          und Fachdienst in Kindergärten und heilpädagogische Horte. Nach meiner
          Approbation als Psychologische Psychotherapeutin habe ich die
          Ausbildung zur Kinder- und Jugendpsychotherapeutin absolviert und mich
          2014 selbständig gemacht. Neben der Verhaltenstherapie habe ich
          verschiedene Weiterbildungen im Bereich Hypnotherapie und Psychodrama
          und ich bin systemische Familientherapeutin (IGST, Heidelberg).
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.maxWidth {
  max-width: 50vw;
}
</style>
