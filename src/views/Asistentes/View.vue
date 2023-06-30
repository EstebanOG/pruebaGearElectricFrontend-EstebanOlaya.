<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h4>
            Asistentes
          </h4>
          <RouterLink to="/asistentes/create" class="btn btn-primary">
            Add Asistente
          </RouterLink>
        </div>
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>         
                <th>Tipo de documento</th> 
                <th>Número de documento</th> 
                <th>Teléfono movil</th> 
                <th>Email</th>
                <th>Acciones</th> 
              </tr>
            </thead>
            <tbody v-if="this.asistentes.length > 0">
                <tr v-for="( asistente ,index) in this.asistentes" :key="index">
                  <td>{{ asistente.id }}</td>
                  <td>{{ asistente.nombre }}</td>
                  <td>{{ asistente.tipoDocumento }}</td>
                  <td>{{ asistente.numeroDocumento }}</td>
                  <td>{{ asistente.telefonoMovil }}</td>
                  <td>{{ asistente.email }}</td>
                  <td>
                    <RouterLink :to="{ path: '/asistentes/'+asistente.id + '/edit' }" class="btn btn-success">
                      Edit
                    </RouterLink>
                    <button type="buttom" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="7">Loanding...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios'
export default{
  name: 'asistentes',
  data(){
    return{
      asistentes:[]
    }
  },
  mounted(){
    this.getAsistentes();
  },
  methods: {
    getAsistentes(){
      axios.get('http://localhost:3000/asistentes').then(res =>{
        this.asistentes = res.data
        //onsole.log(this.asistentes)
      });
    }
  }
}
</script>
  