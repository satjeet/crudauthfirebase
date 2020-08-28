<template>
  <div>
    <h1>Agregar</h1>
    <form @submit.prevent="agregarTarea(nombre)">
      <input
        type="text"
        v-model="nombre"
        placeholder="Ingrese tarea"
        class="form-control mb-2"
      >
      <button
        type="submit"
        class="btn btn-primary mb-2"
      >Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Agregar",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions(["agregarTarea"]),
  },
};
</script>