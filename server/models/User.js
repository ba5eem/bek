module.exports = function(sequelize,DataTypes){
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googleid: {
      type: DataTypes.STRING,
      unique: true
    },
    phonenumber: {
      type: DataTypes.STRING //cannot be an integer
    },
    image: {
      type: DataTypes.STRING
    }

  })
  User.associate = function(models) {
    User.hasMany(models.shift, {
      foreignKey: 'userId'
    })
  }
 return User;
}