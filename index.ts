import dotenv from "dotenv";
dotenv.config();

import server from './src/server'

const port = process.env.PORT || 3002

server.listen(port, () => {
    console.log('Server running on port: ' + port)
})
