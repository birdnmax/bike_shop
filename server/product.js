module.exports = {
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.bike_list.find()
            .then((bike_list)=>{
                res.send({success: true, bike_list})
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
    },
    getProductById: (req, res, next) => {
        const db = req.app.get('db');
        db.bike_list.findOne({id:Number(req.params.id)})
            .then((bike)=>{
                res.send({success: true, bike})
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
    }
} 