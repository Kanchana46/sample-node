const dutyService = require('../service/duty_management_service');

exports.addDuty = async function(req, res, next) {
    console.log('[dutyManagementController: addDuty()]')
    try {
        await dutyService.addDuty(req.body).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[dutyManagementController: addDuty() Error]')
            return res.status(500).json({
                status:{
                    code: 500,
                    name: "Error",
                    message: "Error get user"
                },
                payload: err
            })
        });
    } catch {
        console.log('[dutyManagementController: addDuty() Error]')
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

