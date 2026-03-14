<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Aseguramiento del escenario
    p.mb-5(data-aos="fade-down") El aseguramiento del escenario constituye una responsabilidad esencial del primer respondiente en situaciones de urgencia y emergencia. Su finalidad es garantizar que la intervención se realice en condiciones mínimas de seguridad, orden y control, evitando la generación de nuevos riesgos para la víctima, el auxiliador o terceros.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img01.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Asegurar el escenario no se limita al acordonamiento físico del área. Implica adoptar una actitud preventiva, evaluar el contexto de manera crítica y mantener dominio situacional mientras se activa la respuesta especializada. Esta actuación se articula con la fase “Proteger” del principio PAS (Proteger, Alertar, Socorrer), el cual orienta la secuencia básica de actuación en primeros auxilios.
        p.mb-4(data-aos="fade-down") Desde el punto de vista jurídico, el aseguramiento del escenario se relaciona con el deber de actuar con prudencia y debida diligencia, evitando conductas temerarias o intervenciones que puedan agravar el daño. La protección de la vida constituye la prioridad absoluta; el control razonable del entorno es el medio para garantizar esa protección.
        .row
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema5/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 El aseguramiento es una acción previa y transversal a todas las demás fases de la atención inicial. Sin condiciones mínimas de seguridad, no debe iniciarse intervención directa sobre la víctima. En caso de riesgo incontrolable, la actuación correcta consiste en mantener distancia segura, activar el Sistema de Emergencias Médicas y facilitar el acceso de los organismos especializados.
    p.mb-5(data-aos="fade-down") En este sentido, el control del escenario cumple tres propósitos fundamentales:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Proteger al primer respondiente.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down") 
              h5.text-center Evitar la ampliación del daño o la aparición de nuevas víctimas.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down") 
              h5.text-center Facilitar la intervención coordinada de los servicios especializados.
    p.mb-0(data-aos="fade-down") El dominio del entorno no requiere autoridad formal, sino liderazgo básico, comunicación clara y toma de decisiones prudente. La capacidad de organizar el espacio y mantener la calma influye directamente en la eficacia de la respuesta inicial.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Principios y criterios de aseguramiento
    p.mb-5(data-aos="fade-down") El aseguramiento del escenario se rige por principios técnicos que orientan la actuación prudente del primer respondiente. Este proceso tiene límites claros y debe realizarse dentro del nivel de formación, competencia y capacidad real de control del auxiliador.
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema5/img06.svg", alt="alt").img80.m-auto
          p.text-center El primer principio es la #[b autoprotección].
          p.text-center Ninguna intervención debe iniciarse si existe un riesgo grave e inminente para quien presta ayuda. Convertirse en una nueva víctima no solo agrava la situación, sino que dificulta la respuesta institucional.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema5/img07.svg", alt="alt").img80.m-auto
          p.text-center El segundo principio es la #[b evaluación continua del entorno].
          p.text-center El escenario de emergencia es dinámico; por ello, el riesgo debe reevaluarse de manera permanente. Condiciones como tránsito vehicular, fuego, presencia de sustancias peligrosas o alteraciones del orden público pueden cambiar rápidamente.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema5/img08.svg", alt="alt").img80.m-auto
          p.text-center El tercer principio es la #[b proporcionalidad de la actuación].
          p.text-center  El primer respondiente no está obligado a controlar completamente el escenario, sino a adoptar medidas razonables que reduzcan el peligro inmediato mientras llega el apoyo especializado.
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          h5.mb-4(data-aos="fade-down") En términos operativos, el aseguramiento implica:
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Reconocer riesgos activos o potenciales.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Evitar la exposición innecesaria al peligro.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Limitar el acceso de personas no involucradas.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Solicitar apoyo especializado cuando el riesgo supera la capacidad de control.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Mantener orden básico y comunicación clara en el entorno.
      .col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema5/img09.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") Asimismo, el criterio de debida diligencia exige actuar con prudencia, sin omitir ayuda cuando sea posible prestarla, pero sin exceder las propias capacidades técnicas.
    p.mb-0(data-aos="fade-down") El aseguramiento no es una acción puntual, sino un proceso que se mantiene durante toda la intervención. La observación constante del entorno y la capacidad de adaptación permiten garantizar que la atención se realice en condiciones razonablemente seguras hasta la llegada de los servicios especializados.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Acordonamiento y control del evento
    p.mb-5(data-aos="fade-down") El acordonamiento constituye una medida básica de control del escenario que busca delimitar físicamente el área donde ocurrió el evento, con el fin de garantizar condiciones mínimas de seguridad y orden. No se trata únicamente de aislar el espacio, sino de organizar el entorno para facilitar la atención y evitar nuevos riesgos.
    .row.BG01.justify-content-center.pt-4.pb-4.mb-5
      .col.col-lg-3.col-8.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img10.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") El acordonamiento tiene como objetivos principales:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Evitar el ingreso de curiosos o personas no autorizadas.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Reducir interferencias durante la atención.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Proteger la integridad de la víctima.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Disminuir el riesgo de nuevos incidentes.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Preservar posibles evidencias cuando la situación lo requiera.
    p.mb-5(data-aos="fade-down") En escenarios urbanos o comunitarios, el control del área puede realizarse mediante:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img11.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Señalización visible con elementos disponibles.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img12.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Uso de conos, cintas, vehículos o barreras físicas.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img13.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Ubicación estratégica de personas que orienten el tránsito o el flujo peatonal.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema5/img14.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Comunicación clara y firme para mantener distancia de seguridad.
    p.mb-5(data-aos="fade-down") En accidentes de tránsito, el control del evento adquiere especial relevancia. Se recomienda:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img15.svg", alt="alt").img90.m-auto
          h5.text-center Señalizar a una distancia prudente del punto del impacto.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img16.svg", alt="alt").img90.m-auto
          h5.text-center Activar luces intermitentes si se dispone de vehículo.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img17.svg", alt="alt").img90.m-auto
          h5.text-center Evitar mover vehículos involucrados salvo que exista riesgo inmediato, como incendio o colisión secundaria.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema5/img18.svg", alt="alt").img90.m-auto
          h5.text-center Controlar el flujo vehicular solo si las condiciones lo permiten y sin exponerse a peligro.
    .row.justify-content-center.mb-0
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img19.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El acordonamiento debe ser proporcional al tipo de evento y mantenerse mientras persista el riesgo. Si el escenario presenta condiciones de alto peligro, como incendio activo, derrame químico significativo o colapso estructural, la prioridad es activar de inmediato a los organismos especializados y abstenerse de intervenir directamente.
        p(data-aos="fade-down") El control adecuado del evento permite una transición organizada hacia la intervención institucional y garantiza que la atención inicial se desarrolle en un entorno razonablemente seguro.
</template>

<script>
export default {
  name: 'Tema5',
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
