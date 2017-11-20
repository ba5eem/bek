module.exports = function (sequelize, DataTypes){
  var Role = sequelize.define('role', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Role.associate = function (models){
    Role.hasMany(models.user)
  }
  return Role;
}
