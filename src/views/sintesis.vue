<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p
      span.r-4.fst-italic Up to this point we have been able to appreciate everything that has to do with the past progressive tense, how it is structured and how verbs are correctly conjugated in the present participle with their “-ing” ending, the use of reported speech and the new vocabulary units, that is why you are invited to appreciate the following conceptual scheme that summarizes the subject matter:
      br
      br
      |Hasta este punto, hemos podido apreciar todo lo que tiene que ver con el tiempo pasado progresivo, cómo se estructura y cómo se conjugan correctamente los verbos en participio presente con su terminación “-ing”, el uso del discurso indirecto y las nuevas unidades de vocabulario; es por ello que se invita a que aprecie el siguiente esquema conceptual que resume la temática tratada:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
