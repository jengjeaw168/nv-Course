module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: DataTypes.STRING,
        publishedYear: DataTypes.INTEGER,
        pages: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        category: DataTypes.STRING
    })

    return Book
}