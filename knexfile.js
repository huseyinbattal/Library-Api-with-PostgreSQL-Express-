module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "books",
            user: "admin",
            password:"admin"
        },
        migrations: {
            directory:"./data/migrations"
        },
        seeds: {
            directory:"./data/seeds"
        },
        production: {
            
        }
    }
}