import app from './app.js'
import connect from './db/connect.js'

import dotenv from 'dotenv'
dotenv.config({path:'./config/config.env'})

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connect(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

start()