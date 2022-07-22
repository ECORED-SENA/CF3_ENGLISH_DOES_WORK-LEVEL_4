export default {
  global: {
    componenteFormativo:
      'Things I was doing before...<br><span class=r-3>Cosas que estaba haciendo antes...</b>',
    descripcionCurso:
      // 'This component is going to be the introduction to the past tenses, starting with the past forms of the verb “to be” (was / were), useful time expressions to refer to the past (ago, last, yesterday, etc.), and suitable vocabulary to build sentences and describe information about experiences of our own life in the past tense. <br><br>
      'Este componente expone el presente continuo y los verbos terminados en “-ing” que se necesitan para formarlo, muestra vocabulario, como adverbios de tiempo y “rutinas laborales y sociales”, para hablar del pasado, y enseña cómo usar el discurso indirecto (o <em>reported speech</em>) para informar lo que otras personas dijeron antes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flag.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Past progressive</em> (Pasado progresivo)   ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>-ing verbs</em> (Verbos terminados en -ing)  ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '<em>Affirmative, negative and interrogative structures</em> (Estructuras afirmativas, negativas e interrogativas) ',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em>Adverbs of time for the past tense</em> (Adverbios de tiempo para el pasado)  ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Reported speech</em> (Discurso indirecto)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>Past simple</em> (Pasado simple)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Past progressive</em> (Pasado progresivo)',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          '<em>Let&#39s talk about the work and social routines I used to have</em> (Hablemos de las rutinas laborales y sociales que solía tener)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
      tema: 'Past progressive (Pasado progresivo)',
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia-UNAM. (s. f.). Past Continuous. Ambiente Virtual de Idiomas. ',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/2942/mod_resource/content/14/Contenido/index.html',
    },
    {
      tema: 'Past progressive (Pasado progresivo) ',
      referencia:
        'BBC. (s. f.). Unit 7: The Titanic Past simple and past continuous. Learning English. ',
      tipo: 'Artículo',
      link:
        'https://www.bbc.co.uk/learningenglish/course/lower-intermediate/unit-7/tab/grammar',
    },
    {
      tema: 'Past progressive (Pasado progresivo)',
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia-UNAM. (s.f.). Contrast the use between Past Simple and Past Continuous. Ambiente Virtual de Idiomas. ',
      tipo: 'Artículo      ',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/3617/mod_resource/content/18/contenido/index.html',
    },
    {
      tema: 'Past progressive (Pasado progresivo)',
      referencia:
        'BBC Learning English. (2019). Past simple and past continuous - 6 Minute Grammar [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uTB5I8V9Eog',
    },
    {
      tema: 'ing verbs (Verbos terminados en -ing)',
      referencia:
        'Woodward English. (2020). ING Spelling rules – Spelling of verbs ending in ING in English [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QwVWTBzb6YY&t=2s',
    },
    {
      tema:
        'Affirmative, negative and interrogative structures (Estructuras afirmativas, negativas e interrogativas)',
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia-UNAM. (s. f.). Past continuous Affirmative, negative and interrogative forms. Ambiente Virtual de Idiomas. ',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/3613/mod_resource/content/13/contenido/index.html',
    },
    {
      tema: 'Reported speech (Discurso indirecto)',
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia-UNAM. (s. f.). Reported Speech. Ambiente Virtual de Idiomas.',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/2759/mod_resource/content/21/contenido/index.html',
    },
    {
      tema: ' Reported speech (Discurso indirecto)',
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia-UNAM. (s. f.). Reported Speech. Affirmative sentences (say, tell, ask, etc.). Ambiente Virtual de Idiomas. ',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/12329/mod_resource/content/1/contenido/index.html',
    },
    {
      tema: 'Reported speech (Discurso indirecto)',
      referencia:
        'BBC Learning English. (2018). Reported Speech: The Grammar Gameshow Episode 25 [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cetrtFDN2Zg',
    },
  ],
  glosario: [
    {
      termino: '<em>Adverbs of time</em> / Adverbios de tiempo',
      significado:
        'palabra gramatical que nos dice cuándo sucedió una acción, y también por cuánto tiempo y con qué frecuencia.',
    },
    {
      termino: '<em>Auxiliary verb</em> / Verbo auxiliar',
      significado:
        'verbo que acompaña a los verbos principales para que funcionen en otras formas u oraciones, como preguntas, respuestas cortas, oraciones negativas, etc. No tiene traducción al español.',
    },
    {
      termino: '<em>Past progressive</em> / Pasado progresivo',
      significado:
        'tiempo verbal que habla de acciones que se estaban llevando a cabo en cierto momento del pasado. ',
    },
    {
      termino: '<em>Reported speech</em> / Discurso indirecto',
      significado:
        'forma de contar lo que ha dicho alguien sin emplear las palabras exactas pronunciadas por esa persona.',
    },
    {
      termino: '<em>Spelling</em> / Ortografía',
      significado: 'es el orden correcto de las letras en una palabra.',
    },
  ],
  referencias: [
    {
      referencia:
        'British Council. (s. f.). Past continuous. British Council LearnEnglish.',
      link:
        'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-continuous',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.). Past continuous (I was working). Cambridge Dictionary',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/past-continuous-i-was-working',
    },
    {
      referencia:
        'Collins. (s. f.). Definición de until. Diccionario de inglés.',
      link: 'https://www.collinsdictionary.com/es/diccionario/ingles/until',
    },
    {
      referencia:
        'Collins. (s. f.). Definition of &#39adverb&#39. English Dictionary. ',
      link: 'https://www.collinsdictionary.com/dictionary/english/adverb',
    },
    {
      referencia:
        'Collins. (s. f.). When do you use the past continuous tense in English? - Easy Learning Grammar. Gramática. ',
      link:
        'https://grammar.collinsdictionary.com/es/gramatica-de-aprendizaje/when-do-you-use-the-past-continuous-tense-in-english',
    },
    {
      referencia:
        'Herrera, P. (2021). Aprende y usa el past continuous del inglés como un experto. British Council Colombia. ',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/past-continuous',
    },
    {
      referencia:
        'Macmillan Education Limited. (s. f.). When. Definitions and synonyms. Macmillan Dictionary.  ',
      link:
        'https://www.macmillandictionary.com/dictionary/british/when#:~:text=When%20can%20be%20used%20in,when%20these%20houses%20were%20built%3F',
    },
    {
      referencia:
        'Macmillan Education Limited. (s. f.). Whenever. Definitions and synonyms. Macmillan Dictionary.',
      link: 'https://www.macmillandictionary.com/dictionary/british/whenever',
    },
    {
      referencia:
        'Wilding, A. (2020). El "reported speech" en inglés. British Council Colombia.  ',
      link: 'https://www.britishcouncil.es/blog/reported-speech-english',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo        ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
