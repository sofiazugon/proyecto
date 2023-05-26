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
        index:{
            type: Number
        },
    },
   
     methods:{
    onClickLike(){
        //console.log("LIKE");
        this.$emit('recipelike', this.index);
        //this.recipe_likes++;
    },
    onClickUnlike(){
        //console.log("UNLIKE");
        this.$emit('recipeunlike', this.index);

    },
    onClickViewRecipe(){
        console.log("VIEW");
        this.$emit('recipedetails', this.index);
        //this.$test.emit('foo',"works!");
    },
 },
    template:
    /*html*/
    `<div class="p-2">
    <img v-bind:src="image" class="card-img-top rounded" alt="featured recipe">
    <div class="card-body">
        <h2 class="mt-2">{{ category }}</h2>
        <h1>{{ name }}</h1>
        <p>{{ time }}</p>
        <p>{{ level }}</p>
        <p>{{ likes }}</p>
        <div class="row">
            <button class=" btn red-btn" v-on:click="onClickLike(index)">Like</button>
            <button class="btn nred-btn" v-on:click="onClickUnlike(index)">Dislike</button>
            <button class="btn lred-btn" v-on:click="onClickViewRecipe(index)" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver Receta</button>
        <div>
       
        </div>
    </div>
</div>`
})