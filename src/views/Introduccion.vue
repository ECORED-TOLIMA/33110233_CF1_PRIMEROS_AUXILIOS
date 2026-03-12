<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") La atención inicial en situaciones de urgencia y emergencia constituye una acción prioritaria en la protección de la vida y la integridad de las personas. Los primeros auxilios representan la primera respuesta organizada frente a eventos que comprometen la salud o la seguridad, y su adecuada aplicación puede reducir complicaciones, minimizar riesgos y contribuir a la estabilización inicial de la víctima mientras se activa el sistema de atención en salud.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") En Colombia, la actuación del primer respondiente se encuentra enmarcada dentro de lineamientos normativos y responsabilidades legales que regulan su intervención. Esto implica actuar conforme a principios éticos, bioéticos y de seguridad, respetando el alcance y los límites de su rol, evitando conductas que puedan generar daño adicional y garantizando el cumplimiento de deberes como la activación oportuna del sistema de emergencias y la solicitud adecuada de ayuda.
        p.mb-0(data-aos="fade-down") En este contexto, el presente componente formativo tiene como propósito proporcionar los fundamentos conceptuales, normativos y técnicos necesarios para que el aprendiz comprenda el rol del primer respondiente y gestione de manera segura y organizada el escenario de emergencia. Este conocimiento constituye la base para el desarrollo de las acciones prácticas de atención que serán abordadas en los componentes posteriores del programa de formación.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/lGO8aoN_GZA?si=kphe-TohX8_xVq9C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
