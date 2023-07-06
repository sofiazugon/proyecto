app.component('profile',{

    data(){
        return{
            name:'',
            last_name:'',
            country:'',
            email:'',
        }
    },
    created(){
        this.name = localStorage.getItem('name');
        this.last_name = localStorage.getItem('lastname');
        this.email = localStorage.getItem('email');
        this.country = localStorage.getItem('country');
    },
   
    /* methods:{
        showProfile(user) {
            this.user = this.email + '&password='+ this.password;
            
            axios({
                method: 'get',
                url: 'http://localhost/proyecto/public/api/users/login?email='+user,
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item)
                        
                        this.user.name = item.name;
                        this.user.last_name = item.last_name;
                        this.user.country = item.country;
                        this.user.email = item.email;
                
                        console.log(item)
                    }
                )
                .catch(
                    error => console.log(error)
                ); 
        },
   
 },*/
    template:
    /*html*/
    `
            <h1>Nombre: {{ name }}</h1>
            <h1>Apellido: {{ lastname }}</h1>
            <h1>Email: {{ email }}</h1>
            <h1>Pais: {{ country }}</h1>
       `
})