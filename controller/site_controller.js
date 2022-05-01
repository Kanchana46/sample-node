const siteService = require('../service/site_service');

exports.addSite = async function(req, res, next) {
    console.log('[sitecontroller: addSite()]')
    try {
        await siteService.addSite(req.body).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[sitecontroller: addSite() Error]')
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
        console.log('[sitecontroller: addSite() Error]')
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


exports.getEmployeeName = async function(req, res, next) {
    console.log('[sitecontroller: getEmployeeName()]')
    try {
        await siteService.getEmployeeName().then((data, err) =>{
           
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                
                payload: data
               
            })
        }).catch(err => {
            console.log('[sitecontroller: getEmployeeName() Error]')
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
        console.log('[sitecontroller: getEmployeeName() Error]')
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


exports.getAssignedDates = async function(req, res, next) {
    console.log('[sitecontroller: getAssignDates()]')
    try {
        await siteService.getAssignedDates().then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[sitecontroller: getAssignDates() Error]')
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
        console.log('[sitecontroller: getAssignDates() Error]')
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


