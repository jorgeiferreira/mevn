import dotenv from 'dotenv'

dotenv.config()

export default {
    databaseUri:
        process.env.DATABASE_URL || 'mongodb://localhost:27017/mevnmongo',
    
    url: process.env.APP_URL || 'http://localhost:3000',
}
