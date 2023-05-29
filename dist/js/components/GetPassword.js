app.component('get-password',{
    props:{
        email:{
            type: String
        },
        password:{
            type: String,
        },
        username:{
            type: String,
        },
        codeConfirm:{
            type: Number,
        },
        phoneNumber:{
            type: Number,
        },
    },
})