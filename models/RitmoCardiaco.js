const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ritmoCardiacoSchema = new Schema(
  {
    nombre: String,
    data: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RitmoCardiaco", ritmoCardiacoSchema);
