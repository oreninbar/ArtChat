const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  chat: { type: Schema.Types.ObjectId, ref: "Chat" },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
