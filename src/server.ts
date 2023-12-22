import mongoose from "mongoose";
import app from './app'
import config from './config/index'

const dbConnection = () => {
    try {
        mongoose.connect(config.database_url as string);
        console.log('database connection successful');
        app.listen(config.port, () => {
            console.log('server listening on port ', config.port);
        })
    } catch (error) {
        console.log('Failed to connect database')
    }
}

dbConnection()