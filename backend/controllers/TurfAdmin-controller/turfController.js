
const addTurf = async (req,res)=>{
    try {
        const {token} = req.body;

    } catch (error) {
        return res.status(401).send(error)
    }
}



module.exports = {
    addTurf
}