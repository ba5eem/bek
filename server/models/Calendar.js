module.exports = function(sequelize,DataTypes){
  var Calendar = sequelize.define('calendar', {
    date: {
      type: DataTypes.STRING,
      defaultValue: ''
    }

  })
 return Calendar;
}