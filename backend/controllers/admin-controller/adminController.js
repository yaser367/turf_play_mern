const User = require("../../models/User");
const TurfAdmin = require("../../models/TurfAdmin");
const Turf = require("../../models/Turf");

const getUserData = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send({ users });
  } catch (error) {
    return res.status(401).send(error);
  }
};

const getTurfAdminData = async (req, res) => {
  try {
    const turfAdmin = await TurfAdmin.find();
    return res.status(200).send({ turfAdmin });
  } catch (error) {
    return res.status(401).send(error);
  }
};

const getTurfs = async (req, res) => {
  try {
    const turfs = await Turf.find();
    return res.status(200).send({ turfs });
  } catch (error) {
    return res.status(401).send(error);
  }
};

const blockUser = async (req, res) => {
  try {
    const {id} = req.params;
    const activeUser = await User.findOne({ _id: id, isActive: true });
    if (activeUser) {
      await User.findOneAndUpdate({ _id: id }, { $set: { isActive: false } });
      return res.status(200).send("user blocked");
    }
    const blockedUser = await User.findOne({ _id: id, isActive: false });
    if (blockedUser) {
      await User.findOneAndUpdate({ _id: id }, { $set: { isActive: true } });
      return res.status(200).send("activated user");
    }
  } catch (error) {
    return res.status(401).send(error);

  }
};

const blockTurfAdmin = async(req,res) =>{
  try {
    const {id} = req.params;
    const activeUser = await TurfAdmin.findOne({ _id: id, isVerified: true });
    if (activeUser) {
      await TurfAdmin.findOneAndUpdate({ _id: id }, { $set: { isVerified: false } });
      return res.status(200).send("user blocked");
    }
    const blockedUser = await TurfAdmin.findOne({ _id: id, isVerified: false });
    if (blockedUser) {
      await TurfAdmin.findOneAndUpdate({ _id: id }, { $set: { isVerified: true } });
      return res.status(200).send("activated user");
    }
  } catch (error) {
    return res.status(401).send(error);
    
  }
}

module.exports = {
  getUserData,
  getTurfAdminData,
  getTurfs,
  blockUser,
  blockTurfAdmin
};
