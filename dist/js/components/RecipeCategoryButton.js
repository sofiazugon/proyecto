app.component('recipe-category-button',{
    props:{
        category:{
            type: String
        }
    },
    data(){
        return{
            counter: 0
        }
    },
    template:
    /*html*/
    `<button class="btn btn-dark">{{ category }}</button>`
})