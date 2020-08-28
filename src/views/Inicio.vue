<template>
  <div>
    <h1>Lista de Tareas</h1>
    <router-link to='/agregar'>
      <button class="btn btn-primary mb-2">Agregar</button>
    </router-link>
    <ul class="list-group">
      <li
        v-for="(item, index) in tareas"
        :key="index"
        class="list-group-item"
      >
        {{item.id}} - {{item.nombre}}
        <button
          @click="editarTarea(item.id)"
          class="btn btn-warning mb-2 ml-2 float-right"
        >Editar</button>
        <button
          @click="eliminarTarea(item.id)"
          class="btn btn-danger mb-2 float-right"
        >Eliminar</button>
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