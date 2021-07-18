import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Review
}


const reviewSchema = new Schema({
  title: String,
  rating: {type: String,
    min: 1,
    max: 5,
  },
  content: String,
  game: {type: mongoose.Schema.Types.ObjectId, ref: "Game"},
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Review = mongoose.model("Review", reviewSchema)