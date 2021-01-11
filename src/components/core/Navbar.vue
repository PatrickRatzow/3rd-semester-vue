<template>
  <nav class="navbar has-shadow" v-bind:class="{ 
      'front-page': $route.path == '/',
      'navbar-scrolled-up': hasScrolled 
    }" 
       role="navigation" aria-label="main navigation">
      <div class="container">
          <div class="navbar-brand">
              <router-link to="/" class="navbar-item">
                  <img src="https://www.ucn.dk/Files/Templates/Designs/ucn2015/img/ucnlogo.svg" width="75">
              </router-link>
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>

          <div id="navbar" class="navbar-menu is-spaced">
              <div class="navbar-start">
                  <router-link to="/" class="navbar-item">Home</router-link>
                  <router-link to="/stores" class="navbar-item">Stores</router-link>
                  <router-link to="/services" class="navbar-item">Services</router-link>
              </div>

              <div class="navbar-end">
                  <div class="navbar-item">
                      <div class="buttons">
                          <a class="button is-info">
                              Sign Up
                          </a>
                          <a class="button is-dark is-outlined">
                              Log in
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            hasScrolled: false
        }
    },
    methods: {
        setupNavbarBurger() {
            const navbarBurger = document.querySelectorAll('.navbar-burger')[0]
            if (navbarBurger === undefined)
                return;

            navbarBurger.addEventListener("click", () => {
                const target = navbarBurger.dataset.target;
                const targetNode = document.getElementById(target);
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                navbarBurger.classList.toggle('is-active');
                targetNode.classList.toggle('is-active');
            })
        },
        hideNavbarShadowOnFrontpage() {
            console.log(this.$route.path);
            if (this.$route.path === "/") {
                this.$el.classList.remove("has-shadow");
            }

            window.onscroll = () => {
                if (!this.hasScrolled) {
                    this.hasScrolled = true;
                }

                const content = document.querySelector("#intro");
                if (content !== null) {
                    const offset = window.pageYOffset;
                    const contentHeight = content.offsetHeight;
                    const navbarHeight = this.$el.offsetHeight;

                    if (offset > contentHeight - navbarHeight) {
                        this.$el.classList.add("has-shadow");
                    } else {
                        this.$el.classList.remove("has-shadow");
                    }
                }
            }
        }
    },
    mounted() {
        this.setupNavbarBurger();
        this.hideNavbarShadowOnFrontpage();
    }
}
</script>

<style scoped>
.navbar.front-page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    transform: translateY(-100%);
}
.navbar-scrolled-up {
    transform: translateY(0) !important;
    transition: transform 0.3s ease-in-out;
}
</style>