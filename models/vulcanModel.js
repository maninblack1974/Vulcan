// const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const servicePro = sequelize.define("servicePro", {
        servicePro_firstName: {
            type: DataTypes.STRING
        },
        servicePro_lastName: {
            type: DataTypes.STRING
        },
        servicePro_email: {
            type: DataTypes.STRING
        },
        servicePro_userPassword: {
            type: DataTypes.STRING
        },
        servicePro_companyName: {
            type: DataTypes.STRING
        },
        servicePro_url: {
            type: DataTypes.STRING
        },
        servicePro_category: {
            type: DataTypes.STRING
        },
        servicePro_address: {
            type: DataTypes.STRING
        },
        servicePro_city: {
            type: DataTypes.STRING
        },
        servicePro_state: {
            type: DataTypes.STRING,
            },
        servicePro_zipCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        servicePro_profileImg: {
            type: DataTypes.BLOB("long")
        }
    });
    

    // ServicePro.prototype.validPassword = function(servicePro_userPassword) {
    //     return bcrypt.compareSync(servicePro_userPassword, this.servicePro_userPassword);
    //   };

    //   ServicePro.addHook("beforeCreate", servicePro => {
    //     servicePro.servicePro_userPassword = bcrypt.hashSync(
    //         servicePro.servicePro_userPassword,
    //       bcrypt.genSaltSync(10),
    //       null
    //     );
    //   });

    //   ServicePro.addHook("beforeUpdate", (servicePro, options) => {
    //     if (options.fields[0] === "password") {
    //       console.log("re-encrypt the password");
    //       servicePro.servicePro_userPassword = bcrypt.hashSync(
    //         servicePro.servicePro_userPassword,
    //         bcrypt.genSaltSync(10),
    //         null
    //       );
    //     }
    //   });
    //   servicePro.associate = function(models) {
    //     User.hasMany(models.Score, {
    //       onDelete: "cascade"
    //     });
    //   };
    return servicePro;
}