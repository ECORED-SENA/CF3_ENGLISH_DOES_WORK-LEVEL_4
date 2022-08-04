<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Reported speech</em> (Discurso indirecto)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/c11.png', alt='Texto que describa la imagen')
      .col-lg-8
        .contenedor-traductor.mb-5
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic The reported speech is widely used in English when talking about things that have been said by other people. depending on the way we want to express it, reported speech or direct quotation. Direct quotation is used specially for specific information from a book or an author. Reported speech is used in order to show in a more natural way in everyday speech.
                br
                br
                |There are some important aspects that have to be taken into account when reporting:      
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p El discurso indirecto se usa mucho en inglés cuando se habla de cosas que han dicho otras personas. Según la forma en que queramos expresarlo, discurso indirecto o cita directa. La cita directa se utiliza especialmente para información específica de un libro o un autor. El discurso indirecto se utiliza para mostrarse de una manera más natural en el habla cotidiana.
              br
              br
              |Se invita a explorar el video que se presenta a continuación:
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/K3B4LsxubB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Existen algunos aspectos importantes que deben tenerse en cuenta al informar:
    .row.justify-content-center
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/12.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4
              h4
                span.r-1  We have to report based on the tense the message was said.
              p.fw-bold.text-white Hay que informar según el tiempo en que se dijo el mensaje.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3
      span
        span.r-4.fst-italic Speech 
        | / Discurso
    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table.tabla-2
            tr
              th(style=' background-color: #ffe891; border-radius: 10px 0px 0px 0px') 
                h5.mb-0 
                  span.r-4.fst-italic Speech 
                  | / Discurso
              th(style=' background-color: #d5d6f0 ; border-radius: 0px 10px 0px 0px') 
                h5.mb-0 
                  span.r-4.fst-italic Report 
                  | / Informe
                
            tbody
              tr
                td 
                  span.r-3.fst-italic.fw-normal.ms-3.mb-4 Verb to be in present: 
                  TarjetaAudio.color-acento-botones.bg-white.my-3(
                    texto="I am tired."
                    :audio="require('@/assets//audios/tema3/1.mp3')"
                  )
                td 
                  span.r-3.fst-italic.fw-normal.ms-3.mb-4 Verb to be in past: 
                  TarjetaAudio.color-acento-botones.bg-white.my-3(
                    texto="He said he was tired."
                    :audio="require('@/assets//audios/tema3/2.mp3')"
                  )
              tr
                td 
                  span.r-3.fst-italic.fw-normal.ms-3.mb-4 Present Simple:
                  TarjetaAudio.color-acento-botones.bg-white.my-3(
                    texto="I play soccer."
                    :audio="require('@/assets//audios/tema3/3.mp3')"
                  )
                td 
                  span.r-3.fst-italic.fw-normal.ms-3.mb-4 Simple Past:
                  TarjetaAudio.color-acento-botones.bg-white.my-3(
                    texto="He said he played soccer."
                    :audio="require('@/assets//audios/tema3/4.mp3')"
                  )
              tr
                td 
                  span.r-3.fst-italic.fw-normal.ms-3.mb-4 Present continuous:
                  TarjetaAudio.color-acento-botones.bg-white.my-3(
                    texto="I am working hard."
                    :audio="require('@/assets//audios/tema3/5.mp3')"
                  )
                td 
                  span.r-3.fst-italic.fw-normal.ms-3.mb-4 Past Continuous: 
                  TarjetaAudio.color-acento-botones.bg-white.my-3(
                    texto="He said he was working hard."
                    :audio="require('@/assets//audios/tema3/6.mp3')"
                  )
    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 <em>3.1. Past simple</em> (Pasado simple)
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/c12.png', alt='')
      .col-lg-7
        .contenedor-traductor.mb-5
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic To report items originally written or said in the simple present, the message must be shown in the form of the simple past. If the original message is with the verb "to be" in present (am / is / are), the report will be made with the verb “to be” in past (was / were). If the original message is with another verb than the verb “to be”, it must be reported in the past simple using the rules for regular and irregular verbs in English.    
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp2}")
            p Para reportar elementos escritos o dichos originalmente en presente simple se debe mostrar el mensaje en forma de pasado simple. En caso de que el mensaje original sea con el verbo “to be” en presente (am / is / are), el reporte se hará con el verbo “to be” en pasado (was / were). Si el mensaje original es con un verbo diferente al verbo “to be”, se deberá reportar en pasado simple, utilizando las reglas de los verbos regulares e irregulares en inglés.
          a.boton-traduccion(@click='ocultarEsp2 = !ocultarEsp2') Ver traducción
    p.mb-5(data-aos='fade-right') Por ejemplo: 
    img(src='@/assets/curso/temas/13.svg', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.2. <em>Past progressive</em> (Pasado progresivo)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/14.png', alt='Texto que describa la imagen')
      .col-lg-8
        .contenedor-traductor.mb-5
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic To report messages that were originally said or written in the present progressive tense, it is necessary to use the past progressive. There will be no change in the main verb since it will remain in its present participle form with the ending “-ing”, but the auxiliary will change from being the verb “to be” in the present (am / is / are) to the verb “to be” in the past tense (was/were). 
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp3}")
            p Para reportar mensajes que han sido dichos o escritos originalmente en el tiempo presente progresivo, es necesario utilizar el pasado progresivo. No habrá ningún cambio en el verbo principal, ya que se mantendrá en su forma de participio presente, con la terminación “-ing”, pero el auxiliar pasará de ser el verbo <em>“to be”</em> en presente <em>(am/is/are)</em> al verbo <em>“to be”</em> en pasado <em>(was/were)</em>.
          a.boton-traduccion(@click='ocultarEsp3 = !ocultarEsp3') Ver traducción
    p.mb-5(data-aos='fade-right') Veamos algunos ejemplos:
    .row.justify-content-center.mb-5
      .col-lg-8
        img(src='@/assets/curso/temas/15.svg', alt='')
    p.mb-5(data-aos='fade-right') Ahora, se presentan otros aspectos importantes utilizados en el discurso indirecto:\
    .row.justify-content-center.mb-5
      .col-lg-6
        div(style='background-color: #ff5f65').p-4
          h5.fst-italic.text-center.mb-0 Use of demonstratives has to be according to tenses:
        div(style='background-color: #e1e8ff').p-4
          div(style='background-color: #ffd947').p-3.d-inline-block.mb-3
            h6.mb-0.me-4 Speech
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/16.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="David: “I live in this house.”"
                :audio="require('@/assets//audios/tema3/7.mp3')"
              )
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h6.mb-0.me-4.text-white Report
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/17.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="David said he lived in that house."
                :audio="require('@/assets//audios/tema3/8.mp3')"
              )
          div(style='background-color: #ffd947').p-3.d-inline-block.mb-3
            h6.mb-0.me-4 Speech
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/18.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="George: “I know these people.”"
                :audio="require('@/assets//audios/tema3/9.mp3')"
              )
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h6.mb-0.me-4.text-white Report
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/19.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="George said he knew those people."
                :audio="require('@/assets//audios/tema3/10.mp3')"
              )
      .col-lg-6
        div(style='background-color: #3c3fa7').p-4
          h5.fst-italic.text-center.mb-0.text-white Use different expressions in order to report:
        div.tarjeta-scroll(style='background-color: #e1e8ff').p-4
          p(data-aos='fade-right')
            span.r-3.fst-italic.fw-normal Said (that): For affirmative and negative sentences you can use just "said" or also "said that".
          div(style='background-color: #ffd947').p-3.d-inline-block.mb-3
            h6.mb-0.me-4 Speech
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/20.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="Daniel: “I sell cars”."
                :audio="require('@/assets//audios/tema3/11.mp3')"
              )
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h6.mb-0.me-4.text-white Report
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/21.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="Daniel said he sold cars. / Daniel said that he sold cars."
                :audio="require('@/assets//audios/tema3/12.mp3')"
              )
          h5.fst-italic.mb-3
            span.r-3 Asked if: For questions.
          div(style='background-color: #ffd947').p-3.d-inline-block.mb-3
            h6.mb-0.me-4 Speech
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/22.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="Sara: “Do you clean the door?”"
                :audio="require('@/assets//audios/tema3/13.mp3')"
              )
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h6.mb-0.me-4.text-white Report
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/23.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="Sara asked if you cleaned the door."
                :audio="require('@/assets//audios/tema3/14.mp3')"
              )
          h5.fst-italic.mb-3
            span.r-3 Told someone to: For imperative sentences.
          div(style='background-color: #ffd947').p-3.d-inline-block.mb-3
            h6.mb-0.me-4 Speech
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/24.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="Manuel: “Call Sara!”"
                :audio="require('@/assets//audios/tema3/15.mp3')"
              )
          div(style='background-color: #6b8dff').p-3.d-inline-block.mb-3
            h6.mb-0.me-4.text-white Report
          .row.justify-content-center.mb-5
            .col-lg-3
              img(src='@/assets/curso/temas/25.svg', alt='')
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.my-3(
                texto="Manuel told me to call Sara."
                :audio="require('@/assets//audios/tema3/16.mp3')"
              )
    p.mb-5(data-aos='fade-right') A continuación, escuche el siguiente diálogo, en el cual se aplica lo estudiado en el tema.    
    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Past simple - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    ocultarEsp: true, // variables de vue
    ocultarEsp2: true, // variables de vue
    ocultarEsp3: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Pedro',
          img: require('@/assets/curso/temas/Pedro.png'),
        },
        {
          nombre: 'Clara',
          img: require('@/assets/curso/temas/Clara.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Pedro',
          textoIng:
            'Clara, I missed biology class on Monday. What did the teacher *** about the final project?',
          textoEsp: '',
          audio: require('@/assets/audios/a3/a1.wav'),
          palabra: 'say',
        },
        {
          personaje: 'Clara',
          textoIng:
            'He *** he liked most of the essays and that he was choosing the best ones for the science fair.',
          textoEsp: '',
          audio: require('@/assets/audios/a3/a2.wav'),
          palabra: 'said',
        },
        {
          personaje: 'Pedro',
          textoIng: 'Really? I&#39m so nervous. Do you think he *** ours?',
          textoEsp: '',
          audio: require('@/assets/audios/a3/a3.wav'),
          palabra: 'liked',
        },
        {
          personaje: 'Clara',
          textoIng: 'He hasn&#39t *** anything about it. We will have to wait.',
          textoEsp: '',
          audio: require('@/assets/audios/a3/a4.wav'),
          palabra: 'said',
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
.tarjeta-bg
  background-repeat: no repeat
  background-size: cover
  background-position: center
.contenedor-audios-iconos
  position: relative
  .icono1
    position: absolute
    width: 312px
    top: -20px
    left: 20px
  .icono2
    position: absolute
    bottom: -20px
    right: 20px
.tabla-2
  th, td
    border: 2px solid $color-acento-contenido
    border-radius: 10px !important
.tarjeta-scroll
  overflow-y: scroll
  height: 976px
</style>
