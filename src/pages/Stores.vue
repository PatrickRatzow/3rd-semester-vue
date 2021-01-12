<template>
  <section>
    <div class="container is-flex-mobile is-justify-content-center pt-4 pb-5">
      <div class="is-align-items-center is-flex-direction-column">
        <h1 class="title has-text-centered">Stores</h1>
        <h2 class="subtitle has-text-centered">{{ storeSubtitle }}</h2>

        <Store v-for="store in stores"
          id="store"
          :key="store.id"
          :image="store.image"
          :city="store.city"
          :address="store.address"
          :description="store.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Store from "../components/store/Store";

  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.";
  export default {
    components: {
      Store
    },
    data() {
      return {
        stores: [
          { id: 1, description, image: "dist/images/store.png", city: "Aalborg", address: "Sofiendalsvej 60" },
          { id: 2, description, image: "dist/images/store.png", city: "Århus", address: "Hovedbanegården 10" },
          { id: 3, description, image: "dist/images/store.png", city: "Århus", address: "Århusgade 25" }
        ]
      }
    },
    computed: {
      storeSubtitle() {
        const amt = this.stores.length;

        return amt == 1 ? `${amt} store` : `${amt} stores`;
      }
    }
  }
</script>

<style scoped>
  #store {
    min-width: 50vw;
  }

  @media screen and (max-width: 1023px) {
    section {
      padding-left: 1em !important;
      padding-right: 1em !important;
    }
  }
</style>