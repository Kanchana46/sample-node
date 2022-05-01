const commonService = require('../service/common_service');

exports.getStates = async function(req, res, next) {
    console.log('[commonController: getStates()]')
    try {
        const states = await commonService.getStates()
        return res.status(200).json({
            status:{
                code: 200,
                name: "Success",
                message: "Success get user"
            },
            payload: states
        });
    } catch {
        console.log('[commonController: getStates() Error]')
        return res.status(500).json({
            status:{
                code: 500,
                name: "Error",
                message: "Error get user"
            },
            payload: null
        })
    }
}
