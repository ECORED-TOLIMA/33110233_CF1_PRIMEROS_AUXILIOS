<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos normativos, éticos y operativos que orientan la actuación del primer respondiente en situaciones de urgencia y emergencia. Integra los principios básicos de los primeros auxilios, el marco legal colombiano, el funcionamiento del Sistema de Emergencias Médicas, la gestión del riesgo, el aseguramiento del escenario, la priorización de víctimas mediante criterios básicos de <em>triage</em> y la preservación elemental de evidencias cuando sea necesario. Asimismo, desarrolla lineamientos de bioseguridad, métodos de barrera y preparación adecuada del botiquín, con el propósito de garantizar intervenciones seguras, responsables y técnicamente fundamentadas que protejan la vida y la integridad de las personas sin generar nuevos riesgos.
    .row.justify-content-center
      .col-lg-12.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un esquema de los contenidos del componente formativo, en el que se describen los fundamentos de los primeros auxilios, el marco normativo, el sistema de emergencias, la gestión del riesgo, el aseguramiento del escenario, la clasificación y custodia, y la bioseguridad y preparación. El mapa conceptual evidencia la relación jerárquica y funcional entre estos elementos, exponiendo cómo cada tema se articula para orientar una actuación segura, responsable y técnicamente fundamentada del primer respondiente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
