app.component('top10recipe-button',{
    
     methods:{
         onClickTopButton(){
            //this.onTopRecipe();
             this.$emit('top10recipes', recipe);
             console.log(recipe);
         }
     }, 
 
     template:
     /*html*/ 
     `<button class='btn btn-red' v-on:click="onClickTopButton()" >Top 10</button>`
    
    
    })