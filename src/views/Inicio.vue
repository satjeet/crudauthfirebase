<template>
  <div>
    <h1>Lista de Tareas</h1>
    <router-link to='/agregar'>
      <button>Agregar</button>
    </router-link>
    <ul>
      <li
        v-for="(item, index) in tareas"
        :key="index"
      >
        {{item.id}} - {{item.nombre}}
        <button @click="editarTarea(item.id)">Editar</button>
        <button @click="eliminarTarea(item.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Inicio",
  created() {
    this.getTareas();
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
    editarTarea(postId) {
      this.$router.push(`/editar/${postId}`);
    },
  },
  computed: {
    ...mapState(["tareas"]),
  },
};
</script>