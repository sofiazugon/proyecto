app.component('save-recipe',{
    props:{
        
        recipe:{
            type: String,
        },
        username:{
            type: String,
            
        },
    },

    methods:{
        onClickSaveRecipe(){
            console.log(this.saved_recipe);
            this.$emit('saverecipe', this.saved_recipe);
        }
    },

    template:
    /*html*/ 
    `<button  v-on:click="onClickSaveRecipe()" class="btn btn-outline-success" type="button">Guardar</button>`
})