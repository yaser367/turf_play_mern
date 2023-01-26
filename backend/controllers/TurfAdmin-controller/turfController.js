const Turf = require("../../models/Turf");
const TurfAdmin = require('../../models/TurfAdmin')

const addTurf = async (req, res) => {
  try {
    const {
      _id,
      TurfName,
      mobile,
      gameType,
      groundType,
      price,
      Description,
    } = req.body;
      const user = await TurfAdmin.find({_id})

    if (!user) {
      return res.status(400).send({ error: "User Not Found" });
    } else {
      const turf = new Turf({
        TurfAdminId:_id,
        TurfName,
        mobile,
        gameType,
        groundType,
        price,
        Description,
      });
      await turf
        .save()
        .then((result) =>
          res.status(201).send({ message: "Turf Registred successfully" })
        )
        .catch((error) => res.status(500).send({ error }));
    }
  } catch (error) {
    return res.status(401).send(error);
  }
};

module.exports = {
  addTurf,
};
