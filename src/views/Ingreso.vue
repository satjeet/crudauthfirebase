<template>
  <div>
    <h1>Ingreso de usuarios</h1>
    <form @submit.prevent="ingresoUsuario({email:email, password:pass})">
      <input
        type="email"
        placeholder="Ingrese email"
        v-model="email"
        class="form-control mb-2"
      >
      <input
        type="password"
        placeholder="Ingrese contraseña"
        v-model="pass"
        autocomplete="on"
        class="form-control mb-2"
      >
      <button
        type="submit"
        class="btn btn-primary"
      >Acceder</button>
    </form>
    <p>{{error}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Ingreso",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["ingresoUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
  },
};
</script>