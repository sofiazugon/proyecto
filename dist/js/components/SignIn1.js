app.component('signin-form',{

    methods: {

        
                    onClickSignIn(){
                        //const crea variable, al igual que un let
                        const name = document.getElementById('name').value; //value es el id del input 
                        const last_name = document.getElementById('last_name').value;
                        const country = document.getElementById('country').value;
                        const email = document.getElementById('email').value;
                        const password = document.getElementById('password').value;
        
                        const data = {
                            //data es un objeto, el data de aqui es el data del axios
                            name: name,
                            last_name: last_name,
                            country: country,
                            email: email,
                            password: password
                        };
                    
                    axios.post('http://localhost/proyecto/public/api/users/register', data)
                    .then(response => {
                        console.log(response.data);
                        
                    })
                    .catch(error => {
                        console.error(error);
                    });

                    console.log(data);
            }
        
        
    },


    template:
    /*html*/ 
        `

        <h2>Nombre:</h2>
        <input id="name" type="name">
        <h2>Apellido:</h2>
        <input id="last_name" type="last_name">
        <h2>Pais:</h2>
        <input id="country" type="country">
        <h2>Correo Electrónico:</h2>
        <input id="email" type="email">
        <h2>Contaseña:</h2>
        <input id="password" type="password">
        
       
        <section class="pt-5 align-content-center pb-3">
            <a @click="onClickSignIn" href="iniciar_sesion.html" class="btn red-btn">Registrar</a>

        </section>`
    })