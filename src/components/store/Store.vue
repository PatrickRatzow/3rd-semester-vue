<template>
  <article class="box is-flex">
    <div class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="image" />
        </figure>
      </div>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ address }}, {{ city }}</strong>
          <br>
          {{ description }}
        </p>
      </div>
    </div>
  
  </article>
</template>

<script>
  export default {
    props: {
      city: String,
      address: String,
      image: String,
      description: String
    }
  }
</script>
