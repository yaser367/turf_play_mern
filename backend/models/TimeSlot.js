const mongoose = require("mongoose");

const SlotSchema = mongoose.Schema({
  TurfId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "turf",
    require: true,
  },
  date: {
    type: String,
  },
  game: {
    type: String,
  },
  slots: [
    {
      slot: {
        type: String,
      },
      booked: {
        type: Boolean,
        default: false,
      },
      isBlocked: {
        type: Boolean,
        default: false,
      },
      userId: {
        type:String
      },
    },
  ],
});

module.exports = mongoose.model("Slot", SlotSchema);
