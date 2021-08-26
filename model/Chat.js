const mongoose=require('mongoose')
const Schema=mongoose.Schema;
// const Message=require('./Message')

const chatSchema=new Schema({
   chatId:String,
   user:{type:Schema.Types.ObjectId, ref:'User'},
   messages:[String]
})

const Chat=mongoose.model('Chat',chatSchema);

module.exports=Chat;