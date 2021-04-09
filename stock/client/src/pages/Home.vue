<template>
    <div> <p> Nuevo mensaje: {{ mensaje }} </p> </div>
</template>

<script>

export default {
    name:  'Main',
    data() {
        return {
            mensaje: 'Nuevo Mensaje desde vue js'
        }

    },
    methods: {
        getMensaje () {
            const path = 'http://localhost:5000/vue/mensaje'
            fetch(path)
            .then((respuesta) => {
                console.log(respuesta)
                if (respuesta.ok) {
                    console.log('ok');
                    return respuesta.json();
                } else {
                    console.log(respuesta)
                }
            })
            .then((res) => {
                console.log(res)
                this.mensaje = res.mensaje;
            })
            .catch((error) => {
                console.error(error);
            })
        }
    },
    created(){
        this.getMensaje()
    }

}
</script>
