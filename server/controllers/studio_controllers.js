module.exports = {
    addAmp: async (req, res) => {

        console.log(req.params)
        const db = req.app.get('db')
        const {ampImage, ampName} = req.body;
        const {id} = req.params;
        await db.add_amp({user_id: +id, product_name: ampName, product_img: ampImage})
        // .then((updatedStudio) => {
            res.sendStatus(200)
        // })     
    },

    deleteAmp: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        await db.delete_amp({studio_id: id})
        res.status(200).send()
    }
}