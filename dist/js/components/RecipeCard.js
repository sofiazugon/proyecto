app.component('recipe-card',{
    props:{
        image:{
            type: String
        },
        category:{
            type: String,
            default: "default category"
        },
        name:{
            type: String,
            default: "default name"
        },
        description:{
            type: String,
            default: "default description"
        },
        time:{
            type: String,
            default: "default time"
        },
        level:{
            type: String,
            default: "default level"
        },
        likes:{
            type: Number,
            default: 1
        },
    },
    data(){
        return{
            counter: 0
        }
    },
    template:
    /*html*/
    `<div class="card p-3 col-3">
    <img v-bind:src="image" class="card-img-top rounded" alt="featured recipe">
    <div class="card-body card-detail p-0">
        <h2 class="mt-2">{{ category }}</h2>
        <h1>{{ name }}</h1>
        <p class="card-text">{{ description }}</p>
        <p>{{ time }}</p>
        <p>{{ level }}</p>
        <p>{{ likes }}</p>
        <button class="btn btn-danger">Like</button>
        <button class="btn btn-success">Unlike</button>
        <button class="btn btn-primary">View Recipe</button>
    </div>
</div>`
})