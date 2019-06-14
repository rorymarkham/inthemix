module.exports = {
    addAmp: async (req, res) => {

        console.log(req.params)
        const db = req.app.get('db')
        const {ampImage, ampName} = req.body;
        const {id} = req.params;
        await db.add_amp({user_id: +id, product_name: ampName, product_img: ampImage})
        .then((updatedStudio) => {
            res.sendStatus(200)
        })     
    },

    deleteAmp: (req, res) => {
        const db = req.app.delete('db')
        const {ampImage, ampName} = req.body
        const {id} = req.params
        req.body = req.body.filter()
    }
}