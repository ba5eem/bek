module.exports = function(sequelize,DataTypes){
  var Shift = sequelize.define('shift',{
    startTime:{
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    date:{
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    details:{
      type: DataTypes.TEXT
    },
    postedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    acceptedBy: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  })
    return Shift;

  }

