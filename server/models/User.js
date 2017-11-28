module.exports = function(sequelize,DataTypes){
  var User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
    },
    familyname: {
      type: DataTypes.STRING, //will use passport to serialize
    },
    givenname: {
      type: DataTypes.STRING //for toolio
    },
    googleid: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING //for toolio
    },
    phone: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    admin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

 return User;
}