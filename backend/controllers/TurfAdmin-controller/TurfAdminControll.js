const TurfAdmin = require("../../models/TurfAdmin");
const bycrypt = require("bcrypt");

/** TurfAdmin Registration */

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailExist = TurfAdmin.find({ email });

    if (!emailExist) {
      return res.status(400).send({ error: "Account already exist" });
    } else {
      const hashedPassword = await bycrypt.hash(password, 12);

      const admin = new TurfAdmin({
        AdminName: name,
        password: hashedPassword,
        email,
      });
      await admin
        .save()
        .then((result) =>
          res.status(201).send({ message: "user Registred successfully" })
        )
        .catch((error) => res.status(500).send({ error }));
    }
  } catch (error) {
        return res.status(500).send(error);
  }
};

module.exports = {
    register
}