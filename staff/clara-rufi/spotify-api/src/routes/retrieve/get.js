const logic = require('../../logic')

module.exports = (req, res) => {
    const { params:{userId}, headers:{authorization}} = req  //autorization: token
    // params és la url, dp de la /

    const token = authorization.split(' ')[1]  // pq el token ens ve en una array Bearer 238409230983908

    try {
        logic.retrieveUser(userId, token)
        .then(res.json.bind(res))
        .catch(({message})=> {
            res.status(401).json({
                error:message
            })
        })
    }catch({message}){
        res.status(401).json({
            error: message
        })
    }
}
      