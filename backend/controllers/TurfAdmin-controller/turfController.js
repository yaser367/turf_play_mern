const Turf = require("../../models/Turf");
const TurfAdmin = require('../../models/TurfAdmin')

const addTurf = async (req, res) => {
  try {
    const {
      _id,
      TurfName,
      mobile,
      gameTypes,
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
        gameTypes,
        groundType,
        price,
        Description,
      });
      await turf
        .save()
        .then((result) =>
          res.status(201).send({ message: "Turf Registred successfully",result })
          // console.log(result)

        )
        .catch((error) => res.status(500).send({ error }));
    }
  } catch (error) {
    return res.status(401).send(error);
  }
};

const uploadImage = async(req,res)=>{
  try {
    const {id,urls} = req.body;
   
    const turf = await Turf.findOne({_id:id})
    if(!turf){
      return res.status(400).send({ error: "Turf Not Found" });
    }else{
      const tur = await Turf.updateOne({_id:id},{$set:{ImageUrl:urls,uploadImage:true}})
      res.status(201).send({ message: "Image Uploaded successfully" })

    }
  } catch (error) {
    return res.status(401).send(error);
  }
}

const getAllturf = async (req,res) =>{
  try {
    const id = req.headers.id
    const turfs = await Turf.find({TurfAdminId:id,uploadImage:true})
    res.status(200).send({turfs})
  } catch (error) {
    return res.status(401).send(error);
    
  }
}

const oneTurf = async (req,res) =>{
  try {
    const {id} = req.params
    console.log(id)
    const turfs = await Turf.findOne({_id:id})
    res.status(200).send({turfs})
  } catch (error) {
    return res.status(401).send(error)
  }
}

const editTurf = async(req,res)=>{
  try {
    
  } catch (error) {
    return res.status(401).send(error)
    
  }
}

module.exports = {
  addTurf,
  uploadImage,
  getAllturf,
  oneTurf,
  editTurf
};
