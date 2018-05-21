const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const pagesSchema = new Schema({
  bouquets: {
    type: Number,
    default: 1
  },
  compose: {
    type: Number,
    default: 1
  },
  gifts: {
    type: Number,
    default: 1
  }
});

const cartSchema = new Schema({
  uid: String,
  price: Number,
  quantity: Number
});

const UserSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  pages: pagesSchema,
  pagesPrice: pagesSchema,
  cart: [cartSchema]
});

mongoose.model('users', UserSchema);