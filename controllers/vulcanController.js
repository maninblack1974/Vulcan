const db = require('../models');
const servicePros = db.vulcan;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.servicePro_firstName) {
        res.status(400).send({
            message: "Fields cannot be empty!"
        })
        return
    }

    const servicePro = {
        servicePro_firstName: req.body.servicePro_firstName,
        servicePro_lastName: req.body.servicePro_lastName,
        servicePro_companyName: req.body.servicePro_companyName,
        servicePro_category: req.body.servicePro_category,
        servicePro_workDescription : req.body.servicePro_workDescription,
        servicePro_address: req.body.servicePro_address,
        servicePro_city: req.body.servicePro_city,
        servicePro_state: req.body.servicePro_state,
        servicePro_zipCode: req.body.servicePro_zipCode,
        servicePro_email: req.body.servicePro_email,
        servicePro_userPassword: req.body.servicePro_userPassword,
        servicePro_url: req.body.servicePro_url,
        servicePro_profileImg: req.body.servicePro_profileImg
    }

    servicePros.create(servicePro)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some errors occured while creating Service Pro!"
            })
        })


}

exports.findAll = (req, res) => {
    const company = req.query.servicePro_companyName;
    let condition = company ? {servicePro_companyName: {[Op.like]: `%${company}%`}} : null;

    servicePros.findAll( {where: condition})
    .then(data=> {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
                err.message || "Some errors occured while finding companies."

        })
    })

}

