const areaService = require('../service/area_management_service');

exports.addArea = async function(req, res, next) {
    console.log('[areaManagementController: addArea()]')
    try {
        await areaService.addArea(req.body).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[areaManagementController: addArea() Error]')
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
        console.log('[areaManagementController: addArea() Error]')
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

