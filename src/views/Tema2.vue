<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Adverbs of time for the past tense</em> (Adverbios de tiempo para el pasado)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/11.png', alt='Texto que describa la imagen')
      .col-lg-8
        .contenedor-traductor.mb-5
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic Adverbs of time are words used to modify a complete sentence, a verb, another adverb, or an adjective, and they tell us when an action happened, but they can also tell us for how long and how often. Adverbs of time are invariable (they do not change according to gender or number, that is, they have neither masculine nor feminine, neither singular nor plural) and are extremely common in the English language.        
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Los adverbios de tiempo son palabras que sirven para modificar una oración completa, un verbo, otro adverbio o un adjetivo, y nos dicen cuándo sucedió una acción, pero también pueden decirnos por cuánto tiempo y con qué frecuencia. Los adverbios de tiempo son invariables (no cambian según género o número, o sea, no tienen ni masculino ni femenino, ni singular ni plural) y son extremadamente comunes en el idioma inglés.
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
    p.mb-5(data-aos='fade-right') A continuación, podemos observar, en la siguiente tabla, los adverbios de tiempo y su uso en el idioma inglés.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2
      span.r-4.fst-italic Adverbs of time 
    .tabla-a.color-acento-botones.mb-5
      table.tabla-1
        tr
          th(style='background-color: #e1e8ff') 
            span.r-4.fst-italic Adverbs of time <br>
            span.fw-bold Adverbios de tiempo
            
          th(style='background-color: #c4d1ff')
            span.r-4.fst-italic Function
            span.fw-bold /Función
          th(style='background-color: #ffe891')
            span.r-4.fst-italic Example sentence
            span.fw-bold /Oración de ejemplo
        tbody
          tr
            td.text-center
              span.r-4.fst-italic When
            td
              span.r-4.fst-italic Used for talking about a particular time or situation.
              br
              br
              p Se utiliza para hablar de un momento o situación en particular.
            td
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="It is impossible to predict when it will happen."
                :audio="require('@/assets//audios/tema1/1.mp3')"
              )
          tr
            td.text-center
              span.r-4.fst-italic Whenever
            td
              span.r-4.fst-italic It makes reference to “any time or any situation when something may be wanted, needed, possible”, etc.
              br
              br
              p Hace referencia a "cualquier momento o cualquier situación en que algo pueda ser querido, necesario, posible", etc.
            td
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="Sandra can come here whenever she wants."
                :audio="require('@/assets//audios/tema1/2.mp3')"
              )
          tr
            td.text-center
              span.r-4.fst-italic Before
            td
              span.r-4.fst-italic It makes reference to “a previous occasion”.
              br
              br
              p Hace referencia a “una ocasión anterior”.
            td
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="Sandra can come here whenever she wants."
                :audio="require('@/assets//audios/tema1/3.mp3')"
              )
          tr
            td.text-center
              span.r-4.fst-italic After
            td
              span.r-4.fst-italic It makes reference to “a later time, afterwards, behind in time, later, next”, etc.
              br
              br
              p Hace referencia a “un momento posterior, después, atrasado en el tiempo, más tarde, próximo”, etc.
            td
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="I washed the dishes after dinner."
                :audio="require('@/assets//audios/tema1/4.mp3')"
              )
          tr
            td.text-center
              span.r-4.fst-italic As
            td
              span.r-4.fst-italic To indicate that something happens “at the same time that, while, when”.
              br
              br
              p Para indicar que algo sucede “al mismo tiempo que, mientras, cuando”.
            td
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="It started snowing as he was leaving his house."
                :audio="require('@/assets//audios/tema1/5.mp3')"
              )
          tr
            td.text-center
              span.r-4.fst-italic Until
            td
              span.r-4.fst-italic It refers to “up to (a time) that, the moment in time after which the rest of your statement becomes true.”
              br
              br
              p Se refiere a “hasta (un tiempo) que, el momento en el tiempo después del cual el resto de su declaración se vuelve verdadera”.
            td
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="The plane does not leave until ten o'clock."
                :audio="require('@/assets//audios/tema1/6.mp3')"
              )
          tr
            td.text-center
              span.r-4.fst-italic Since
            td
              span.r-4.fst-italic It makes reference to “from then until now, at some or any time between then and now; subsequently”.
              br
              br
              p Hace referencia a “desde entonces hasta ahora, en algún momento o en cualquier momento entre entonces y ahora; después".
            td
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="The plane does not leave until ten o'clock."
                :audio="require('@/assets//audios/tema1/7.mp3')"
              )
    p.mb-5(data-aos='fade-right') A continuación, escuche el siguiente diálogo, en el cual se aplica lo estudiado en el tema.
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Adverbs of time for the past tense - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ocultarEsp: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Lucia',
          img: require('@/assets/curso/temas/lucia.png'),
        },
        {
          nombre: 'Rodrigo',
          img: require('@/assets/curso/temas/rodrigo.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Lucia',
          textoIng: 'Rodrigo, did you learn how to dance *** highschool?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'before',
        },
        {
          personaje: 'Rodrigo',
          textoIng: 'No, I learned to dance *** highschool',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'until',
        },
        {
          personaje: 'Lucia',
          textoIng: 'You have to be kidding me. All those latin dances?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Rodrigo',
          textoIng:
            'For sure! I was enjoying dancing as a hobby *** I got to know singing.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: '',
        },
        {
          personaje: 'Lucia',
          textoIng: 'So, now you sing?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Rodrigo',
          textoIng: 'Yes. And I&#39m getting good at it!',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
      ],
    },
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

<style lang="sass">
.tabs-b__tab--active, .tabs-b__tab--active:hover
  background-color: #fff7da
.tabla-1
  th, td
    border: 2px solid #3c3fa7
</style>
