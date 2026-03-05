module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    instructor: DataTypes.STRING,
    price: DataTypes.FLOAT,
    duration: DataTypes.INTEGER
  })
  return Course
}
