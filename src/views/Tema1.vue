<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Verb To be in the past tense (Verbo To be en pasado)
    .contenedor-traductor.mb-5
      .contenedor-traductor__eng
        p
          span.r-3.fst-italic The past progressive is defined as the verb tense that tells us about past situations that were in process and are not considered finished at the moment in the past to which we refer. The key to recognizing the past progressive tense is that the main verb of the sentence has the ending "-ing" ("-ando" or "-endo", in Spanish) and is accompanied by the auxiliary verbs "was" or "were".
            br
            br
            |Next we will see cases in which the past progressive tense is used:   
      .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
        p El pasado progresivo se define como el tiempo verbal que nos habla de situaciones del pasado que estaban en proceso y no se dan por terminadas en el momento del pasado al cual se hace referencia. La clave para reconocer el tiempo pasado progresivo es que el verbo principal de la oración tiene la terminación "-ing"  ("-ando" o "-endo", en español) y se encuentra acompañado de los verbos auxiliares "was" o "were". 
          br
          br
          |A continuación, verá casos en los que se usa el tiempo pasado progresivo:
      a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción 
    br
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-amarilla ")
      .row(titulo="<span class= r-4 ><em>Events in progress at a specific time </em></span> / Eventos en progreso en un momento específico ").px-5
        .col-md-3
          img.rounded-3(src='@/assets/curso/temas/0.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.fst-italic
            span.r-4 To talk about events that were happening or in progress at a particular time in the past (starting before and ending after the time in question). It is usually used with an expression of time: 6 p.m., yesterday, last night, etc.
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto="I was doing homework at 5:00 p.m."
            :audio="require('@/assets//audios/tema1/1.mp3')"
          )
      .row(titulo="<span class= r-4 fst-italic><em>When an action is interrupted by anothe</em></span> / Cuando una acción es interrumpida por otra ").px-5
        .col-md-3
          img.rounded-3(src='@/assets/curso/temas/1.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.fst-italic
            span.r-4 To talk about an action that was interrupted. For that other action or event that interrupts the action stated in the past progressive, we use the simple past tense.
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto="He was skating when he fell."
            :audio="require('@/assets//audios/tema1/2.mp3')"
          )
      .row(titulo="<span class= r-4 fst-italic><em>When two or more situations occur at the same time</em></span> / Cuando dos o más situaciones ocurren al mismo tiempo").px-5
        .col-md-3
          img.rounded-3(src='@/assets/curso/temas/2.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.fst-italic
            span.r-4 To talk about two or more events that were happening or in progress at a particular time in the past, at the same time.
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto="While they were studying we were playing soccer."
            :audio="require('@/assets//audios/tema1/3.mp3')"
          )
      .row(titulo="<span class= r-4 fst-italic><em>When we add context or emphasis to a certain action</em></span> / Cuando se da contexto o énfasis a una determinada acción").px-5
        .col-md-3
          img.rounded-3(src='@/assets/curso/temas/3.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.fst-italic
            span.r-4 We often use the past continuous to give a reason or context for an event.
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto="I didn't go to the party last weekend, I was studying for my exams."
            :audio="require('@/assets//audios/tema1/4.mp3')"
          )
      .row(titulo="<span class= r-4 fst-italic><em>For “background events”</em></span> / Para “eventos de fondo”").px-5
        .col-md-3
          img.rounded-3(src='@/assets/curso/temas/4.jpg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.fst-italic
            span.r-4 When one action or event is more important than another in the past, we can use the past progressive for the background event (the less important event) and past simple for the main event.
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto="Diana was watering her neighbor's plants while he was on vacation."
            :audio="require('@/assets//audios/tema1/5.mp3')"
          )
    p.mb-5(data-aos='fade-right')
      span.r-4.fst-italic.fw-bold For the past progressive tense, the verb "to be" is used, conjugated in the simple past, as an auxiliary. Let's remember how to conjugate it:
      br
      br
      |Para el tiempo pasado progresivo, se hace uso del verbo 
      span.r-4.fst-italic.fw-bold "to be"
      | , conjugado en pasado simple, como auxiliar. Recordemos cómo conjugarlo:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1
      span.r-4.fst-italic Verb “to be” as an auxiliary
    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5
          table.tb-edit
            tr
              th(colspan='3').p-0
                img(src='@/assets/curso/temas/47.svg', alt='')
            tbody
              tr
                td 
                td.text-center.fw-bold Sujeto
                td(style='background-color: #fff7da').fw-bold.text-center Verb “to be” as an auxiliary
              tr
                td(rowspan='5').text-center.fw-bold Singular
                td 
                  span.r-4.fst-italic.fw-bold 1st person
                  br
                  span.fw-bold 1era persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="I was"
                  :audio="require('@/assets//audios/tema1/6.mp3')"
                  )
              tr
                td 
                  span.r-4.fst-italic.fw-bold 2nd person

                  br
                  span.fw-bold 2nda persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="you were"
                  :audio="require('@/assets//audios/tema1/7.mp3')"
                  )
              tr
                td(rowspan='3') 
                  span.r-4.fst-italic.fw-bold 3rd person
                  br
                  span.fw-bold 3era persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="he was"
                  :audio="require('@/assets//audios/tema1/8.mp3')"
                  )
              tr
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="she was"
                  :audio="require('@/assets//audios/tema1/9.mp3')"
                  )
              tr
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="it was"
                  :audio="require('@/assets//audios/tema1/10.mp3')"
                  )
              tr
                td(rowspan='3').text-center.fw-bold Plural
                td 
                  span.r-4.fst-italic.fw-bold 1st person
                  br
                  span.fw-bold 1era persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="it was"
                  :audio="require('@/assets//audios/tema1/11.mp3')"
                  )
              tr
                td 
                  span.r-4.fst-italic.fw-bold 2nd person

                  br
                  span.fw-bold 2nda persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="you were"
                  :audio="require('@/assets//audios/tema1/12.mp3')"
                  )
              tr
                td 
                  span.r-4.fst-italic.fw-bold 3rd person

                  br
                  span.fw-bold 3era persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="they were"
                  :audio="require('@/assets//audios/tema1/13.mp3')"
                  )
          
    

    Separador

    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2.fst-italic 1.1. -ing verbs (Verbos terminados en -ing)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/5.png', alt='Texto que describa la imagen')
      .col-lg-8
        .contenedor-traductor.mb-5
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic To use the progressive tenses (also called continuous), we need to use the main verbs in a verbal pattern called "present participle", a pattern that is characterized by the fact that the verb always ends in "-ing".
                br
                br
                |To write a verb ending in "-ing" we need to know the correct spelling, that is why the rules for correctly writing verbs ending in "-ing" are listed below:  
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
            p Para usar los tiempos progresivos (también llamados continuos), se necesita usar los verbos principales en un patrón verbal llamado "participio presente", patrón que se caracteriza porque siempre el verbo termina en "-ing".
              br
              br
              |Para escribir un verbo terminado en "-ing", se necesita saber la ortografía correcta, es por eso que a continuación están enunciadas las reglas para escribir correctamente verbos terminados en "-ing":
          a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2') Ver traducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XfmV4hx-D-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    .tarjeta.rounded-0.color-primario.p-5.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/cta.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 -ing verbs (Verbos terminados en -ing)
              p.text-small Presenta los textos del video anterior, tanto en inglés como en español.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/documento1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qJees-oxQ8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    .tarjeta.rounded-0.color-primario.p-5.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/cta.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 -ing verbs (Verbos terminados en -ing)
              p.text-small Presenta los textos del video anterior, tanto en inglés como en español.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/documento2.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2.fst-italic 1.2. Affirmative, negative and interrogative structures (Estructuras afirmativas, negativas e interrogativas)
    .contenedor-traductor.mb-5
      .contenedor-traductor__eng
        p
          span.r-3.fst-italic Two points that must be highlighted when structuring sentences in the past progressive are that the verb "to be" is used as an auxiliary verb to help form the sentence and also that the main verb is put in the form of a present participle. Basically, if you already know how to structure sentences in the present progressive, structuring the past progressive is going to be very easy since it is practically the same, but with the verb "to be" in the simple past.
            br
            br
            |We are going to see how these verbs interact with the rest of the words in the sentences in the past progressive.
      .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp3}")
        p Dos puntos que hay que resaltar a la hora de estructurar oraciones en pasado progresivo son que se usa el verbo "to be" como verbo auxiliar para ayudar a formar la oración y también que se pone el verbo principal en forma de participio presente. Básicamente si ya se sabe cómo estructurar oraciones en el presente progresivo, estructurar el pasado progresivo va a ser muy sencillo ya que es prácticamente lo mismo, pero con el verbo "to be" en pasado simple.
          br
          br
          |Vamos a ver cómo estos verbos interactúan con el resto de palabras en las oraciones en pasado progresivo.
      a.boton-traduccion(@click='ocultarEsp3 = !ocultarEsp3') Ver traducción
    br
    div(style='background-color: #ffe891').p-5.mb-5
      SlyderA
        .slyder.px-5.mx-4
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h5.mb-0.me-5 Affirmative / Afirmativa
          img.mb-5(src='@/assets/curso/temas/6.svg', alt='')
          .row.mb-5
            .col-lg-5
              h5
                span.r-4.fst-italic I 
                  span.f-2 was 
                  | living in Spain during the pandemic.
              h5
                span.r-4.fst-italic You 
                  span.f-2 were 
                  | drawing doodles in math class.
              h5
                span.r-4.fst-italic He 
                  span.f-2 was 
                  | playing football yesterday.
              h5
                span.r-4.fst-italic She 
                  span.f-2 was 
                  | flying in a helicopter.
            .col-lg-5
              h5
                span.r-4.fst-italic It 
                  span.f-2 was 
                  | barking very loud.
              h5
                span.r-4.fst-italic We 
                  span.f-2 were 
                  | eating ice cream the whole day.
              h5
                span.r-4.fst-italic You 
                  span.f-2 were 
                  | cooking while they were eating.
              h5
                span.r-4.fst-italic They 
                  span.f-2 were 
                  | buying coffee when the doctor called them.
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto=""
            :audio="require('@/assets//audios/tema1/14.mp3')"
          )
        .slyder.px-5.mx-4
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h5.mb-0.me-5 Negative / Negativa
          img.mb-5(src='@/assets/curso/temas/7.svg', alt='')
          .row.mb-5
            .col-lg-5
              h5
                span.r-4.fst-italic I 
                  span.f-2 was not 
                  |  living in Spain.
              h5
                span.r-4.fst-italic You 
                  span.f-2 were not 
                  |  drawing doodles.
              h5
                span.r-4.fst-italic He 
                  span.f-2 wasn’t  
                  |  playing football.
            .col-lg-5
              h5
                span.r-4.fst-italic It 
                  span.f-2 wasn´t 
                  | barking very loud.
              h5
                span.r-4.fst-italic We 
                  span.f-2 weren’t 
                  | eating ice cream.
              h5
                span.r-4.fst-italic You 
                  span.f-2 were not
                  | cooking lasagna.
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto=""
            :audio="require('@/assets//audios/tema1/15.mp3')"
          )
        .slyder.px-5.mx-4
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h5.mb-0.me-5 “Yes” or “No” Questions / Preguntas de “Sí” o “No”
          img.mb-5(src='@/assets/curso/temas/8.svg', alt='')
          .row.mb-5
            .col-lg-5
              h5
                span.r-4.fst-italic 
                  span.f-2 Was 
                  | i living in Spain? 
              h5
                span.r-4.fst-italic 
                  span.f-2 Were 
                  | you drawing doodles?
              h5
                span.r-4.fst-italic 
                  span.f-2 Was 
                  | he playing football?
              h5
                span.r-4.fst-italic 
                  span.f-2 Was 
                  | she flying in a helicopter?
            .col-lg-5
              h5
                span.r-4.fst-italic 
                  span.f-2 Was 
                  | it barking very loud?
              h5
                span.r-4.fst-italic 
                  span.f-2 Were 
                  | we eating ice cream?
              h5
                span.r-4.fst-italic 
                  span.f-2 Were 
                  | you cooking lasagna?
              h5
                span.r-4.fst-italic 
                  span.f-2 Were 
                  | they buying coffee?
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto=""
            :audio="require('@/assets//audios/tema1/16.mp3')"
          )
        .slyder.px-5.mx-4
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h5.mb-0.me-5 Information Questions / Preguntas de información
          img.mb-5(src='@/assets/curso/temas/9.svg', alt='')
          .row.mb-5.align-items-center
            .col-lg-3.lg-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.svg', alt='')
            .col-lg-4
              h5
                span.r-4.fst-italic 
                  span.f-2 When was 
                  | i living in Spain?
              h5
                span.r-4.fst-italic 
                  span.f-2 What were 
                  | you drawing?
              h5
                span.r-4.fst-italic 
                  span.f-2 Why was 
                  | he playing football yesterday?
              h5
                span.r-4.fst-italic 
                  span.f-2 How far was 
                  | she flying in a helicopter?
            .col-lg-5
              h5
                span.r-4.fst-italic 
                  span.f-2 How was 
                  | it barking so loud?
              h5
                span.r-4.fst-italic 
                  span.f-2 Why were 
                  | we eating the whole cake?
              h5
                span.r-4.fst-italic 
                  span.f-2 What time were 
                  | you cooking lasagna last night?
              h5
                span.r-4.fst-italic 
                  span.f-2 Where were 
                  | they buying a house a year ago?
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto=""
            :audio="require('@/assets//audios/tema1/17.mp3')"
          )
    .row.justify-content-center.mb-5
      .col-lg-6
        .contenedor-franja.h-100
          .franja(style= 'height: 90%')
          .contenido.px-4
            .row.justify-content-center.mb-5
              .col-lg-2.col-8.mb-lg-0.mb-3
                img(src='@/assets/curso/temas/warning.svg', alt='')
              .col-lg-10
                h5.mb-5
                  span.r-4 Warning #1
                  br
                  | Advertencia #1
                p.mb-5 
                  span.r-1.fw-normal.fst-italic Both "was not" and its contraction "wasn't" are correct, the same with "were not" and its contraction "weren't". But keep in mind that for formal contexts it is not recommended to use contractions.

                  br
                  br
                  span.text-white Tanto 
                    span.r-1.fst-italic "was not" 
                    | como su contracción 
                    span.r-1.fst-italic "wasn't" 
                    | son correctos, lo mismo con "were not" y su contracción 
                    span.r-1.fst-italic "weren't". 
                    | Pero hay que tener en cuenta que para contextos formales no se recomienda usar contracciones.
      .col-lg-6
        .contenedor-franja.h-100
          .franja(style= 'height: 90%')
          .contenido.px-4
            .row.justify-content-center.mb-5
              .col-lg-2.col-8.mb-lg-0.mb-3
                img(src='@/assets/curso/temas/warning.svg', alt='')
              .col-lg-10
                h5.mb-5
                  span.r-4 Warning #2
                  br
                  | Advertencia #2
                p.mb-5 
                  span.r-1.fw-normal.fst-italic In the Spanish language, the structure of affirmative sentences and questions is generally the same, the only thing that changes is the intonation in which they are pronounced; but in English sentence structure and word order do change and you should be very aware of it.
                  br
                  br
                  span.text-white En el idioma español generalmente la estructura de las oraciones afirmativas y las preguntas es la misma, lo único que cambia es la entonación con la que se pronuncian; pero en inglés la estructura de la oración y el orden de las palabras sí cambian y se debe estar muy consciente de ello.
    p.mb-5(data-aos='fade-right') A continuación, escuche el siguiente diálogo, en el cual se aplica lo estudiado en el tema.
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Affirmative, negative and interrogative structures - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.























