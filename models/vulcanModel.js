module.exports = (sequelize, DataTypes) => {
    const servicePro = sequelize.define("servicePro", {
        servicePro_firstName: {
            type: DataTypes.STRING
        },
        servicePro_lastName: {
            type: DataTypes.STRING
        },
        servicePro_companyName: {
            type: DataTypes.STRING
        },
        servicePro_category: {
            type: DataTypes.STRING
        },
        servicePro_workDescription: {
            type: DataTypes.STRING
        },
        servicePro_address: {
            type: DataTypes.STRING
        },
        servicePro_city: {
            type: DataTypes.STRING
        },
        servicePro_state: {
            type: DataTypes.STRING
        },
        servicePro_zipCode: {
            type: DataTypes.STRING
        },
        servicePro_phoneNumber: {
            type: DataTypes.STRING
        },
        servicePro_email: {
            type: DataTypes.STRING
        },
        servicePro_userPassword: {
            type: DataTypes.STRING
        },
        servicePro_url: {
            type: DataTypes.STRING
        },
        servicePro_profileImg: {
            type: DataTypes.BLOB
        }
    })

    return servicePro;
}