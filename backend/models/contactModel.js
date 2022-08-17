const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: false,
  },
});

// static signup method
contactSchema.statics.signup = async function (email, type) {
  //validation
  if (!email) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already registered");
  }

  if (type !== "student" && type !== "institution") {
    throw Error("Select an account type");
  }
  const contact = await this.create({
    email,
    type,
  });

  return contact;
};

module.exports = mongoose.model("Contact", contactSchema);
