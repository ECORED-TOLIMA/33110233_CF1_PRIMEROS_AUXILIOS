<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión del riesgo
    p.mb-5(data-aos="fade-down") La actuación del primer respondiente no inicia con la intervención directa sobre la víctima, sino con la valoración del entorno en el que ocurre el evento. Antes de cualquier maniobra de atención, es indispensable identificar los riesgos presentes y determinar si el escenario es seguro para intervenir. La gestión del riesgo constituye, por tanto, un componente esencial de la respuesta inicial, ya que permite prevenir nuevos incidentes, proteger la propia integridad y evitar la ampliación del daño.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img01.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") En Colombia, la gestión del riesgo se encuentra regulada por la Ley 1523 de 2012, que establece la responsabilidad compartida entre el Estado, las entidades territoriales, el sector privado y la comunidad en la prevención, reducción y manejo de desastres. Este enfoque reconoce que la seguridad no depende únicamente de la respuesta institucional, sino también de la capacidad individual y colectiva para anticipar y mitigar peligros.
        p(data-aos="fade-down") En el contexto de los primeros auxilios, la gestión del riesgo se traduce en la evaluación sistemática del escenario antes de intervenir. Esto implica observar el entorno, identificar amenazas potenciales, como fuego, tránsito vehicular, estructuras inestables, sustancias peligrosas o violencia activa, y adoptar medidas que reduzcan la exposición a daño. Actuar sin una valoración previa puede convertir al auxiliador en una nueva víctima y agravar la situación.
        .row.mb-4.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Este enfoque preventivo se alinea con el Marco de Sendai para la Reducción del Riesgo de Desastres, adoptado por la Oficina de las Naciones Unidas para la Reducción del Riesgo de Desastres en 2015, el cual promueve la comprensión del riesgo como elemento central para la toma de decisiones seguras y responsables.
    p.mb-0(data-aos="fade-down") Comprender la gestión del riesgo permite al primer respondiente diferenciar entre urgencia y emergencia, reconocer factores de riesgo presentes en el entorno y aplicar medidas de minimización antes de establecer contacto con la víctima.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Urgencia, emergencia y factores de riesgo
    p.mb-4(data-aos="fade-down") Para actuar de manera adecuada en una situación crítica, es fundamental diferenciar entre urgencia y emergencia, ya que esta clasificación orienta la prioridad, la activación del sistema de emergencias y el tipo de intervención inicial.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img03.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") La #[b urgencia] corresponde a una situación que requiere atención médica pronta, pero que no compromete de manera inmediata la vida de la persona. Existe un margen de tiempo razonable para la valoración y traslado asistencial.
    p.text-center.mb-5(data-aos="fade-down") Ejemplos de urgencia:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Heridas leves.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down") 
              h5.text-center Esguinces.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down") 
              h5.text-center Dolor moderado sin alteración de signos vitales.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img07.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") La #[b emergencia], en cambio, implica un riesgo vital inminente. La ausencia de intervención inmediata puede generar secuelas graves o la muerte, por lo que exige actuación prioritaria y activación inmediata del Sistema de Emergencias Médicas.
    p.text-center.mb-5(data-aos="fade-down") Ejemplos de urgencia:
    .row.justify-content-center(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img08.svg", alt="alt").img90.m-auto
          h5.text-center Paro cardiorrespiratorio.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img09.svg", alt="alt").img90.m-auto
          h5.text-center Hemorragia abundante.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img10.svg", alt="alt").img90.m-auto
          h5.text-center Pérdida de conciencia.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema4/img11.svg", alt="alt").img90.m-auto
          h5.text-center Trauma grave.
    p(data-aos="fade-down") En la práctica, el criterio diferenciador radica en la presencia o no de compromiso de funciones vitales como respiración, circulación o estado de conciencia.
    p.mb-5(data-aos="fade-down") Por otra parte, un #[b factor de riesgo] es cualquier condición, agente o circunstancia que incrementa la probabilidad de daño. Estos pueden clasificarse en:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.py-3.px-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/img12.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img13.svg", alt="Imagen decorativa").img100.m-auto
              p Físicos, como tránsito vehicular o estructuras inestables.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img14.svg", alt="Imagen decorativa").img100.m-auto
              p Biológicos, como contacto con sangre o fluidos corporales.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img15.svg", alt="Imagen decorativa").img100.m-auto
              p Químicos, como derrames o gases tóxicos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img16.svg", alt="Imagen decorativa").img100.m-auto
              p Eléctricos, como cables expuestos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img17.svg", alt="Imagen decorativa").img100.m-auto
              p Ambientales, como fuego o inundaciones.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img18.svg", alt="Imagen decorativa").img100.m-auto
              p Mecánicos, como maquinaria en funcionamiento.
    p.mb-0(data-aos="fade-down") La identificación temprana de estos factores permite aplicar el principio fundamental de autoprotección. El primer respondiente debe garantizar su seguridad antes de intervenir, evitando convertirse en una nueva víctima y preservando la continuidad de la atención.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Identificación de riesgos y tipos de accidentes
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img19.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Los eventos que requieren primeros auxilios pueden presentarse en diversos contextos, cada uno con características particulares que condicionan el tipo de lesión y la forma de intervención. La identificación del entorno permite anticipar mecanismos de lesión, priorizar la atención y aplicar medidas preventivas adecuadas.
        .row.mb-3
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img20.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 En el hogar, los riesgos más frecuentes incluyen caídas, quemaduras, intoxicaciones y cortaduras. En el ámbito laboral pueden asociarse a maquinaria, alturas, sustancias químicas o electricidad. En espacios públicos se presentan accidentes de tránsito, aglomeraciones o situaciones derivadas de fenómenos naturales.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Los accidentes son eventos no intencionales que generan lesiones físicas o alteraciones en la salud, y constituyen una de las principales causas de morbilidad en diferentes grupos poblacionales. Reconocer su tipología permite al primer respondiente adaptar su actuación con mayor precisión.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Tipos de accidentes más frecuentes
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de accidente
                th(data-aos="fade-down")(style= "width: 20%") Contexto habitual
                th(data-aos="fade-down")(style= "width: 20%") Lesiones frecuentes
                th(data-aos="fade-down")(style= "width: 40%") Consideración para el primer respondiente
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Domésticos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hogares.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Caídas, quemaduras, intoxicaciones, cortaduras y asfixia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Verificar condiciones de seguridad y presencia de menores o adultos mayores.
              tr
                td(data-aos="fade-down") Escolares o en hogares infantiles.
                td(data-aos="fade-down") Instituciones educativas.
                td(data-aos="fade-down") Golpes, atragantamientos, caídas y lesiones deportivas.
                td(data-aos="fade-down") Movilizar con precaución y evaluar estado neurológico.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Laborales.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Entornos productivos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Atrapamientos, caídas de altura, descargas eléctricas y exposición química.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Identificar riesgos activos y cumplir protocolos de seguridad.
              tr
                td(data-aos="fade-down") Vehiculares.
                td(data-aos="fade-down") Vías públicas.
                td(data-aos="fade-down") Politraumatismos, fracturas, lesiones cervicales y hemorragias.
                td(data-aos="fade-down") Asegurar la escena antes de intervenir.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Deportivos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Escenarios recreativos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Esguinces, luxaciones, fracturas y deshidratación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluar mecanismo de lesión y signos vitales.
              tr
                td(data-aos="fade-down") Derivados de eventos naturales.
                td(data-aos="fade-down") Zonas afectadas por desastres.
                td(data-aos="fade-down") Lesiones múltiples, aplastamientos y trauma generalizado.
                td(data-aos="fade-down") Priorizar autoprotección y coordinación institucional.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img21.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") En Colombia, la prevención y control de riesgos laborales se enmarca en el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), mientras que los eventos derivados de fenómenos naturales se regulan conforme a la Ley 1523 de 2012 sobre gestión del riesgo de desastres.
    p.mb-0(data-aos="fade-down") La identificación de riesgos constituye el primer paso para una intervención segura. Sin embargo, reconocer el peligro no es suficiente si no se adoptan acciones concretas orientadas a reducirlo. Una vez detectados los factores que pueden agravar la situación, el primer respondiente debe aplicar medidas básicas de minimización que permitan controlar el entorno y disminuir la probabilidad de nuevos incidentes.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Medidas de minimización y precaución
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img22.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Una vez identificados los factores de riesgo presentes en el entorno, el primer respondiente debe adoptar acciones básicas orientadas a disminuir la probabilidad de que el evento se agrave o genere nuevas víctimas.
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img23.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            .cajon.cajon.C01.color-primario.p-4
              p.mb-0(data-aos="fade-down") Estas medidas hacen parte del enfoque de reducción del riesgo y constituyen una fase previa al aseguramiento formal del escenario.
        p.mb-0(data-aos="fade-down") La minimización del riesgo no implica controlar completamente la situación, sino aplicar decisiones prudentes que permitan intervenir sin exponerse innecesariamente. La seguridad personal es la primera prioridad en cualquier actuación en primeros auxilios.
    .row.BG01.justify-content-center.pt-4.pb-4.mb-5
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img24.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.mb-4.text-bold(data-aos="fade-down") Antes de acercarse a la víctima, se debe realizar una verificación rápida del entorno que incluya:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Estabilidad del escenario inmediato.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Presencia de tránsito vehicular activo.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Existencia de cables eléctricos, fuego o sustancias peligrosas.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Posibilidad de derrumbes o estructuras inestables.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Riesgo de violencia activa o presencia de agresores.
    p.mb-5(data-aos="fade-down") Si el riesgo es alto o no puede ser controlado con medidas básicas, la prioridad es activar el Sistema de Emergencias Médicas y esperar apoyo especializado. Ninguna intervención justifica poner en peligro la vida del auxiliador.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Medidas según tipo de riesgo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Tipo de riesgo
                th(data-aos="fade-down")(style= "width: 60%") Medidas de precaución recomendadas

            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Físico o estructural.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantener distancia prudente, no ingresar a zonas inestables, evitar manipular estructuras dañadas.

              tr
                td(data-aos="fade-down") Eléctrico.
                td(data-aos="fade-down") No tocar cables expuestos, cortar la fuente de energía si es posible y seguro, evitar superficies húmedas en contacto con electricidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Químico.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") No inhalar vapores, no tocar sustancias desconocidas, evitar contacto directo con líquidos derramados.

              tr
                td(data-aos="fade-down") Biológico.
                td(data-aos="fade-down") Usar guantes si hay contacto con fluidos, evitar exposición directa a sangre, realizar higiene posterior a la intervención.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ambiental.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Protegerse de lluvia intensa, humo o calor extremo, reubicar a la víctima si el entorno lo permite y es seguro.
    p.mb-5(data-aos="fade-down") Cuando hay múltiples personas en el lugar, el control del entorno es fundamental para evitar desorden y nuevos riesgos. Se recomienda:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img25.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Evitar aglomeraciones alrededor de la víctima.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img26.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Solicitar espacio suficiente para la atención.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img27.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Delegar tareas simples como llamar al 123 o traer un botiquín.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema4/img28.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Mantener comunicación clara y calmada para reducir el pánico colectivo.
    p.mb-5(data-aos="fade-down") Estas acciones disminuyen el caos inicial, mejoran la coordinación y facilitan la posterior intervención institucional.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.g-0
        figure
          img(src='@/assets/curso/tema4/img29.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") La regla fundamental es no convertirse en una nueva víctima. La atención solo debe iniciarse cuando el entorno sea razonablemente seguro o cuando el riesgo haya sido parcialmente controlado. La seguridad del primer respondiente garantiza la continuidad de la ayuda y fortalece la efectividad del sistema de emergencias.
</template>

<script>
export default {
  name: 'Tema4',
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
