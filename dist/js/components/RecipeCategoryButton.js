app.component('recipe-category-button',{
    props:{
        id:{
            type: String
        },
        name:{
            type: String
        }
    },

    methods:{
        onClickCategoryButton(){
            console.log(this.id);
            this.$emit('selectedcategory', this.id);
        }
    },

    template:
    /*html*/ 
    `<button class='btn btn-red' v-on:click="onClickCategoryButton" >{{ name }}</button>`
})