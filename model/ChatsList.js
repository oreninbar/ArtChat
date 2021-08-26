const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const chatsListSchema=new Schema({
    chats:[{type:Schema.Types.ObjectId, ref:'Chat'}]
})

const ChatsList=mongoose.model('ChatsList',chatsListSchema);

module.exports=ChatsList;