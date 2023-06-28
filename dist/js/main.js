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
                
                {name: 'Breakfast'},
                {name: 'Drinks'},
                {name: 'Lunch'},
                {name: 'Lunch'},
                {name: 'Soups'},
                {name: 'Entrees'},

            ],
            recipe: {},
            all_recipes:[],
            hasRecipes: true,
            saved_recipe: [],
        }
    },
    mounted:function() {
        this.all_recipes = this.recipes;
        this.getRecipesByCategory('Entrees');
        
       },
    

    methods: {

        getRecipesByCategory(){
            //CONECTA AL API, pero llama solo a las recetas del inicio, porque al seleccionar la categoria las demas recetas aparecen pero sin la info
            //connect to API
            axios({
                method: 'get',
                url: 'http://localhost/proyecto/public/api/recipes/all'//+this.category[i].id,
                //'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey='+this.appKey
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
                            time: element.total_time,
                            level: element.level,
                            likes: element.likes,
                        });
                        if(items.length > 0) this.loading = false;
                    })
                    this.fillDataDetails()
                }
            )
            .catch(
                error => console.log(error)
            );
        },
        /* getRecipesByLikes(likes){ 
            likes = this.getRecipesByCategory(category, likes);

            for (let i = 0; i < this.getRecipesByCategory('categories').length; i++){
                if(this.all_recipes[i].aggregateLikes>99);
                favoriteRecipes = all_recipes[i];
            } 
        } ,*/
        //permite llenar los cards con los detalles
        fillDataDetails(){
            for(let i =0; i<this.recipes.length; i++){
                axios({
                    method: 'get',
                    url: 'http://localhost/proyecto/public/api/recipes/recipe/'+this.recipe[i].id,
                    //'https://api.spoonacular.com/recipes/'+this.recipes[i].id+'/information?includeNutrition=false&apiKey='+this.appKey
                })
                .then(
                    (response) => {
                        let items = response.data;
                        
                        this.recipes[i].name= items.name;
                        this.recipes[i].image= items.image;
                        this.recipes[i].time= items.total_time;
                        this.recipes[i].likes= items.likes;
                        this.recipes[i].description= items.description;
                        this.recipes[i].instructions= items.preparation_instructions;
                        
                        let ingredientsList = "";
                        for(let i = 0; i < items.recipe_has_ingredients.length; i++){
                            ingredientsList += items.recipe_has_ingredients[i].original + "\n";
                        }

                        this.recipes[i].ingredients = ingredientsList;
                        
                        //this.recipes[i].category= items.category; //tambien sin este obtiene datos de categorias
                    }
                )
                .catch(
                    error => console.log(error)
                );   

            }
        },
        
        //save
        /*
        fillDataDetails(){
            for(let i =0; i<this.recipes.length; i++){
                axios({
                    method: 'get',
                    url: 'https://api.spoonacular.com/recipes/'+this.recipes[i].id+'/information?includeNutrition=false&apiKey='+this.appKey
                })
                .then(
                    (response) => {
                        let items = response.data;
                        
                        this.recipes[i].name= items.title;
                        this.recipes[i].time= items.readyInMinutes;
                        this.recipes[i].likes= items.aggregateLikes;
                        this.recipes[i].instructions= items.instructions;
                        
                        let ingredientsList = "";
                        for(let i = 0; i < items.extendedIngredients.length; i++){
                            ingredientsList += items.extendedIngredients[i].original + "\n";
                        }

                        this.recipes[i].ingredients = ingredientsList;
                        
                        //this.recipes[i].category= items.category; //tambien sin este obtiene datos de categorias
                    }
                )
                .catch(
                    error => console.log(error)
                );   

            }
        },*/

        onClickRecipeLike(index){
            //console.log("btn - click");
            //this.likes += 1;
        
            //console.log("INDEX -> " + index);
            this.recipes[index].likes += 1;
        },
        onClickRecipeUnlike(index){
            //if(this.likes > 0) this.likes -= 1;
            if(this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        }, 

        onSaveRecipe(){  

            for (let i = 0; i < this.all_recipes.length; i++) {
                if(this.recipes[i] = 'saverecipe'){
                    this.saved_recipe.push(this.recipe[i]);
                }
            } 
        },

        onClickSaveRecipe(){
            //this.onFavoriteRecipe(likes);
            this.onSaveRecipe();
            console.log(saved_recipe);
        },


            //Sin on click category puedo obtener las recetas y detalles de distintas catecorias, es raro?

        /*
        onClickCategory(category){
            //console.log("category -> " + category);
            if(category == "All"){
                this.hasRecipes = true;
                this.recipes = this.all_recipes;
            }else{
                this.recipes = this.all_recipes;
                let recipesInCategory = this.recipes.filter(function(el){
                    return el.category === category;
                });
                //console.log(recipesInCategory.length);
                if(recipesInCategory.length > 0) {
                    this.hasRecipes = true;
                    this.recipes = recipesInCategory;
                }else{
                    this.hasRecipes = false;
                }
            }
        }, */
        //método que se ejecuta cuando se emite el evento searchrecipe del componente Search Recipe
        onSearchRecipe(keyword){
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/complexSearch?query='+keyword+'&apiKey='+this.appKey
            })
            .then(
                (response) => {
                    let items = response.data.results;
                    this.recipes =[];
                
                    items.forEach( element => {
                        this.recipes.push({
                            id: element.id,
                            image: element.image,
                            name: element.title,
                            time: 20,
                            level: "Easy",
                            likes: 18,
                            instructions: "NA"
                        });
                        if(items.length > 0) this.loading = false;
                    })
                    this.fillDataDetails()
                }
            )
            .catch(
                error => console.log(error)
            );
        },


        onFavoriteRecipe(){
            
           let favorites = [];
            for (let i = 0; i < this.recipes.length; i++){
                if(this.recipes[i].likes>99){
                    favorites.push(this.recipes[i]);
                }
            } 
            console.log(this.recipes);
            console.log(favorites);
           
        },

        // FAVORITOS
        onClickFavoriteRecipe(){
            //this.onFavoriteRecipe(likes);
            this.onFavoriteRecipe();
            
        },

        onClickRecipeDetails(index){
            console.log("RECIPE ID -" + index );
            this.selectedIndex = index;
        },
        //este es el que es realmente necesario para encontrar recetas por categoria
        onClickSelectedCategory(category){
            this.getRecipesByCategory(category);
        }
     }
 });
 
    //init custom events for components
 const emitter= new mitt();
 
 //global property for custom events
 app.config.globalProperties.$test = emitter;
    