const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NewsSchema = Schema({
  title: String,
  teaser: String,
  body: String,
  status: {
    type: Number,
    default: 1
  },
  created: {
    type: Date,
    required: true,
    default: new Date()
  }
});


export default mongoose.model("News", NewsSchema)
