module.exports = function(sequelize,DataTypes){
  var Shift = sequelize.define('shift',{
    kind:{
      type: DataTypes.STRING,
      allowNull: false
    },
    etag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    status:{
      type: DataTypes.STRING
    },
    htmlLink:{//this is a link you can edit
      type: DataTypes.STRING
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updated: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    summary:{
      type: DataTypes.STRING
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creatorEmail: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    startdatetime: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    enddatetime:{
      type: DataTypes.STRING
    },
    icalUID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creatorEmail: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  })
    return Shift;

  }

