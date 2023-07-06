app.component('recipe-favorite-button',{
   
    methods:{
        onClickFavoriteButton(){
            this.$emit('favoriterecipe', recipe);
        }
    }, 

    template:
    /*html*/ 
    `<button class='btn btn-red' v-on:click="onClickFavoriteButton()" >Favorites</button>`
})