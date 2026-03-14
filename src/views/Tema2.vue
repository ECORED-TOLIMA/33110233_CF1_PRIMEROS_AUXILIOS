<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Marco normativo y responsabilidades
    figure.mb-5
      img(src='@/assets/curso/tema2/img01.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La atención en primeros auxilios no se desarrolla en un vacío jurídico; por el contrario, se encuentra respaldada y delimitada por normas constitucionales, legales y reglamentarias que orientan el deber ciudadano de actuar frente a situaciones de peligro, así como los límites de dicha intervención.
    .row.justify-content-center.mb-0
      .col.col-lg-8.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") El conocimiento del marco normativo permite al primer respondiente actuar con mayor seguridad jurídica, evitando tanto la omisión injustificada como la intervención imprudente.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Normatividad vigente
    p(data-aos="fade-down") La Constitución Política de Colombia reconoce la vida como derecho fundamental (artículo 11) y establece la obligación del Estado de proteger a todas las personas en su vida, honra y bienes (artículo 2). Este fundamento respalda la existencia de mecanismos institucionales para la atención de emergencias y el deber social de actuar solidariamente.
    p.mb-5(data-aos="fade-down") A continuación, se presentan las principales disposiciones relacionadas con la actuación en primeros auxilios:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Marco normativo de los primeros auxilios en Colombia
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Norma
                th(data-aos="fade-down")(style= "width: 40%") Disposición relevante
                th(data-aos="fade-down")(style= "width: 40%") Implicación para primeros auxilios

            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Constitución Política de Colombia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Art. 1 (dignidad humana), Art. 2 (protección de la vida), Art. 49 (derecho a la salud) y Art. 95 (deber de solidaridad).
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fundamenta la obligación ética y social de auxiliar a quien lo necesita.

              tr
                td(data-aos="fade-down") Ley 599 de 2000 – Código Penal.
                td(data-aos="fade-down") Art. 131 (omisión de socorro) y disposiciones sobre conductas culposas.
                td(data-aos="fade-down") Establece responsabilidad por no prestar ayuda cuando es posible hacerlo sin riesgo propio.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ley 1523 de 2012.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sistema Nacional de Gestión del Riesgo de Desastres.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define la organización institucional para la preparación y respuesta ante emergencias.

              tr
                td(data-aos="fade-down") Normativa del Sistema General de Seguridad Social en Salud.
                td(data-aos="fade-down") Atención inicial de urgencias.
                td(data-aos="fade-down") Garantiza la prestación obligatoria de atención en casos de urgencia.
    p.mb-5(data-aos="fade-down") Estas disposiciones no obligan al ciudadano a realizar procedimientos especializados; sin embargo, sí establecen el deber de actuar cuando sea posible hacerlo sin poner en riesgo la propia seguridad.
    .row.BG01.justify-content-center.pt-4.pb-4.mb-0
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img03.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2.mb-5
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Para profundizar en la normatividad y lineamientos técnicos aplicables a primeros auxilios y atención inicial en urgencias, se recomienda consultar:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Cruz Roja Colombiana. Manual de Primeros Auxilios.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Ley 1523 de 2012.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Lineamientos del Sistema de Emergencias Médicas (SEM) en Colombia.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Responsabilidades y Código Penal
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img04.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La actuación del primer respondiente no solo tiene implicaciones técnicas y éticas, sino también jurídicas. En Colombia, el deber de actuar frente a una persona en peligro se fundamenta en el principio constitucional de solidaridad consagrado en el artículo 95 de la Constitución Política, el cual establece la obligación de obrar conforme a la ley y responder ante situaciones que comprometan la vida o integridad de otros.
        br
        br 
        p No obstante, esta responsabilidad no implica sustituir al personal médico ni asumir funciones para las cuales no se tiene formación. La intervención debe ser proporcional, prudente y ajustada a las capacidades reales del auxiliador.
    p.mb-5(data-aos="fade-down") El artículo 131 de la Ley 599 de 2000, Código Penal Colombiano, establece el delito de omisión de socorro, que se configura cuando una persona no auxilia a otra que se encuentra en peligro grave y manifiesto, pudiendo hacerlo sin riesgo propio. De esta disposición se desprende que:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Existe un deber razonable de prestar ayuda.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center La ayuda puede consistir en intervenir directamente o en solicitar asistencia.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center No se exige poner en peligro la propia vida.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C01.p-3
          p.text-center.mb-0 En el contexto de los primeros auxilios, la activación oportuna del número único de emergencias 123 constituye una forma válida de cumplimiento del deber de socorro.
    p.mb-5(data-aos="fade-down") Además de la omisión, el Código Penal contempla responsabilidad por conductas culposas cuando el daño se produce por:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
        h4.text-center Negligencia
        p.text-center(data-aos="fade-down") Entendida como falta del cuidado debido.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
        h4.text-center Imprudencia
        p.text-center(data-aos="fade-down") Referida a una actuación temeraria.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
        h4.text-center Impericia
        p.text-center(data-aos="fade-down") Asociada a la falta de conocimiento técnico.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
        h4.text-center Violación de reglamentos
        p.text-center(data-aos="fade-down") Por incumplimiento de protocolos establecidos.
    p.mb-5(data-aos="fade-down") Por ello, el primer respondiente debe actuar únicamente dentro del ámbito de su formación y evitar intervenciones que excedan su competencia. Nadie está obligado a exponerse a peligro grave para prestar ayuda, pero sí debe hacerlo cuando sea razonablemente posible. El deber de solidaridad no convierte al ciudadano en profesional de la salud; en muchos casos, la activación del Sistema de Emergencias Médicas constituye el cumplimiento básico y suficiente de la obligación de asistencia.
    .row.BG01.justify-content-center.pt-4.pb-4.mb-5
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img12.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Este equilibrio entre el deber de ayuda y el límite de competencia protege tanto a la víctima como al auxiliador y se concreta en el principio de debida diligencia, el cual implica:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Actuar cuando exista posibilidad real de ayuda.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No exceder las propias capacidades.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No generar daño adicional.
                li.mb-0
                  i.fas.fa-briefcase-medical
                  p.mb-0 Coordinar con los servicios especializados.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img13.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") La debida diligencia permite evitar tanto la omisión injustificada como la intervención imprudente. Si bien el Código Penal establece el deber individual de actuar frente a una persona en peligro, la respuesta ante emergencias no depende exclusivamente del ciudadano. Existe un marco normativo más amplio que organiza la gestión institucional del riesgo y define la coordinación entre autoridades, organismos de socorro y comunidad, lo que hace necesario analizar la legislación que regula la atención de emergencias y desastres en Colombia.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Legislación en emergencias y rol de la Cruz Roja
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img14.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La respuesta ante emergencias en Colombia se encuentra regulada principalmente por la Ley 1523 de 2012, mediante la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres y se crea el Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD). Esta norma establece que la gestión del riesgo es una responsabilidad compartida entre el Estado, las entidades territoriales, el sector privado y la comunidad, incluyendo la participación activa de ciudadanos capacitados en primeros auxilios.
    p.mb-5(data-aos="fade-down") El SNGRD tiene como finalidad prevenir desastres, reducir el impacto de eventos adversos, organizar la respuesta ante emergencias y coordinar la recuperación posterior. Para ello, estructura la gestión del riesgo en tres procesos fundamentales:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Marco normativo de los primeros auxilios en Colombia
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Proceso
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Relación con el primer respondiente

            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Conocimiento del riesgo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificación y análisis de amenazas y vulnerabilidades.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite reconocer situaciones potencialmente peligrosas.

              tr
                td(data-aos="fade-down") Reducción del riesgo.
                td(data-aos="fade-down") Implementación de medidas preventivas y correctivas.
                td(data-aos="fade-down") Promueve la preparación comunitaria.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Manejo de desastres.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Respuesta y recuperación ante eventos adversos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ubica al primer respondiente en la fase de respuesta inmediata.
    .row.justify-content-center.mb-5
      .col.col-lg-10.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La actuación del primer respondiente se enmarca dentro del proceso de manejo de desastres, específicamente en la fase de respuesta inmediata, actuando como primer eslabón en la cadena organizada de atención.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema2/img15.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La legislación en gestión del riesgo establece coordinación con diversas entidades operativas:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Entidades de coordinación en la respuesta a emergencias
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 50%") Entidad
                th(data-aos="fade-down")(style= "width: 50%") Función general

            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cuerpos de bomberos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Atención de incendios, rescates y materiales peligrosos.

              tr
                td(data-aos="fade-down") Defensa Civil.
                td(data-aos="fade-down") Apoyo en búsqueda, rescate y asistencia humanitaria.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cruz Roja Colombiana.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Atención prehospitalaria, ayuda humanitaria y gestión comunitaria.

              tr
                td(data-aos="fade-down") Sistema de Emergencias Médicas (SEM).
                td(data-aos="fade-down") Atención prehospitalaria y traslado asistido.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Autoridades locales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Coordinación territorial y activación de planes de emergencia.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img16.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p(data-aos="fade-down") El primer respondiente no sustituye a estas entidades, sino que actúa de manera complementaria hasta la llegada del personal especializado.
        p(data-aos="fade-down") Comprender la legislación en gestión del riesgo permite reconocer la importancia de la coordinación institucional, entender el propio rol dentro de un sistema más amplio y actuar de manera organizada en eventos múltiples, facilitando la transición hacia la atención especializada.
        .cajon.cajon.C02.color-secundario.p-4
          p.mb-0(data-aos="fade-down") El marco normativo analizado demuestra que la actuación del primer respondiente se encuentra respaldada por principios constitucionales, disposiciones penales y normas de gestión del riesgo que orientan tanto el deber de ayuda como los límites de intervención. En consecuencia, resulta necesario conocer el funcionamiento del Sistema de Emergencias Médicas y la red pública de urgencias en Colombia, así como los mecanismos adecuados para su activación.
</template>

<script>
export default {
  name: 'Tema2',
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
