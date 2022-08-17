const Contact = require("../models/contactModel");

//signup contact
const signupContact = async (req, res) => {
  const { email, type } = req.body;

  try {
    const contact = await Contact.signup(email, type);

    res.status(200).json({ email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupContact };
