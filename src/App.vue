<template>
    <div id="wrapper">
        <Navbar />
        <router-view />
    </div>
    <Footer />
</template>

<script>
import Navbar from "./components/core/Navbar";
import Footer from "./components/core/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      clicks: 0
    };
  }
}
</script>

<style>
#app, html, body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#wrapper {
  flex: 1;
}
</style>