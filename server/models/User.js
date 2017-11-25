module.exports = function(sequelize,DataTypes){
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googleid: {
      type: DataTypes.STRING, //will use passport to serialize
      unique: true
    },
    phonenumber: {
      type: DataTypes.STRING //for toolio
    },
    image: {
      type: DataTypes.STRING
    }

  })
 return User;
}