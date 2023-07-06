app.component('recipe-details', {
  props: {
    name: {
      type: String
    },
    image: {
      type: String
    },
    ingredients: {
      type: String
    },
    instructions: {
      type: String
    },
    description:{
      type: String,
  },
  category: {
    type: String
  },
  likes: {
    type: Number
  },
  total_time: {
    type: Number
  },
  portions: {
    type: Number
  },
  occasion: {
    type: String
  },
  
  

  },
  data() {
    return {
      test: ""
    }
  },

  methods: {

  },
  template:
    /*html*/
    `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-style">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <img class="d-block m-auto img-fluid" v-bind:src="image" alt="{{ image }}">
        <section class="container col-md-12" >
          <div style="display: flex; flex-direction: row;">

          <div> <p class="text-center fs-6">Category: {{ category }}</p></div>
          <div> <p class="text-center fs-6">Portion: {{ portions }}</p></div>
          <div> <p class="text-center fs-6">Occasion: {{ occasion }}</p></div>
          <div> <p class="text-center fs-6">Time: {{ total_time }} Minutes</p></div>
            
          </div>
        </section>
              <p class="fst-italic fw-light fs-5">{{ description }}</p>
              <p class="fst-italic fw-light fs-5">{{ ingredients }}</p>
              <p class="fst-italic fw-light fs-5">{{ instructions }}</p>
              
        <div class="row pb-4">
          <button type="button" class="btn red-btn" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  `
})