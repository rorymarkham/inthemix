module.exports = {
    addAmp: (req, res) => {
        const db = req.app.get('db')
        const {ampImage, ampName} = req.body;
        const {id} = req.params;
        db.add_amp({user_id: id, product_name: ampName, product_img: ampImage})
        .then(() => {
            return db.get_user_studio({id});
        })
        .then((updatedStudio) => {
            res.status(200).send(updatedStudio[0])
        })     
    },

    // deleteAmp: (req, res) => {
    //     const 
    // }
}