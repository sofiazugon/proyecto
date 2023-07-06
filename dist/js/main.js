const app = Vue.createApp({
    data(){
        return{
            favoriteRecipes:[],
            image: "./images/header.jpg",
            title: "Cook It",
            description: "Librería de Recetas",
            likes: 25,
            loading:true,
            selectedIndex: 0,
            recipes: [
                {id: 1, image:"./images/recipes/sushi.jpg", name: "Sushi", category: "Main course", time: 10, level: "", likes: 18, ingredients: "pescado, salsa, algas, arroz, ", instructions: " ahdiuahfuahoiufeao fhaoihfdoahfaoihf oahfioehfaoehfaohf hafoihoahfaehfo"}
            ],
            categories:[
                
                {name: 'Breakfast', id:1 },
                {name: 'Drinks', id:2},
                {name: 'Lunch', id:3},
                {name: 'Desserts', id:4},
                {name: 'Soups', id:5},
                {name: 'Entrees', id:6},

            ],
            
            recipe: {},
            all_recipes:[],
            hasRecipes: true,
            saved_recipe: [],
        }
    },
    mounted:function() {
        this.all_recipes = this.recipes;
        this.getAllRecipes();
        this.getRecipesByCategory();
        
       },
    

    methods: {


        // ALL RECIPES INDEX

        getAllRecipes(){
            axios({
                method: 'get',
                url: 'http://localhost/proyecto/public/api/recipes/all'
            })
            .then(
                (response) => {
                    let items = response.data;
                    this.recipes =[];
                    
                
                    items.forEach( element => {
                        this.recipes.push({
                            id: element.id,
                            name: element.name,
                            category: element.category,
                            image: element.image,
                            occasion: element.occasion,
                            portions: element.portions,
                            total_time: element.total_time,
                            level: element.level,
                            likes: element.likes,
                        });
                    })
                    console.log(this.recipes);
                }
            )
            .catch(
                error => console.log(error)
            );
        },

        // ALL RECIPES INDEX

        // CATEGORY

        getRecipesByCategory(categoryID){
            
            axios({
                method: 'get',
                url: 'http://localhost/proyecto/public/api/recipes/filterby/category/'+categoryID,
            })
            .then(
                (response) => {
                    let items = response.data;
                    this.recipes =[];
                    
                
                    items.forEach( element => {
                        this.recipes.push({
                            id: element.id,
                            name: element.name,
                            category: element.category,
                            image: element.image,
                            occasion: element.occasion,
                            portions: element.portions,
                            total_time: element.total_time,
                            level: element.level,
                            likes: element.likes,
                        });

                    })
                    console.log(this.recipes);
                }
            )
            .catch(
            );
        },

        
         onClickSelectedCategory(categoryID){
            this.getRecipesByCategory(categoryID);
            
        },
        
        // CATEGORY


        //RECIPE DETAILS CARD

        onClickRecipeDetails(index) {
            this.selectedIndex = index;
            console.log("RECIPE ID -" + (index+1));

            axios({
                method: 'get',
                url: 'http://localhost/proyecto/public/api/recipes/recipe/'+(index+1)
            })
                .then(
                    (response) => {


                        let item = response.data[0][0];
                        //console.log(item);
                        
                        this.recipe.image = item.image;
                        this.recipe.name = item.name;
                        this.recipe.category = item.category;
                        this.recipe.total_time = item.total_time;
                        this.recipe.level = item.level;
                        this.recipe.likes = item.likes;
                        this.recipe.portions = item.portions;
                        this.recipe.description = item.description;
                        this.recipe.instructions = item.preparation_instructions;
                        this.recipe.occasion = item.occasion;



                    //get ingredients array
                       IngredientsList=[];
                        let data = "";
                        console.log(response.data[1])
                        for(let i = 0; i < response.data[1].length; i++){
                            console.log(response.data[1][i].description)
                            data+=response.data[1][i].amount+" "+response.data[1][i].measurement_unit+" "+response.data[1][i].description+"  -  ";
                        }
                        this.recipe.ingredients = data;
                        
                    }
                )
                .catch(
                    error => console.log(error)
                ); 
        },

         //RECIPE DETAILS CARD


        //Top 10 Recipes

        onTopRecipes(){
            axios({
                method: 'get',
                url: 'http://localhost/proyecto/public/api/recipes/top10'
            })
            .then(
                (response) => {
                    let items = response.data;
                    this.recipes =[];
                    
                
                    items.forEach( element => {
                        this.recipes.push({
                            id: element.id,
                            name: element.name,
                            category: element.category,
                            image: element.image,
                            occasion: element.occasion,
                            portions: element.portions,
                            total_time: element.total_time,
                            level: element.level,
                            likes: element.likes,
                        });

                    })
                    console.log(this.recipes);
                }
            )
            .catch(
            );
        },

        onClickTopRecipe(){
            this.onTopRecipes();
        },

        //Top 10 Recipes


        //LIKES METHODS

        onClickRecipeLike(index){
            this.recipes[index].likes += 1;
        },

        onClickRecipeUnlike(index){
            if(this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        }, 


        //LIKES METHODS


        //SAVE RECIPE (NOT WORKING)

        onSaveRecipe(){  

            for (let i = 0; i < this.all_recipes.length; i++) {
                if(this.recipes[i] = 'saverecipe'){
                    this.saved_recipe.push(this.recipe[i]);
                }
            } 
        },

        onClickSaveRecipe(){
            this.onSaveRecipe();
            console.log(saved_recipe);
        },

        //SAVE RECIPE

       
        //SEARCH RECIPE BY NAME

        onSearchRecipe(name){
            axios({
                method: 'get',
                url: 'http://localhost/proyecto/public/api/recipes/searchbyname/'+name,
            })
            .then(
                (response) => {
                    let items = response.data;
                    this.recipes =[];
                
                    items.forEach( element => {
                        this.recipes.push({
                            id: element.id,
                            name: element.name,
                            category: element.category,
                            image: element.image,
                            occasion: element.occasion,
                            portions: element.portions,
                            total_time: element.total_time,
                            level: element.level,
                            likes: element.likes,
                        });
                    })
                }
            )
            .catch(
                error => console.log(error)
            );
        },



        //SEARCH RECIPE BY NAME

        // FAVORITOS
        onFavoriteRecipe(){
            
           let favorites = [];
            for (let i = 0; i < this.recipes.length; i++){
                if(this.recipes[i].likes>500){
                    favorites.push(this.recipes[i]);
                }
            } 
            console.log(favorites);
           
        },

        
        onClickFavoriteRecipe(){
            this.onFavoriteRecipe();
            
        },

        // FAVORITOS


 
     }
 });
 
    //init custom events for components
 const emitter= new mitt();
 
 //global property for custom events
 app.config.globalProperties.$test = emitter;
    