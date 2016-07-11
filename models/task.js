/**
 * Created by chapeau on 7/11/16.
 */
module.exports = function(sequelize, DataTypes){
  var Task = sequelize.define("Tasks", {
    Checked: {
        type: DataTypes.BOOLEAN,
        field: 'checked'
    },
      Text :{
          type: DataTypes.STRING
      }

  });

    return Task;
};