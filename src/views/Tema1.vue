<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de los primeros auxilios
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La atención en primeros auxilios constituye la primera respuesta organizada frente a una situación de urgencia o emergencia, y forma parte del deber general de solidaridad consagrado en el artículo 95 de la Constitución Política de Colombia. Su finalidad es preservar la vida, prevenir complicaciones, limitar el daño y facilitar el acceso oportuno al Sistema General de Seguridad Social en Salud.
    p(data-aos="fade-down") Desde el punto de vista técnico, los primeros auxilios se fundamentan en protocolos estandarizados internacionalmente (Cruz Roja Colombiana, Guías AHA para Soporte Vital Básico) y en el marco normativo nacional que regula la responsabilidad del ciudadano frente a situaciones de peligro (Código Penal Colombiano, Ley 599 de 2000).
    p.text-center.mb-5(data-aos="fade-down") La intervención debe ser:
    .row.mb-0(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img02.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Oportuna.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Proporcional al riesgo.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Segura para el auxiliador.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Limitada a la competencia del primer respondiente.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Generalidades y definiciones básicas
    p(data-aos="fade-down") Los primeros auxilios constituyen el conjunto de acciones inmediatas y temporales que se brindan a una persona ante una situación de urgencia o emergencia, con el propósito de preservar la vida, evitar el agravamiento de las lesiones y facilitar el acceso oportuno a la atención médica especializada. Representan la primera respuesta organizada frente a un evento adverso y forman parte esencial de la cadena de atención en salud.
    .row.BG01.justify-content-center.align-items-center.pt-4.pb-4.mb-4
      .col.col-lg-3.col-8.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img06.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Es importante comprender que los primeros auxilios:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No reemplazan la atención médica profesional.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No constituyen tratamiento definitivo.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No implican actos médicos especializados.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Son medidas transitorias hasta la llegada del Sistema de Emergencias Médicas (SEM).
      p.mb-0.text-center.order-3.mt-4(data-aos="fade-down") Los primeros auxilios se caracterizan por ser:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img07.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img08.svg", alt="Imagen decorativa").img100.m-auto
              h4 Inmediatos
              p Se aplican en el mismo lugar donde ocurre el evento.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img09.svg", alt="Imagen decorativa").img100.m-auto
              h4 Temporales
              p Mantienen estabilidad básica hasta recibir atención avanzada.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img10.svg", alt="Imagen decorativa").img100.m-auto
              h4 Básicos
              p Se limitan a técnicas elementales y no invasivas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img11.svg", alt="Imagen decorativa").img100.m-auto
              h4 Proporcionales
              p La intervención debe corresponder a la gravedad observada.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img12.svg", alt="Imagen decorativa").img100.m-auto
              h4 Seguros
              p No deben generar riesgos adicionales.
    p(data-aos="fade-down") Estas características garantizan que la actuación sea útil, organizada y ajustada a protocolos técnicos reconocidos, como los establecidos por la Cruz Roja Colombiana y las Guías de Soporte Vital Básico de la American Heart Association (AHA).
    .row.BG01.justify-content-center.align-items-center.pt-4.pb-4
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img13.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2.mb-5
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") La finalidad principal se orienta a cuatro objetivos esenciales:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Conservar la vida.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Prevenir complicaciones secundarias.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Reducir el dolor y la ansiedad.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Promover recuperación inicial mientras llega ayuda especializada.
      .row.justify-content-center.mb-4.order-3
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-primario.px-4.py-3
            p.mb-0(data-aos="fade-down") En eventos críticos, la actuación temprana puede disminuir significativamente la mortalidad y las secuelas, especialmente en casos de paro cardiorrespiratorio, hemorragias severas o trauma.
    p.mb-5.text-center(data-aos="fade-down") Los primeros auxilios forman parte del primer eslabón de la cadena de supervivencia, que comprende:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Reconocimiento temprano del evento.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Activación inmediata del sistema de emergencias.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Aplicación de soporte vital básico.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Atención avanzada.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Cuidados posteriores.
    p(data-aos="fade-down") El éxito de esta cadena depende de la rapidez y coordinación entre la respuesta comunitaria y el sistema formal de salud.
    p.mb-0(data-aos="fade-down") Comprender la naturaleza y finalidad de los primeros auxilios permite establecer el marco general de actuación frente a una emergencia. Sin embargo, para garantizar que esta intervención sea segura, legal y técnicamente adecuada, es necesario definir con claridad quién interviene, cuál es su función y cuáles son los límites de su actuación. En este contexto, el rol del primer respondiente adquiere especial relevancia dentro de la respuesta inicial ante situaciones de urgencia o emergencia.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Rol y límites del primer respondiente
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img19.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p El primer respondiente es la persona que interviene inicialmente en el lugar del evento antes de la llegada de los servicios especializados de salud o de organismos de socorro. Puede tratarse de un ciudadano capacitado, personal institucional no sanitario o integrante de brigadas de emergencia.
        .cajon.cajon.C02.color-secundario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Su actuación se fundamenta en el principio constitucional de solidaridad (Artículo 95 de la Constitución Política de Colombia), el cual establece el deber de obrar frente a situaciones que pongan en peligro la vida o la integridad de otras personas.
        p.mb-0(data-aos="fade-down") La función del primer respondiente no es realizar actos médicos, sino brindar asistencia básica y organizar la respuesta inicial. Su intervención se orienta a:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img20.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img21.svg", alt="Imagen decorativa").img100.m-auto
              p Identificar riesgos inmediatos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img22.svg", alt="Imagen decorativa").img100.m-auto
              p Garantizar condiciones mínimas de seguridad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img23.svg", alt="Imagen decorativa").img100.m-auto
              p Evaluar de forma básica el estado del lesionado.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img24.svg", alt="Imagen decorativa").img100.m-auto
              p Activar oportunamente el Sistema de Emergencias Médicas (SEM).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img25.svg", alt="Imagen decorativa").img100.m-auto
              p Aplicar técnicas básicas no invasivas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img26.svg", alt="Imagen decorativa").img100.m-auto
              p Proporcionar información clara a los servicios especializados.
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta--C01.p-3
          p.text-center.mb-0 Su actuación debe ser inmediata, prudente y ajustada a protocolos técnicos reconocidos.
    p.mb-5.text-center(data-aos="fade-down") El alcance del primer respondiente está determinado por:
    .row.justify-content-center.mb-5
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img27.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Su nivel de formación.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img28.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Las condiciones del entorno.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img29.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center La gravedad de la situación.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img30.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Los recursos disponibles.
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          h5(data-aos="fade-down") Puede realizar acciones como: 
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Control de hemorragias externas.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Maniobras básicas de soporte vital.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Inmovilización básica.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Protección de la escena.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Acompañamiento y contención emocional inicial.
          .tarjeta.tarjeta--blanca.p-4
            p.mb-0(data-aos="fade-down") Estas intervenciones buscan mantener estabilidad hasta la llegada del personal sanitario.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img31.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") El primer respondiente debe actuar dentro de límites claramente definidos para evitar daño adicional o implicaciones legales. No debe:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img32.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img33.svg", alt="Imagen decorativa").img100.m-auto
              p Realizar procedimientos invasivos sin formación médica.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img34.svg", alt="Imagen decorativa").img100.m-auto
              p Administrar medicamentos sin indicación profesional.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img35.svg", alt="Imagen decorativa").img100.m-auto
              p Manipular innecesariamente a la víctima.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img36.svg", alt="Imagen decorativa").img100.m-auto
              p Emitir diagnósticos clínicos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img37.svg", alt="Imagen decorativa").img100.m-auto
              p Sustituir la atención médica especializada.
    p.mb-0(data-aos="fade-down") El exceso en la intervención puede configurar conductas imprudentes o culposas, de acuerdo con el Código Penal Colombiano (Ley 599 de 2000), especialmente cuando se actúa con negligencia o impericia.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Evaluación inicial del lesionado
    p(data-aos="fade-down") Una vez identificado el rol y los límites de actuación del primer respondiente, la intervención debe centrarse en la valoración inicial del lesionado. Esta fase constituye el primer momento operativo de contacto directo con la víctima y tiene como finalidad identificar condiciones que comprometan la vida de manera inmediata.
    p.mb-5(data-aos="fade-down") La evaluación inicial debe ser rápida, estructurada y orientada a la priorización. No busca realizar diagnósticos médicos, sino reconocer signos evidentes que indiquen riesgo vital y permitan activar oportunamente el Sistema de Emergencias Médicas (SEM).
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Seguridad del entorno
    p.mb-5(data-aos="fade-down") Esta actividad se realiza antes del contacto. Antes de aproximarse a la víctima, el primer respondiente debe:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img38.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") 
            p.mb-0(data-aos="fade-down") Evaluar riesgos activos (tránsito vehicular, fuego, electricidad, estructuras inestables y sustancias peligrosas).
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img39.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") 
            p.mb-0(data-aos="fade-down") Verificar que cuenta con elementos básicos de protección (guantes y mascarilla si es necesario).
          .col-xl.col-lg-6.tarjeta.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img40.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") 
            p.mb-0(data-aos="fade-down") Confirmar que puede intervenir sin poner en riesgo su vida o la de terceros.
    p.mb-5(data-aos="fade-down") La seguridad personal es prioritaria y se fundamenta en el principio de no maleficencia, que implica no generar nuevos daños ni exponerse a riesgos innecesarios. Si el escenario representa peligro elevado, la prioridad es activar organismos especializados y no intervenir directamente. Los principios de no maleficencia y beneficencia se desarrollan ampliamente en la literatura bioética (Beauchamp & Childress, 2019).
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Aplicación del principio PAS
    p.mb-5(data-aos="fade-down") Constituye una secuencia operativa básica que orienta la actuación del primer respondiente en el lugar del evento. Esta metodología permite priorizar la seguridad, activar oportunamente el sistema de emergencias y brindar asistencia inicial organizada. A continuación, se presenta de manera esquemática esta secuencia de intervención:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img41.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Proteger
            h5.t2.mb-2 Proteger
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Asegurar la escena.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Evitar nuevos incidentes.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Señalizar o acordonar cuando sea necesario.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img42.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Avisar
            h5.t2.mb-2 Avisar
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Activar el Sistema de Emergencias Médicas (123 u otro número territorial).
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Informar ubicación exacta, número de víctimas y condición aparente.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img43.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Socorrer
            h5.t2.mb-2 Socorrer
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Brindar asistencia básica dentro del alcance del primer respondiente.
    p.mb-5(data-aos="fade-down") Este principio evita actuaciones impulsivas y establece un orden lógico de intervención.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Evaluación primaria estructurada (valoración ABC básica) 
    p.mb-5(data-aos="fade-down") Una vez asegurada la escena, se realiza una valoración rápida orientada a identificar amenazas vitales. A continuación, se describe la estructura ABC:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              .row
                .col-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img44.svg', alt='Imagen decorativa')
                .col-lg-12
                  h4 Estado de conciencia y vía aérea
                  ul.lista-ul
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Verificar si la víctima responde al llamado verbal.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Si no responde, estimular suavemente.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Confirmar que la vía aérea esté libre de obstrucción visible.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 No introducir dedos en la boca si no se observa un objeto claramente removible.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 La ausencia de respuesta es un signo de gravedad.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img45.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              .row
                .col-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img46.svg', alt='Imagen decorativa')
                .col-lg-12
                  h4 Respiración
                  ul.lista-ul
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Observar movimientos torácicos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Escuchar y sentir la respiración durante máximo 10 segundos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Identificar respiración ausente, irregular o dificultosa.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Si la víctima no respira o presenta respiración anormal, se debe activar inmediatamente el SEM (si no se ha hecho) e iniciar maniobras básicas según formación (por ejemplo, RCP si está capacitado).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img47.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4
            .col-lg-6.order-lg-1.order-2
              .row
                .col-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img48.svg', alt='Imagen decorativa')
                .col-lg-12
                  h4 Circulación y hemorragias visibles
                  ul.lista-ul
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Identificar sangrado abundante.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Evaluar coloración de piel (palidez extrema o cianosis).
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Verificar signos evidentes de shock (sudoración fría o debilidad marcada).
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Si hay hemorragia externa, aplicar presión directa con material limpio, no retirar objetos incrustados y no aplicar torniquetes improvisados sin formación específica.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img49.png', alt='Imagen decorativa')
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 d) Identificación de signos evidentes de trauma
    .row.BG01.justify-content-center.align-items-center.pt-4.pb-4.mb-4
      .col.col-lg-4.col-8.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img50.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Este proceso se realiza posterior a la valoración ABC básica. Es de vital importancia observar:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Deformidades visibles.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Heridas abiertas.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Quemaduras.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Posible lesión cervical o de columna.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-1 Dolor intenso localizado.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 En casos de trauma, no movilizar innecesariamente, no levantar a la víctima si no existe peligro inminente y evitar movimientos bruscos.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 e) Conducta según estado de conciencia
    p.mb-5(data-aos="fade-down") La intervención se ajusta al estado de conciencia de la víctima, orientando las acciones iniciales hacia la valoración primaria y la aplicación de medidas inmediatas de soporte. A continuación, se presentan las acciones específicas que deben implementarse según se trate de una víctima consciente o inconsciente:
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema1/img51.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Víctima consciente
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Presentarse e identificar el rol.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Preguntar qué ocurrió.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Indagar sobre dolor, mareo o dificultad respiratoria.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Mantener comunicación calmada y tranquilizadora.
              br
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema1/img52.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Víctima inconsciente
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Verificar respuesta.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Evaluar respiración.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Activar sistema de emergencias.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Colocar en posición lateral de seguridad si respira y no hay sospecha de trauma.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 f) Lo que NO debe hacer el primer respondiente
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img53.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Administrar medicamentos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img54.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Manipular fracturas sin necesidad.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img55.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Retirar objetos incrustados.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img56.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Realizar procedimientos invasivos.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img57.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Trasladar a la víctima sin condiciones adecuadas.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 g) Activación obligatoria del Sistema de Emergencias (SEM) cuando exista
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-5.col-12.order-lg-1.order-2
        .cajon.C01.px-4.py-2.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador(data-aos="fade-down")
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Pérdida de conciencia.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Dificultad respiratoria.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Hemorragia abundante.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Dolor torácico intenso.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Trauma significativo.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Sospecha de lesión cervical o craneoencefálica.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img58.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img59.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") La activación oportuna forma parte del deber legal de auxilio establecido en la normatividad colombiana (Ley 599 de 2000, omisión de socorro). La evaluación inicial no reemplaza la valoración médica profesional, sino que constituye una fase temporal de estabilización básica hasta la llegada del personal especializado. Esta valoración permite identificar condiciones que comprometen la vida y orientar la intervención técnica del primer respondiente; sin embargo, su eficacia no depende únicamente de la correcta aplicación de los protocolos, sino también de una actuación ética y comunicativa que garantice una intervención respetuosa y humanizada.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Bioética y comunicación
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img60.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") La intervención en primeros auxilios no constituye únicamente un acto técnico; también representa un acto ético que implica respeto por la dignidad, la integridad y la autonomía de la persona afectada. La forma en que el primer respondiente actúa y se comunica influye directamente en la estabilidad emocional de la víctima y en la organización del entorno durante la emergencia.
        p.mb-0(data-aos="fade-down") La conducta bioética se fundamenta en principios universalmente reconocidos en el ámbito de la salud y compatibles con el ordenamiento jurídico colombiano, particularmente con el respeto por la dignidad humana consagrado en el artículo 1 de la Constitución Política. Aunque el primer respondiente no realiza un acto médico formal, su actuación debe orientarse por los siguientes principios:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img61.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img62.svg", alt="Imagen decorativa").img100.m-auto
              h4 Respeto por la dignidad humana
              p Tratar a la persona con consideración y humanidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img63.svg", alt="Imagen decorativa").img100.m-auto
              h4 No maleficencia
              p Evitar generar daño adicional.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img64.svg", alt="Imagen decorativa").img100.m-auto
              h4 Beneficencia
              p Actuar buscando el mayor beneficio posible para la víctima.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img65.svg", alt="Imagen decorativa").img100.m-auto
              h4 Confidencialidad
              p No divulgar información personal innecesaria.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img66.svg", alt="Imagen decorativa").img100.m-auto
              h4 Prudencia
              p Actuar dentro de los límites de su competencia.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.p-3
          p.text-center.mb-0(data-aos="fade-down") Estos principios orientan la toma de decisiones en situaciones de presión y reducen la probabilidad de intervenciones imprudentes.
    p.text-center.mb-5(data-aos="fade-down")  Cuando la víctima está consciente y orientada, se debe:
    .row.justify-content-center.mb-5
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img67.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Explicar brevemente lo que se va a hacer.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img68.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Solicitar autorización para intervenir.
      .col.col-lg-4.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img69.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Respetar la negativa, salvo que exista riesgo vital evidente.
    p.mb-0(data-aos="fade-down") En caso de inconsciencia, se presume consentimiento para acciones orientadas a preservar la vida, en concordancia con el principio de protección de la vida y la integridad.
    .row.BG01.justify-content-center.align-items-center.pt-4.pb-4.mb-4
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img70.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") La comunicación cumple un papel central en la estabilización del entorno. Una interacción adecuada permite:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Reducir el pánico.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Facilitar la colaboración de terceros.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Generar confianza en la víctima.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Mejorar la coordinación con organismos de socorro.
    p.mb-5(data-aos="fade-down") Durante la intervención se recomienda:
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img71.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Utilizar un tono calmado y firme.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img72.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Dar instrucciones claras y breves.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img73.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Evitar juicios o reproches.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img74.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") No generar falsas expectativas.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img75.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Informar lo que se está haciendo.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img76.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") El control emocional del auxiliador constituye un componente ético y operativo esencial. Mantener la calma reduce errores, mejora la toma de decisiones, transmite seguridad a la víctima y facilita la coordinación. En este sentido, la autorregulación emocional forma parte de la competencia integral del primer respondiente.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El análisis de los fundamentos técnicos, el rol del primer respondiente y los principios bioéticos que orientan su actuación permite comprender cómo intervenir frente a una emergencia desde una perspectiva operativa y humanizada. No obstante, esta actuación también se encuentra enmarcada en disposiciones legales que regulan el deber de ayuda, la responsabilidad individual y la articulación con el sistema de salud, por lo que resulta necesario examinar el marco normativo que sustenta la intervención en primeros auxilios y define sus implicaciones jurídicas.
        

</template>

<script>
export default {
  name: 'Tema1',
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
