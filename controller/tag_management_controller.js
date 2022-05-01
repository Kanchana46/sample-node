const tagService = require('../service/tag_management_service');

exports.assignTag = async function(req, res, next) {
    console.log('[tagManagementController: assignTag()]')
    try {
        await tagService.assignTag(req.body).then((data, err) =>{
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                payload: data
            })
        }).catch(err => {
            console.log('[tagManagementController: assignTag() Error]')
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
        console.log('[tagManagementController: assignTag() Error]')
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


exports.getSiteDetails = async function(req, res, next) {
    console.log('[tagcontroller: getSiteDetails()]')
    try {
        await tagService.getSiteDetails().then((data, err) =>{
           
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                
                payload: data
               
            })
        }).catch(err => {
            console.log('[tagcontroller: getSiteDetails() Error]')
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
        console.log('[tagcontroller: getSiteDetails() Error]')
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



exports.getAreaDetails = async function(req, res, next) {
    console.log('[tagcontroller: getAreaDetails()]')
    try {
        await tagService.getAreaDetails().then((data, err) =>{
           
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                
                payload: data
               
            })
        }).catch(err => {
            console.log('[tagcontroller: getAreaDetails() Error]')
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
        console.log('[tagcontroller: getAreaDetails() Error]')
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


exports.getDutyDetails = async function(req, res, next) {
    console.log('[tagcontroller: getDutyDetails()]')
    try {
        await tagService.getDutyDetails().then((data, err) =>{
           
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                
                payload: data
               
            })
        }).catch(err => {
            console.log('[tagcontroller: getDutyDetails() Error]')
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
        console.log('[tagcontroller: getDutyDetails() Error]')
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


exports.getTagDetails = async function(req, res, next) {
    console.log('[tagcontroller: getTagDetails()]')
    try {
        await tagService.getTagDetails().then((data, err) =>{
           
            return res.status(200).json({
                status:{
                    code: 200,
                    name: "Success",
                    message: "Success get user"
                },
                
                payload: data
               
            })
        }).catch(err => {
            console.log('[tagcontroller: getTagDetails() Error]')
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
        console.log('[tagcontroller: getTagDetails() Error]')
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