</template>

<script>
import Dialogochat from '@/components/DialogoChat.vue'
export default {
  name: 'Tema1',
  components: {
    Dialogochat,
  },
  data: () => ({
    ocultarEsp: true,
    ocultarEsp2: true,
    ocultarEsp3: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Olga',
          img: require('@/assets/curso/temas/olga.png'),
        },
        {
          nombre: 'Mario',
          img: require('@/assets/curso/temas/mario.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Olga',
          textoIng: 'What were you *** at nine o&#39clock yesterday?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'doing',
        },
        {
          personaje: 'Mario',
          textoIng: 'I was *** t.v.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'watching',
        },
        {
          personaje: 'Olga',
          textoIng: 'What t.v. show were you ***?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'watching',
        },
        {
          personaje: 'Mario',
          textoIng: 'I was watching "Friends", again.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Olga',
          textoIng: ' Really? Is that show still aired? What time was it ***?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'playing',
        },
        {
          personaje: 'Mario',
          textoIng: 'I was watching it from nine to nine past thirty p.m.',
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
.tb-edit
  th,td,tr
    border: 2px solid $color-secundario !important
.card-was
  .scroll
    overflow: scroll
    overflow-x: hidden

  &__title
    background-color: $color-acento-botones
    h2
      color: $color-acento-contenido
    text-align: center
  &__content
    background-color: #e1e8ff
    max-height: 640px
.contenedor-vs
  position: relative
  &__icon
    position: absolute
    left: 48%
    top: 0
    translate: translateX(-50%)
.contenedor-degrade
  background: linear-gradient(180deg, rgba(255,240,181,1) 0%, rgba(9,9,121,0) 30%, rgba(9,9,121,0) 70%, rgba(255,240,181,1) 100%)
.dialogo-verde
  .tarjeta-audio.color-acento-botones,
    border-color: #01ac57 !important
  .audio__btn
    background-color: #01ac57 !important
  .tarjeta-audio__texto
    color: #01ac57 !important
.tarjeta-amarilla
  background-color: #fff7da
.acordion__activo
  background-color: #fff0b5 !important
</style>
