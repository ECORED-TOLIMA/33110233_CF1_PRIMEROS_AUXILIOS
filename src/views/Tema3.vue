<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistema de emergencias
    p.mb-5(data-aos="fade-down") El sistema de emergencias en Colombia constituye una red organizada de instituciones, recursos humanos, infraestructura y protocolos orientados a garantizar la atención oportuna de personas en situación crítica. Su finalidad es coordinar la respuesta desde el momento en que ocurre el evento hasta la estabilización del paciente en un centro asistencial, asegurando continuidad en la atención.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img01.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Este sistema integra el Sistema de Emergencias Médicas (SEM), la red pública y privada de urgencias, los organismos de socorro y las autoridades territoriales, bajo principios de oportunidad, articulación interinstitucional y protección de la vida. Su funcionamiento depende tanto de la capacidad operativa de las instituciones como de la activación adecuada por parte de la ciudadanía.
        p(data-aos="fade-down") En este contexto, el primer respondiente desempeña un papel fundamental como primer eslabón en la cadena de atención. La identificación temprana de la emergencia, la valoración inicial y la activación oportuna del número único constituyen acciones determinantes para optimizar los tiempos de respuesta y reducir complicaciones.
        p.mb-0(data-aos="fade-down") A continuación, se describen los componentes del Sistema de Emergencias Médicas, la estructura de la red pública de atención y el procedimiento adecuado para la activación del servicio.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Sistema de Emergencias Médicas (SEM)
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema3/img02.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") El Sistema de Emergencias Médicas (SEM) es el conjunto organizado de servicios, recursos humanos, infraestructura y procedimientos destinados a brindar atención inmediata a personas que presentan una condición que compromete su vida, integridad o funcionalidad. Su propósito es garantizar una respuesta rápida, coordinada y técnicamente adecuada desde el lugar del evento hasta la remisión a un centro asistencial.
    p.text-center.mb-5(data-aos="fade-down") En Colombia, el SEM se articula con:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.py-3.px-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/img03.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img04.svg", alt="Imagen decorativa").img100.m-auto
              p Secretarías de Salud departamentales y municipales.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img05.svg", alt="Imagen decorativa").img100.m-auto
              p Instituciones Prestadoras de Servicios de Salud (IPS).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img06.svg", alt="Imagen decorativa").img100.m-auto
              p Servicios de ambulancia básicos y medicalizados.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img07.svg", alt="Imagen decorativa").img100.m-auto
              p Centros Reguladores de Urgencias y Emergencias (CRUE).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema3/img08.svg", alt="Imagen decorativa").img100.m-auto
              p Organismos de socorro.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") El CRUE cumple una función estratégica dentro del sistema, ya que regula la disponibilidad de camas, coordina el despacho de ambulancias y define el centro asistencial más adecuado según la complejidad del caso.
            .col.col-lg-auto.order-lg-2.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema3/img09.svg', alt='Imagen decorativa')
    .row.BG01.justify-content-center.pt-4.pb-4.mb-5
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img10.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") El objetivo del SEM es:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Coordinar la atención prehospitalaria.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Regular el traslado de pacientes según su condición clínica.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Optimizar el uso de los recursos disponibles.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Garantizar acceso oportuno y continuo a los servicios de urgencias.
    p(data-aos="fade-down") Su funcionamiento se enmarca dentro del Sistema General de Seguridad Social en Salud y se articula con la Ley 1523 de 2012 en materia de gestión del riesgo, asegurando que la atención de emergencias haga parte de una estructura institucional organizada y no de acciones aisladas.
    p.mb-0(data-aos="fade-down") Para el primer respondiente, comprender la estructura y dinámica del SEM permite reconocer la importancia de una activación oportuna, suministrar información clara al momento de la llamada y facilitar la transición hacia la atención especializada.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Red pública y numero único
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La red pública de urgencias en Colombia forma parte del Sistema General de Seguridad Social en Salud y está integrada por instituciones, talento humano y recursos logísticos destinados a garantizar la atención inmediata de personas cuya vida o integridad se encuentren en riesgo. Su finalidad es asegurar continuidad en la atención, desde la recepción del evento hasta la estabilización clínica del paciente.
    p.text-center.mb-5(data-aos="fade-down") Esta red comprende:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Instituciones Prestadoras de Servicios de Salud (IPS).
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Servicios de urgencias hospitalarias.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Centros Reguladores de Urgencias y Emergencias (CRUE).
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img15.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Servicios de ambulancia básica y medicalizada.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/img16.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Coordinación con bomberos, policía y demás organismos de socorro.
    p.mb-5(data-aos="fade-down") Su funcionamiento se fundamenta en el derecho fundamental a la salud consagrado en el artículo 49 de la Constitución Política y en la obligación de prestar atención inicial de urgencias sin barreras administrativas cuando exista riesgo vital. Esto significa que ninguna persona puede ser rechazada en una situación crítica por razones económicas o administrativas.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema3/img17.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") En este contexto, el número único de emergencias 123 constituye el mecanismo de activación inmediata del sistema. Este canal centraliza la recepción de llamadas y permite coordinar la intervención de las entidades competentes según la naturaleza del evento reportado, ya sea de tipo médico, traumático, incendio, alteración del orden público u otra situación crítica.
    p.mb-5(data-aos="fade-down") El uso adecuado del 123 implica:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img18.svg", alt="alt").img90.m-auto
          h5.text-center Llamar únicamente ante situaciones reales de urgencia o emergencia.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img19.svg", alt="alt").img90.m-auto
          h5.text-center Proporcionar información clara, precisa y verificable.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img20.svg", alt="alt").img90.m-auto
          h5.text-center No realizar llamadas falsas o malintencionadas.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img21.svg", alt="alt").img90.m-auto
          h5.text-center Permanecer en línea para recibir instrucciones del operador.
    p.mb-0(data-aos="fade-down") El número único de emergencias representa el puente entre la actuación inicial del ciudadano o primer respondiente y la respuesta organizada del Estado, permitiendo que la ayuda especializada sea movilizada de manera oportuna y coordinada.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Activación y técnica de llamada
    .row.justify-content-center.mb-5
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema3/img22.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Una vez identificada la necesidad de apoyo especializado durante la evaluación inicial, el primer respondiente debe activar el Sistema de Emergencias Médicas de manera inmediata. La activación no debe retrasarse por intentos prolongados de intervención cuando exista riesgo vital evidente, como ausencia de respiración, hemorragia abundante o pérdida del estado de conciencia.
        .row.mb-4.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img23.svg', alt='Imagen decorativa')
          .col-lg-9.col-12
            p.mb-0 La técnica de llamada debe ser organizada, clara y objetiva. Durante la comunicación con el operador del número único de emergencias 123, se recomienda:
        .tarjeta.tarjeta--C04.p-4
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Indicar la ubicación exacta, incluyendo dirección y puntos de referencia visibles.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Describir brevemente el tipo de evento ocurrido.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Informar el número aproximado de personas afectadas.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Señalar el estado general de la víctima (consciente o inconsciente, respira o no respira).
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Advertir sobre riesgos adicionales presentes en el lugar, como incendio, derrames, tránsito vehicular o estructuras inestables.
    p.text-center.mb-5(data-aos="fade-down") Para garantizar una comunicación efectiva es importante:
    .row.justify-content-center.mb-5
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Mantener la calma y utilizar un tono claro.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down") 
              h5.text-center No colgar hasta que el operador lo indique.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down") 
              h5.text-center Seguir las instrucciones proporcionadas.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img27.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down") 
              h5.text-center Delegar la llamada a otra persona si el auxiliador está realizando maniobras de atención.
    p.mb-5(data-aos="fade-down") Una comunicación precisa permite al operador clasificar correctamente la emergencia, asignar los recursos adecuados y orientar acciones inmediatas mientras llega el personal especializado. La activación oportuna del sistema no solo facilita la movilización de ambulancias y organismos de socorro, sino que optimiza los tiempos de respuesta y reduce el riesgo de complicaciones.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema3/img28.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") La correcta activación del sistema de emergencias marca la transición entre la intervención ciudadana inicial y la respuesta institucional organizada. No obstante, antes de establecer contacto con los servicios especializados, es indispensable reconocer y gestionar adecuadamente los riesgos presentes en el entorno. En consecuencia, el siguiente capítulo aborda la identificación de escenarios de emergencia y la gestión del riesgo como elementos esenciales para una actuación segura y efectiva.
</template>
<script>
export default {
  name: 'Tema3',
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
