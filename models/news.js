const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, required: [true, "Pole tytul jest wymagane"] }, // String is shorthand for {type: String}
  description: {
    type: String,
    required: [true, "Zamieszczenie opisu jest wymagane"],
  },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("News", newsSchema);