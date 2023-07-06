app.component('login-form',{

    methods: {
 
        onClickLogIn(){
             const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;
                       
            axios.post('http://localhost/proyecto/public/api/users/login', {
                email: email,
                 password: password
                 })
                .then(response => {
                    let item = response.data;
                    console.log(item)
                    if(item.code == 200)
                    
                    localStorage.setItem('access_token', item.accessToken);
                    localStorage.setItem('id', item.user.id);
                    localStorage.setItem('name', item.user.name);
                    localStorage.setItem('lastname', item.user.last_name);
                    localStorage.setItem('email', item.user.email);
                    localStorage.setItem('country', item.user.country);
                    window.location.href='http://localhost/ciclo1/proyecto/dist/perfil.html';
                    
                        })
                    .catch(error => {
                        console.error(error);
                        alert("Datos incorrectos")
                    });

            }
        
        
    },

    template:
    /*html*/ 
        `
        <h1>Ingresa tus datos</h1>
        <section class="row">
        <h2>Correo Electrónico:</h2>
         <input id="email"  name="email" type="email">
        <h2>Contaseña:</h2>
        <input id="password" name="password" type="password">


    <a href="get_password.html">¿Olividó su contraseña? <br>Recuperela aquí</a>
        <section class="pt-5 pb-5">
            <a @click="onClickLogIn"  class="btn red-btn">Iniciar Sesión</a>
        </section>
    </section>`
})