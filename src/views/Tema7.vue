<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Bioseguridad y preparación
    p.mb-5(data-aos="fade-down") La bioseguridad en primeros auxilios constituye un pilar fundamental para garantizar la protección del primer respondiente y de la víctima durante la atención inicial. Toda intervención en un escenario de emergencia puede implicar exposición a fluidos corporales, agentes biológicos, riesgos ambientales, superficies contaminadas o materiales potencialmente infecciosos. Por esta razón, la aplicación de medidas preventivas es obligatoria antes, durante y después de la asistencia.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las precauciones universales parten del principio de considerar que toda persona puede ser portadora de agentes infecciosos, independientemente de su diagnóstico conocido. En este sentido, la aplicación sistemática de medidas de higiene, control y barrera reduce significativamente el riesgo de transmisión de enfermedades. Estas orientaciones se encuentran respaldadas por las recomendaciones técnicas emitidas por la Organización Mundial de la Salud (2009), que establecen lineamientos sobre higiene de manos, uso de elementos de protección personal y manejo seguro de fluidos biológicos.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img02.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-3
          p.mb-0(data-aos="fade-down") En el marco del Sistema General de Seguridad Social en Salud y de la normativa vigente en seguridad y salud en el trabajo en Colombia, la prevención del riesgo biológico forma parte de los deberes básicos de protección individual y colectiva. La intervención responsable exige no solo el uso adecuado de elementos de protección personal, sino también la preparación previa del botiquín de primeros auxilios, la verificación de insumos y el conocimiento de protocolos básicos de actuación segura.
        p.mb-0(data-aos="fade-down") La bioseguridad no es una acción aislada, sino una conducta permanente que acompaña cada etapa de la atención prehospitalaria. Su correcta aplicación protege al primer respondiente, evita la contaminación cruzada y contribuye a una atención segura, ética y profesional.
    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Principios y técnica aséptica
    p(data-aos="fade-down") La bioseguridad se fundamenta en el principio de precaución universal, según el cual todo fluido corporal, como sangre, saliva, vómito o secreciones respiratorias, debe considerarse potencialmente contaminante, independientemente de la existencia de un diagnóstico confirmado. Este enfoque reduce el riesgo de transmisión de agentes biológicos, tales como virus, bacterias y hongos.
    p(data-aos="fade-down") En consecuencia, el primer respondiente debe asumir medidas de protección sistemáticas en toda intervención, aun cuando el riesgo no sea evidente.
    p.mb-5(data-aos="fade-down") Entre los principios básicos de actuación se encuentran:
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.py-3.px-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema7/img03.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img04.svg", alt="Imagen decorativa").img100.m-auto
              p Evitar el contacto directo con sangre u otros fluidos corporales.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img05.svg", alt="Imagen decorativa").img100.m-auto
              p Utilizar elementos de protección personal cuando estén disponibles, como guantes, tapabocas o barreras físicas improvisadas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img06.svg", alt="Imagen decorativa").img100.m-auto
              p Realizar higiene de manos antes y después de la atención, preferiblemente con agua y jabón o soluciones alcohólicas cuando no sea posible el lavado convencional.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img07.svg", alt="Imagen decorativa").img100.m-auto
              p Desechar materiales contaminados de manera segura, evitando su reutilización.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img08.svg", alt="Imagen decorativa").img100.m-auto
              p Evitar tocarse el rostro, ojos, nariz o boca durante la intervención.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img09.svg", alt="Imagen decorativa").img100.m-auto
              p Cubrir heridas o lesiones propias antes de prestar ayuda.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.p-3
          .row.justify-content-center.align-items-center
            .col.col-lg-10.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La higiene de manos constituye la medida más eficaz para prevenir la transmisión de infecciones. Incluso cuando se utilizan guantes, estos no sustituyen la necesidad de lavado o desinfección posterior.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/tema7/img10.svg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La técnica aséptica corresponde al conjunto de procedimientos orientados a prevenir la contaminación y limitar la propagación de microorganismos durante la atención. En el contexto de primeros auxilios comunitarios, no implica esterilidad hospitalaria, sino la aplicación consciente de medidas básicas de limpieza y protección.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.justify-content-center.align-items-center.g-0
          .col-lg-12.order-lg-2.order-2
            .cajon.cajon.C03.p-4
              .col-lg-12
                .tarjeta.clr--pink.p-4.rounded-0.h-100
                  .tarjeta.bg-white.p-4
                    //- #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                    //-   h2 Pódcast
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Pódcast"
                    :audio="require('@/assets/curso/audio/Podcast_CF01_11220133.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-lg-12.col-12.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema7/img11.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img12.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") Es importante comprender que la técnica aséptica avanzada corresponde al personal sanitario en entornos clínicos. Sin embargo, el primer respondiente cumple un papel preventivo fundamental al aplicar principios básicos de higiene, barrera y control de contaminación.
    p.mb-0(data-aos="fade-down") La bioseguridad no solo protege al auxiliador, sino que también evita la transmisión cruzada entre víctimas y contribuye a una atención más segura y responsable dentro del Sistema de Emergencias Médicas.
    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Métodos de barrera
    p(data-aos="fade-down") Los métodos de barrera constituyen una herramienta esencial para minimizar la exposición a riesgos biológicos durante la atención inicial. Su finalidad es interponer un elemento físico entre el primer respondiente y los fluidos corporales o secreciones potencialmente contaminantes, reduciendo así la probabilidad de transmisión de enfermedades.
    p.mb-4(data-aos="fade-down") Entre los más utilizados se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema7/img13.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p Guantes desechables, preferiblemente de látex o nitrilo, para evitar el contacto directo con sangre, secreciones o tejidos lesionados.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema7/img14.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p Protector nasobucal o mascarilla quirúrgica, especialmente cuando exista riesgo de exposición a secreciones respiratorias.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema7/img15.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p Mascarillas o dispositivos con válvula unidireccional para reanimación cardiopulmonar, que permiten realizar ventilaciones de rescate de manera más segura.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema7/img16.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              p Gafas o protectores oculares cuando exista riesgo de salpicaduras.
              br
    p.mb-5(data-aos="fade-down") El uso de estos elementos debe realizarse antes del contacto con la víctima siempre que la situación lo permita. Asimismo, deben retirarse cuidadosamente para evitar la contaminación cruzada, evitando tocar la parte externa del elemento utilizado y realizando higiene de manos inmediatamente después de su retiro.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img17.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") Cuando no se disponga de elementos de barrera, el primer respondiente debe evaluar el riesgo y, de ser necesario, priorizar maniobras que no impliquen contacto directo con fluidos, activando oportunamente el Sistema de Emergencias Médicas.
    separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Botiquín y preparación de insumos
    .row.justify-content-center.align-items-stretch.mb-5.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C04.p-4.h-100.w-100
          .row.mb-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema7/img19.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 El botiquín de primeros auxilios es el conjunto organizado de insumos básicos destinados a brindar atención inicial en caso de accidente o emergencia. Su finalidad es facilitar una respuesta rápida, ordenada y segura mientras se activa el Sistema de Emergencias Médicas.
          p En Colombia, los entornos laborales deben contar con botiquines conforme a los lineamientos del Sistema de Gestión de Seguridad y Salud en el Trabajo, cuyo contenido varía según el nivel de riesgo de la actividad económica y el número de trabajadores expuestos.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema7/img18.png', alt='Imagen decorativa')
    .BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block.py-3.px-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema7/img20.png", alt="Imagen decorativa")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img21.svg", alt="Imagen decorativa").img100.m-auto
              p Guantes desechables.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img22.svg", alt="Imagen decorativa").img100.m-auto
              p Gasas estériles.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img23.svg", alt="Imagen decorativa").img100.m-auto
              p Vendas elásticas y vendas triangulares.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img24.svg", alt="Imagen decorativa").img100.m-auto
              p Apósitos adhesivos de diferentes tamaños.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img25.svg", alt="Imagen decorativa").img100.m-auto
              p Solución antiséptica.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img26.svg", alt="Imagen decorativa").img100.m-auto
              p Suero fisiológico para irrigación.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img27.svg", alt="Imagen decorativa").img100.m-auto
              p Tijeras de punta roma.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img28.svg", alt="Imagen decorativa").img100.m-auto
              p Mascarilla o dispositivo para reanimación cardiopulmonar.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema7/img29.svg", alt="Imagen decorativa").img100.m-auto
              p Elementos para control básico de hemorragias.
    .row.BG01.justify-content-center.pt-4.pb-4.mb-5
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img30.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Es importante que el botiquín:
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Esté ubicado en un lugar visible, accesible y señalizado.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Permanezca protegido del calor, humedad o contaminación.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Sea revisado periódicamente para verificar fechas de vencimiento.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 Mantenga inventario actualizado.
                li
                  i.fas.fa-briefcase-medical
                  p.mb-0 No contenga medicamentos sin control o prescripción profesional.
    p.mb-5(data-aos="fade-down") La presencia de medicamentos puede implicar responsabilidad legal si se administran sin autorización o sin competencia profesional, especialmente en entornos laborales o comunitarios.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema7/img31.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.p-4
          p.mb-0(data-aos="fade-down") La preparación adecuada implica verificar previamente la disponibilidad y el estado de los elementos necesarios antes de que ocurra una emergencia. No se trata únicamente de tener un botiquín, sino de garantizar que esté operativo y organizado.
    p.text-center.mb-5(data-aos="fade-down") Antes de intervenir, el primer respondiente debe:
    .row.justify-content-center.mb-5
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img32.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Confirmar que cuenta con elementos de protección personal.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Revisar rápidamente el contenido básico del botiquín.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Verificar que el material esté en condiciones adecuadas.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema7/img35.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Organizar los insumos que va a utilizar para evitar improvisaciones.
    p.mb-0(data-aos="fade-down") La improvisación aumenta el riesgo de errores, retrasa la atención y puede generar exposición innecesaria a riesgos biológicos o mecánicos. Una preparación anticipada mejora la eficacia de la respuesta y fortalece la seguridad del primer respondiente.

</template>

<script>
export default {
  name: 'Tema7',
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
