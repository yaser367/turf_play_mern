const Turf = require('../../models/Turf')

const addTurf = async (req, res) => {
  try {
    console.log("kjdkfj")
    const { user,TurfName,mobile,ImageUrl,gameType,groundType,price,Description } = req.body;

    console.log(req.body)

    // if (!user) {
    //   return res.status(400).send({ error: "User Not Found" });
    // }else{
    //     const turf = new Turf({
    //         TurfAdmin:user._id,
    //         turfs:[{TurfName,mobile,ImageUrl,gameType,groundType,price,Description}]

    //     })
    //     await turf.save()
    //     .then(result => res.status(201).send({message:"Turf Registred successfully"}))
    //     .catch(error => res.status(500).send({error}))
    // }
  } catch (error) {
    return res.status(401).send(error);
  }
};

module.exports = {
  addTurf,
};
