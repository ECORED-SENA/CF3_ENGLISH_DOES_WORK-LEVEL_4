<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Let's talk about the work and social routines I used to have</em> (Hablemos de las rutinas laborales y sociales que solía tener)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/26.png', alt='Texto que describa la imagen')
      .col-lg-8
        .contenedor-traductor.mb-5
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic When talking about the past, it is important to have vocabulary related to the most common activities in our lives years ago. Work and social routines are those topics that we need to know in order to have an everyday conversation about the old times.      
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Cuando se habla del pasado, es importante disponer de vocabulario relacionado con las actividades más comunes de nuestra vida años atrás. El trabajo y las rutinas sociales son los temas que debemos conocer para mantener una conversación cotidiana sobre los viejos tiempos.
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
    p.mb-5(data-aos='fade-right') Observe y escuche vocabulario de algunos trabajos y rutinas sociales:
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/27.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/1.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Make copies

            br
            | Sacar fotocopias
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/28.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/2.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Write letters

            br
            | Escribir cartas
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/29.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/3.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Send messages

            br
            |  Enviar mensajes
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/30.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/4.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Attend meetings

            br
            |  Asistir a reuniones
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/31.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/5.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Write reports

            br
            | Escribir reportes
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/32.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/6.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Fill in surveys

            br
            | Llenar encuestas
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/33.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/7.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Make breakfast

            br
            | Hacer desayuno
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/34.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/8.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Read the newspaper

            br
            | Leer el periódico
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/35.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/9.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Deliver newspaper

            br
            | Entregar periódicos
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/36.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/10.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Go to the library

            br
            | Ir a la biblioteca
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/37.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/11.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Mow the grass

            br
            | Cortar el césped, cortar el pasto
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/38.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/12.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Milk cows

            br
            | Ordeñar vacas
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/39.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/13.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Go to the movies

            br
            | Ir al cine
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/40.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/14.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Dine out

            br
            |Cenar fuera, salir a cenar
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/41.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/15.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Play a football match

            br
            | Jugar un partido de fútbol
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/42.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/16.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Go to school 

            br
            | Ir a la escuela, ir al colegio
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/43.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/17.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Have classes

            br
            | Tener clases
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/44.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/18.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Have a drink 

            br
            | Tomar una copa, tomar una bebida, tomar un trago
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/45.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/19.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Meet with friends

            br
            | Reunirse con amigos
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/46.jpg')})`}" style='height: 380px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema1/20.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Have a family meal

            br
            | Comer en familia, tener una comida familiar





    Dialogo.color-acento-contenido(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Let's talk about the work and social routines I used to have - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    ocultarEsp: true, // variables de vue
    ocultarEsp2: true, // variables de vue
    ocultarEsp3: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Christian',
          img: require('@/assets/curso/temas/Christian.png'),
        },
        {
          nombre: 'Aura',
          img: require('@/assets/curso/temas/Aura.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Christian',
          textoIng: 'How was your Sunday family ***?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'meal',
        },
        {
          personaje: 'Aura',
          textoIng: 'It was great.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Christian',
          textoIng:
            'I believe you. You were laughing a lot when I passed by your ***.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'house',
        },
        {
          personaje: 'Aura',
          textoIng: 'Yes, my father was making a lot of ***.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'jokes',
        },
        {
          personaje: 'Christian',
          textoIng: 'He is very funny, I could tell.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Aura',
          textoIng: 'Were you walking your dog when you *** me?',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
          palabra: 'saw',
        },
        {
          personaje: 'Christian',
          textoIng: 'No, I was just jogging.',
          textoEsp: '',
          audio: require('@/assets/audios/tema1/1.mp3'),
        },
        {
          personaje: 'Aura',
          textoIng: 'Oh, nice.',
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
