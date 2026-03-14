<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los fundamentos normativos y los protocolos de gestión del escenario en primeros auxilios con el fin de identificar las responsabilidades legales del primer respondiente y garantizar el aseguramiento adecuado del entorno conforme a la normatividad vigente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'El objetivo principal de la evaluación inicial del lesionado es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar diagnóstico médico completo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar responsabilidades legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar condiciones que comprometan la vida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Trasladar inmediatamente a la víctima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'El principio PAS establece el siguiente orden:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger – Socorrer – Avisar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger – Avisar – Socorrer.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Avisar – Proteger – Socorrer.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Socorrer – Avisar – Proteger.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'La prioridad antes de intervenir en una emergencia es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evaluar signos vitales.', esCorrecta: false },
            { id: 'b', texto: 'Tomar fotografías.', esCorrecta: false },
            { id: 'c', texto: 'Mover a la víctima.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Garantizar la seguridad del entorno.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Según el Código Penal Colombiano, la omisión de socorro está relacionada con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La obligación de realizar cirugías antes del evento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La responsabilidad por no prestar ayuda cuando es posible hacerlo sin riesgo propio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El deber de hacer una investigación profunda de la situación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El traslado obligatorio de la víctima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El Sistema de Emergencias Médicas (SEM) tiene como función principal:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar la atención prehospitalaria y traslado asistido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar necropsias y traslado asistido.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Imponer sanciones legales.', esCorrecta: false },
            { id: 'd', texto: 'Investigar delitos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'En la valoración ABC, la letra “A” corresponde a:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Atención psicológica.', esCorrecta: false },
            { id: 'b', texto: 'Vía aérea.', esCorrecta: true },
            { id: 'c', texto: 'Activación del SEM.', esCorrecta: false },
            { id: 'd', texto: 'Acordonamiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'El <em>triage</em> tiene como finalidad:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emitir diagnósticos médicos.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Asignar responsabilidades.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Clasificar víctimas según gravedad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Trasladar pacientes leves primero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'En el <em>triage</em>, el color rojo indica:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Atención inmediata.', esCorrecta: true },
            { id: 'b', texto: 'Sin riesgo vital.', esCorrecta: false },
            { id: 'c', texto: 'Lesión leve.', esCorrecta: false },
            { id: 'd', texto: 'Atención diferida.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'El primer respondiente NO debe:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Activar el SEM.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Realizar procedimientos invasivos sin formación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicar presión en una hemorragia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el estado de conciencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Una medida básica de bioseguridad es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reutilizar guantes.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Evitar contacto con fluidos corporales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'No usar protección.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Manipular heridas sin barreras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'El aseguramiento del escenario implica:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Investigar el hecho.', esCorrecta: false },
            { id: 'b', texto: 'Realizar interrogatorios.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Trasladar a la víctima sin evaluar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el entorno para evitar nuevos riesgos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'En el ámbito prehospitalario y en eventos con múltiples víctimas, el <em>triage</em> permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el caos operativo.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Esperar sin actuar.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Identificar y señalas responsables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar personas con riesgo vital inminente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La cadena de custodia busca:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar prioridades médicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la conservación, integridad, autenticidad y trazabilidad de los elementos materiales probatorios.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Trasladar víctimas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Priorizar la atención hospitalaria del paciente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es un factor de riesgo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Emocional.', esCorrecta: false },
            { id: 'b', texto: 'Amoroso.', esCorrecta: false },
            { id: 'c', texto: 'Químico.', esCorrecta: true },
            { id: 'd', texto: 'Espiritual.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'En la activación del SEM, se debe informar:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del lesionado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicación exacta y estado general.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Opiniones personales.', esCorrecta: false },
            { id: 'd', texto: 'Diagnóstico definitivo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'En una hemorragia abundante, la medida inmediata es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aplicar presión directa.', esCorrecta: true },
            { id: 'b', texto: 'Esperar a la ambulancia.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Retirar objetos incrustados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mover a la víctima sin control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'El propósito del <em>triage</em> es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación de los sentimientos de la persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Redistribución de recursos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Atención según la gravedad clínica y el riesgo vital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Implementación de un sistema de gestión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'El aseguramiento del escenario debe mantenerse:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo si hay policía.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Durante toda la intervención.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Solo al inicio.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Únicamente en accidentes viales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La higiene de manos constituye la medida más eficaz para prevenir:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pintarse las uñas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Tomar decisiones médicas definitivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La transmisión de infecciones.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Investigar causas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La Ley 1523 de 2012 se relaciona con:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código de Procedimiento Civil.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Código de Comercio.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Gestión del Riesgo de Desastres.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Aspectos financieros.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos relacionados con los fundamentos normativos, la gestión del riesgo y la actuación del primer respondiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
