const mongoose = require("mongoose");

const TurfSchema = mongoose.Schema({
  TurfAdminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TurfAdmin",
    require: true,
  },
  TurfName: {
    type: String,
    require: [true, "Turf name required"],
  },
  mobile: {
    type: Number,
    require: [true, "Mobile number required"],
  },
  ImageUrl: [
    {
      type: String,
    },
  ],
  gameTypes: [
    {
      type: String,
      require: [true, "Give available game type"],
    },
  ],
  groundType: [
    {
      type: String,
      require: [true, "Select your ground type"],
    },
  ],
  price: {
    type: Number,
    require: [true, "Price required"],
  },
  Description: {
    type: String,
    require: [true, "Description required"],
  },
  uploadImage:{
    type:String,
    default:false
  }
});

module.exports = mongoose.model("Turf", TurfSchema);
