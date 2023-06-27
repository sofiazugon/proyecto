app.component('search-recipe',{
    methods:{
        onClickSearchRecipe(){
            let recipe = document.querySelector("#recipe").value;
            console.log("search this recipe -> " + recipe);
            this.$emit('searchrecipe', recipe);
        }
    },

    template:
    /*html*/ 
    `<form class="d-flex" role="search">
        <input id="recipe" class="form-control me-2" type="text" placeholder="Buscar"
        aria-label="Search">
        <button  v-on:click="onClickSearchRecipe()" class="btn" type="button">Buscar</button>
    </form>`
})