const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { email, password } } = req

    debugger

    try {
        logic.authenticateUser(email, password)
            // .then(res => res.json(res))
            .then(data=>{
                res.json({id: data})
            })
            .catch(({ message }) => {
                res.status(401).json({
                    error: message
                })
            })
    } catch ({ message }) {
        res.status(401).json({
            error: message
        })
    }
}