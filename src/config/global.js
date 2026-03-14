export default {
  global: {
    Name: 'Fundamentos normativos y gestión del escenario en primeros auxilios',
    Description:
      'Este componente formativo desarrolla los fundamentos normativos, legales y técnicos que regulan la actuación del primer respondiente, así como la gestión segura del escenario de emergencia. Incluye bioseguridad, <em>triage</em>, cadena de custodia, activación del sistema de emergencias y aseguramiento de la escena, conforme a lineamientos vigentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de los primeros auxilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Generalidades y definiciones básicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Rol y límites del primer respondiente',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Evaluación inicial del lesionado',
            hash: 't_1_3',
          },
          { numero: '1.4', titulo: 'Bioética y comunicación', hash: 't_1_4' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo y responsabilidades',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Normatividad vigente', hash: 't_2_1' },
          {
            numero: '2.2',
            titulo: 'Responsabilidades y Código Penal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Legislación en emergencias y rol de la Cruz Roja',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema de emergencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistema de Emergencias Médicas (SEM)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Red pública y número único',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Activación y técnica de llamada',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Urgencia, emergencia y factores de riesgo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación de riesgos y tipos de accidentes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Medidas de minimización y precaución',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aseguramiento del escenario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Principios y criterios de aseguramiento',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acordonamiento y control del evento',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Clasificación y custodia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: '<em>Triage</em> y aplicación básica',
            hash: 't_6_1',
          },
          { numero: '6.2', titulo: 'Cadena de custodia', hash: 't_6_2' },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Bioseguridad y preparación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Principios y técnica aséptica',
            hash: 't_7_1',
          },
          { numero: '7.2', titulo: 'Métodos de barrera', hash: 't_7_2' },
          {
            numero: '7.3',
            titulo: 'Botiquín y preparación de insumos',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acordonamiento',
      significado:
        'Delimitación física del área donde ocurrió un evento adverso, con el fin de proteger a la víctima, evitar interferencias externas y reducir riesgos adicionales durante la atención inicial.',
    },
    {
      termino: 'Auxiliador',
      significado:
        'Persona que brinda asistencia inmediata aplicando conocimientos básicos de primeros auxilios, respetando los límites de su formación y actuando conforme a protocolos establecidos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas destinadas a minimizar el riesgo de exposición a agentes biológicos durante la atención de una emergencia, protegiendo tanto a la víctima como al primer respondiente.',
    },
    {
      termino: 'Botiquín de primeros auxilios',
      significado:
        'Conjunto organizado de insumos básicos destinados a brindar atención inicial en caso de accidente o emergencia, conforme a lineamientos de seguridad y normatividad aplicable.',
    },
    {
      termino: 'Cadena de custodia',
      significado:
        'Procedimiento que garantiza la preservación, integridad y trazabilidad de elementos materiales probatorios en un escenario donde puedan existir implicaciones legales.',
    },
    {
      termino: 'Comunicación asertiva en emergencia',
      significado:
        'Forma clara, precisa y organizada de transmitir información durante una situación de urgencia, facilitando la coordinación con el Sistema de Emergencias Médicas.',
    },
    {
      termino: 'Emergencia',
      significado:
        'Situación crítica que pone en peligro inmediato la vida o la integridad de una persona y requiere intervención urgente para evitar consecuencias graves.',
    },
    {
      termino: 'Evaluación inicial del lesionado',
      significado:
        'Proceso sistemático y rápido de valoración primaria orientado a identificar condiciones que comprometan la vida y definir la activación del sistema de emergencias.',
    },
    {
      termino: 'Factor de riesgo',
      significado:
        'Condición o circunstancia que incrementa la probabilidad de que ocurra un accidente o que agrave sus consecuencias.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Proceso orientado a identificar, analizar y reducir los riesgos asociados a una situación de emergencia, priorizando la seguridad del entorno.',
    },
    {
      termino: 'Métodos de barrera',
      significado:
        'Elementos de protección personal utilizados para prevenir el contacto directo con fluidos corporales, tales como guantes, mascarillas y gafas de protección.',
    },
    {
      termino: 'Primer respondiente',
      significado:
        'Persona que interviene inicialmente en el lugar donde ocurre un evento adverso, brindando asistencia básica mientras se activa el sistema formal de atención en salud.',
    },
    {
      termino: 'Principio PAS',
      significado:
        'Protocolo básico de actuación en primeros auxilios que establece el orden lógico de intervención: Proteger, Avisar y Socorrer.',
    },
    {
      termino: 'Red pública de urgencias',
      significado:
        'Conjunto de instituciones, recursos y servicios articulados dentro del Sistema General de Seguridad Social en Salud para atender eventos que requieren intervención inmediata.',
    },
    {
      termino: 'Sistema de Emergencias Médicas (SEM)',
      significado:
        'Modelo organizativo encargado de coordinar la respuesta prehospitalaria, el traslado y la atención inicial en situaciones de urgencia y emergencia.',
    },
    {
      termino: '<em>Triage</em>',
      significado:
        'Proceso de clasificación de víctimas en función de la gravedad de sus lesiones y la prioridad de atención.',
    },
    {
      termino: 'Urgencia',
      significado:
        'Situación que requiere atención médica pronta, pero que no implica necesariamente riesgo vital inmediato.',
    },
    {
      termino: 'Víctima',
      significado:
        'Persona que sufre una lesión, enfermedad súbita o evento traumático que compromete su estado de salud físico o mental.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Heart Association. (s. f.). <em>American Heart Association</em>.',
      link: 'https://www.heart.org/',
    },
    {
      referencia:
        'Beauchamp, T. L., & Childress, J. F. (2019). <em>Principles of biomedical ethics</em> (8th ed.). Oxford University Press.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2000). <em>Ley 599 de 2000: Por la cual se expide el Código Penal</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). <em>Ley 1523 de 2012: Por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (2024). Primeros auxilios en accidentes de tránsito, ¿cómo actuar correctamente?',
      link:
        'https://ccs.org.co/portfolio/primeros_auxilios_accidentes_transito/',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). <em>Constitución Política de Colombia</em>.',
      link: 'http://www.secretariasenado.gov.co/constitucion-politica',
    },
    {
      referencia:
        'Cruz Roja Colombiana. (s. f.). <em>Manual básico de primeros auxilios</em>.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Aseguramiento al sistema general de salud</em>.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/Regimensubsidiado/Paginas/aseguramiento-al-sistema-general-salud.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Triage</em>.',
      link: 'https://www.minsalud.gov.co/salud/PServicios/Paginas/triage.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Sistema de Emergencias Médicas (SEM)</em>.',
      link:
        'https://www.minsalud.gov.co/salud/PServicios/Paginas/Sistema-de-emergencias-medicas-SEM.aspx',
    },
    {
      referencia:
        'Oficina de las Naciones Unidas para la Reducción del Riesgo de Desastres (UNDRR). (2015). <em>Sendai framework for disaster risk reduction 2015–2030</em>.',
      link:
        'https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2009). <em>WHO guidelines on hand hygiene in health care</em>.',
      link:
        'https://iris.who.int/server/api/core/bitstreams/b7cdc469-d662-4958-adfd-949a750e5ad9/content',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
