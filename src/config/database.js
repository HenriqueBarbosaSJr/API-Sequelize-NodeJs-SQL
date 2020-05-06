module.exports = { 
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password:'123456',
    database: 'sqlmode',
    define:{
        timestamps: true,
        underscored: true,
    }
}