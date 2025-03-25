const mongoose=require('mongoose');
const Schema=mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    brand:{
        type:String,
    },
    images:[
        {type:String,
            required:true,
            default:"",
        }
    ],

    price:{
        type:Number,
    default:0
    },
    // category:{
    //     type:mongoose.Schema.Types.ObjectId,
    // ref:'Category',
    // },
    countIn:{
        type:Number,

    },
    rating:{
        type:Number,
    },
    reviews:{
        type:Number,

    },
    isFeatured:{
        type:Boolean,
        default:false,
    },
    dataCreated:{
type:Date,
default:Date.now,
    }
})
module.exports=mongoose.model('Product',Schema);