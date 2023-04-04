import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  dislikes: Number,
  liked: Boolean,
  disliked: Boolean,
  handle: String,
  time: String,
  userName: String,
  title: String, 
  image: String,
}, {collection: 'tuits'});
export default schema;