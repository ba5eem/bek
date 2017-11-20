module.exports = function(sequelize,DataTypes){
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googleid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.STRING
    },
    roleid: {
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