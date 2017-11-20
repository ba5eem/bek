module.exports = function(sequelize,DataTypes){
  var User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    roleId: {
      type: DataTypes.INTEGER
    }

  })
  User.associate = function(models) {
    User.hasMany(models.shift, {
      foreignKey: 'userId'
    })
  }
 return User;
}