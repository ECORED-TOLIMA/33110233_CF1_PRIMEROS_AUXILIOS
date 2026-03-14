<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Clasificación y custodia
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En situaciones con una o múltiples personas lesionadas, el primer respondiente debe aplicar criterios básicos de priorización que permitan organizar la atención de manera racional, objetiva y segura. La clasificación de víctimas optimiza el uso de recursos disponibles, facilita la toma de decisiones bajo presión y puede ser determinante para preservar la vida en escenarios con múltiples afectados. Esta priorización no implica seleccionar quién recibe ayuda y quién no, sino establecer un orden de atención basado en la gravedad y la probabilidad de supervivencia.
    p.mb-5(data-aos="fade-down") Asimismo, en eventos asociados a accidentes de tránsito, hechos violentos o situaciones con posibles implicaciones legales, la actuación debe desarrollarse con especial cuidado respecto al entorno. La preservación del escenario evita alteraciones innecesarias que puedan afectar investigaciones posteriores o procesos judiciales. En este contexto adquiere relevancia el concepto de cadena de custodia, entendido como el conjunto de procedimientos orientados a garantizar la integridad de posibles elementos materiales de prueba.
    .row.justify-content-center.mb-0
      .col.col-lg-8.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La intervención del primer respondiente, por tanto, debe equilibrar dos dimensiones complementarias: la priorización técnica de la atención y la preservación responsable del escenario cuando existan implicaciones legales.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema6/img02.svg', alt='Imagen decorativa')
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 <em>triage</em> y aplicación básica
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img03.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") El <em>triage</em> es el procedimiento de clasificación rápida y sistemática de las víctimas en una situación de urgencia o emergencia, cuyo propósito es establecer prioridades de atención según la gravedad clínica y el riesgo vital, especialmente cuando los recursos disponibles son limitados.
        p(data-aos="fade-down") Su finalidad no es emitir diagnósticos, sino organizar la atención para salvar el mayor número de vidas posible, priorizando a quienes presentan mayor riesgo inmediato.
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          h5(data-aos="fade-down") En el ámbito prehospitalario y en eventos con múltiples víctimas, el <em>triage</em> permite:
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Identificar personas con riesgo vital inminente.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Determinar prioridades cuando los recursos son insuficientes.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Evitar que lesiones leves consuman tiempo crítico.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Organizar el flujo de atención hasta la llegada de apoyo especializado.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Reducir el caos operativo en escenarios de alta tensión.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img04.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Es especialmente relevante en accidentes de tránsito con múltiples lesionados, incendios, eventos masivos, desastres naturales y emergencias laborales con varios afectados.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img05.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") En Colombia, el <em>triage</em> hospitalario se encuentra regulado por lineamientos del Ministerio de Salud y Protección Social. En el ámbito prehospitalario, el primer respondiente realiza una priorización preliminar basada en criterios observables.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Clasificación básica por niveles de prioridad
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Nivel
                th(data-aos="fade-down")(style= "width: 20%") Color
                th(data-aos="fade-down")(style= "width: 20%") Prioridad
                th(data-aos="fade-down")(style= "width: 40%") Características orientadoras
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>triage</em> I.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rojo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Atención inmediata.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Riesgo vital inminente. No respira o presenta dificultad severa, hemorragia masiva, inconsciente, trauma grave y signos de <em>shock</em>.
              tr
                td(data-aos="fade-down") <em>triage</em> II.
                td(data-aos="fade-down") Naranja.
                td(data-aos="fade-down") Muy urgente.
                td(data-aos="fade-down") Alto riesgo de deterioro rápido. Dolor torácico intenso, dificultad respiratoria moderada y alteración del estado mental.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>triage</em> III.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Amarillo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Urgente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Condición estable sin riesgo vital inmediato. Fracturas sin <em>shock</em>, heridas moderadas y dolor significativo.
              tr
                td(data-aos="fade-down") <em>triage</em> IV.
                td(data-aos="fade-down") Verde.
                td(data-aos="fade-down") No urgente.
                td(data-aos="fade-down") Lesiones leves. Puede caminar y no presenta compromiso general.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>triage</em> V.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Azul.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Consulta no prioritaria.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Condiciones médicas sin urgencia vital. Más frecuente en ámbito hospitalario.
    p.mb-5(data-aos="fade-down") A continuación, se presenta un esquema de clasificación de <em>triage</em> adoptado en Colombia, que organiza a los pacientes en cinco niveles codificados por colores, de acuerdo con la gravedad clínica y la prioridad de atención, desde riesgo vital inminente hasta consulta no prioritaria.
    .row.justify-content-center.mb-4.mb-lg-0
      .col-12.movil
        figure
          img(src='@/assets/curso/tema6/img06.svg', alt='Imagen decorativa')
          figcaption.text-bold Nota. Tomado del Ministerio de Salud y Protección Social. (s. f.).
      .col-lg-10.col-12.desktop
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure.mb-5
              img(src='@/assets/curso/tema6/img07.svg', alt="Imagen decorativa")
              figcaption.text-bold Nota. Tomado del Ministerio de Salud y Protección Social. (s. f.).
          .tarjeta.tarjeta--blanca.p-3(x="10%" y="65%" numero="1")
            p Requiere atención inmediata. La condición clínica del paciente representa un riesgo vital y necesita maniobras de reanimación por su compromiso ventilatorio, respiratorio, hemodinámico o neurológico, perdida de miembro u órgano u otras condiciones que por norma exijan atención inmediata.
          .tarjeta.tarjeta--blanca.p-3(x="25%" y="30%" numero="2")
            p La condición clínica del paciente puede evolucionar hacia un rápido deterioro o a su muerte, o incrementar el riesgo para la pérdida de un miembro u órgano, por lo tanto, requiere una atención que no debe superar los treinta (30) minutos.
          .tarjeta.tarjeta--blanca.p-3(x="50%" y="15%" numero="3")
            p La condición clínica del paciente requiere de medidas diagnósticas y terapéuticas en urgencias. Son aquellos pacientes que necesitan un examen complementario o un tratamiento rápido, dado que se encuentran estables desde el punto de vista fisiológico aunque su situación puede empeorar si no se actúa.
          .tarjeta.tarjeta--blanca.p-3(x="78%" y="30%" numero="4")
            p El paciente presenta condiciones médicas que no comprometen su estado general, ni representan un riesgo evidente para la vida o pérdida de miembro u órgano. No obstante, existen riesgos de complicación o secuelas de la enfermedad o lesión si no recibe la atención correspondiente.
          .tarjeta.tarjeta--blanca.p-3(x="90%" y="65%" numero="5")
            p El paciente presenta una condición clínica relacionada con problemas agudos o crónicos sin evidencia de deterioro que comprometa el estado general de paciente y no representa un riesgo evidente para la vida o la funcionalidad de miembro u órgano.
    p.mb-5(data-aos="fade-down") En este contexto, el primer respondiente puede orientarse mediante criterios observables y preguntas simples que facilitan una clasificación rápida:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center ¿La víctima respira?
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center ¿Está consciente?
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center ¿Presenta sangrado abundante?
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center ¿Puede caminar?
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center ¿Presenta signos de confusión o desorientación?
    p.mb-5(data-aos="fade-down") En eventos con múltiples víctimas, una estrategia operativa básica consiste en solicitar que quienes puedan caminar se trasladen a un punto previamente definido. Esta acción permite identificar rápidamente posibles casos de menor gravedad y organizar de manera preliminar el escenario.
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema6/img13.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p El <em>triage</em> se fundamenta en principios de justicia distributiva, beneficencia y maximización de la supervivencia colectiva. Priorizar no significa valorar más una vida que otra, sino aplicar un criterio técnico orientado a preservar el mayor número de personas posible bajo condiciones de recursos limitados.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema6/img14.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p El <em>triage</em> inicial constituye una herramienta de organización y no una evaluación médica definitiva. Su correcta aplicación facilita la transición entre la respuesta inicial del primer respondiente y la atención especializada dentro del Sistema de Emergencias Médicas.
              br 
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Cadena de custodia
    p.mb-5(data-aos="fade-down") La cadena de custodia es el conjunto de procedimientos destinados a garantizar la conservación, integridad, autenticidad y trazabilidad de los elementos materiales probatorios que puedan tener relevancia en un proceso judicial. Su finalidad es evitar la alteración, pérdida, contaminación o manipulación indebida de evidencias.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img15.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Aunque el primer respondiente no cumple funciones investigativas ni judiciales, su intervención en el escenario puede influir directamente en la preservación de posibles elementos probatorios. Por ello, debe conocer y aplicar principios básicos de protección del lugar de los hechos, especialmente en eventos como accidentes de tránsito con lesiones graves o fallecidos, situaciones asociadas a violencia física, sospecha de delito, muerte aparente, accidentes laborales con posible responsabilidad jurídica o incidentes con armas o sustancias peligrosas.
    p(data-aos="fade-down") En este contexto, es importante aplicar principios básicos de actuación, en donde el primer respondiente orienta su conducta bajo tres criterios fundamentales: la prioridad de la vida sobre la evidencia, la intervención mínima necesaria y la preservación proporcional del entorno. La atención vital siempre prevalece sobre la conservación del escenario.
    p.mb-5(data-aos="fade-down") En cuanto a las conductas recomendadas, cuando las condiciones lo permitan y sin poner en riesgo su seguridad ni la atención de la víctima, el primer respondiente debe:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.py-3.px-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema6/img16.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img17.svg", alt="Imagen decorativa").img100.m-auto
              p Evitar mover objetos innecesariamente.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img18.svg", alt="Imagen decorativa").img100.m-auto
              p No retirar elementos incrustados en la víctima.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img19.svg", alt="Imagen decorativa").img100.m-auto
              p No manipular armas u objetos sospechosos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img20.svg", alt="Imagen decorativa").img100.m-auto
              p Limitar el acceso de curiosos o terceros.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img21.svg", alt="Imagen decorativa").img100.m-auto
              p Delimitar o acordonar el área si es posible.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img22.svg", alt="Imagen decorativa").img100.m-auto
              p Evitar pisar o alterar zonas críticas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema6/img23.svg", alt="Imagen decorativa").img100.m-auto
              p Informar oportunamente a la autoridad competente sobre la situación.
    .row.BG01.justify-content-center.align-items-center.pt-4.pb-4.mb-4
      .col.col-lg-3.col-8.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema6/img24.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") De igual manera, existen conductas que deben evitarse, tales como:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Realizar recolección de evidencias.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Guardar objetos por iniciativa propia.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Limpiar la escena.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Modificar la posición de elementos sin necesidad.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Emitir juicios sobre responsabilidades.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Tomar fotografías para difusión personal.
    p.mb-5(data-aos="fade-down") Finalmente, la actuación debe acompañarse de una observación prudente. Siempre que no interfiera con la atención vital, el primer respondiente puede:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img25.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Recordar la ubicación original de la víctima.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img26.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Observar la posición de objetos relevantes.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img27.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Identificar el número aproximado de personas presentes.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema6/img28.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Informar verbalmente a la autoridad sobre lo observado.
    p.mb-0(data-aos="fade-down") No se exige documentación formal al primer respondiente comunitario; sin embargo, se espera una actuación consciente, ética y proporcional a sus competencias. Su función no es investigar, sino proteger la vida y facilitar la intervención de las autoridades competentes cuando sea necesario.


</template>

<script>
export default {
  name: 'Tema6',
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
