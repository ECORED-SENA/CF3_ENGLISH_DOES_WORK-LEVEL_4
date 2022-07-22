<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Para hablar de situaciones del pasado, se tienen varios recursos, varios tiempos verbales, y por ende, se tiene que aprender en qué se diferencian y cómo usarlos. En el componente anterior, se vio el tiempo pasado simple, que ayuda a la hora de exponer un hecho que ocurrió en el pasado, algo que pasó y que se asume que tuvo fin antes o durante ese momento del que se habla. Este componente trae el pasado progresivo, el cual ayuda a exponer un hecho que estaba en proceso en ese punto del paso del cual se hace referencia y después siguió ocurriendo, algo que estaba pasando. Para apoyar este tema, se va a hacer énfasis en la forma correcta de escribir los verbos en su forma de participio presente, que tienen terminación en “-ing”, y son necesarios para formar oraciones en este tiempo verbal; se estudiará vocabulario como adverbios de tiempo y “rutinas laborales y sociales” para hablar del pasado, y se mostrará cómo usar el discurso indirecto (o <em>reported speech</em>) para informar lo que otras personas dijeron antes. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5ui0hQMXZcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/introduction.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Guion video Introducción
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
