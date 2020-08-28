<template >
  <div
    id="app"
    class="container mt-2"
  >
    <div id="nav">
      <router-link
        to="/registro"
        v-if="!existeUsuario"
        class="btn btn-dark mr-2"
      > Registro</router-link>
      <router-link
        to="/ingreso"
        v-if="!existeUsuario"
        class="btn btn-dark mr-2"
      > Ingreso</router-link>
      <router-link
        to="/"
        v-if="existeUsuario"
        class="btn btn-dark mr-2"
      > Inicio</router-link>
      <button
        @click="cerrarSesion"
        v-if="existeUsuario"
        class="btn btn-dark mr-2"
      > Cerrar Sesión
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
  computed: {
    ...mapGetters(["existeUsuario"]),
  },
};
</script>


