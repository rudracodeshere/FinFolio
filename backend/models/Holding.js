const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoldingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ticker: {
    type: String,
    required: true,
    uppercase: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  purchasePrice: {
    type: Number,
    required: true,
    min: 0,
  }
}, {
  timestamps: true,
});


HoldingSchema.index({ user: 1, ticker: 1 }, { unique: true });

module.exports = mongoose.model('Holding', HoldingSchema);
