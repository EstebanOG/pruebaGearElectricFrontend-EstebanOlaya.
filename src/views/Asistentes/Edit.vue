<template>
    <div class="container mt-5">
        <div class="card-header">
            <h4>Add Asistente</h4>
        </div>
        <div class="card-body">
            <div class="mb-3">
                <label for="">Nombre</label>
                <input type="text" v-model="model.asistente.nombre" name="" class="form-control" id="" required >
            </div>
            <div class="mb-3">
                <label for="">Tipo de documento</label>
                <input type="text" v-model="model.asistente.tipoDocumento" name="" class="form-control" id="" required>
            </div>
            <div class="mb-3">
                <label for="">Número de documento</label>
                <input type="text" v-model="model.asistente.numeroDocumento" name="" class="form-control" id="" required>
            </div>
            <div class="mb-3">
                <label for="">Teléfono movil</label>
                <input type="text" v-model="model.asistente.telefonoMovil" name="" class="form-control" id="" required>
            </div>
            <div class="mb-3">
                <label for="">Email</label>
                <input type="text" v-model="model.asistente.email" name="" class="form-control" id="" required>
            </div>
            <div class="mb-3">
                <button type="submit" @click="updateAsistente" class="btn btn-primary">Update</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'asistenteEdit',
    data(){
        return{
            model: {
                asistente:{
                    nombre: '',
                    tipoDocumento: '',
                    numeroDocumento: '',
                    telefonoMovil: '',
                    email: ''
                }
            }
        }
    },

    mounted(){
        //console.log(this.$route.params.id)
        this.getAsistentesData(this.$route.params.id);
    },
    
    methods:{
        getAsistentesData(asistenteId){

            axios.get(`http://localhost:3000/asistentes/${asistenteId}/`).
            then(res=>{
                console.log(res.data);
                this.model.asistente = res.data
            });
        },


        saveAsistente(){
            axios.post(`http://localhost:3000/asistentes/${asistenteId}/`, this.model.asistente)
                .then(res =>{
                    console.log(res.data)
                    //alert(res.data.message)

                    this.asistente = {
                        nombre: '',
                        tipoDocumento: '',
                        numeroDocumento: '',
                        telefonoMovil: '',
                        email: ''
                    }
        
                }).catch(function (error){
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }
    }

}
</script>