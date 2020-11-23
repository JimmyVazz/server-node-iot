const Schema = mongoose.Schema;

const ritmoCardiacoSchema = new Schema(
  {
    nombre: String,
    data: JSON.stringify(Object),
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RitmoCardiaco", ritmoCardiacoSchema);
