import express from 'express'
import cors from 'cors'

import router from './routes/routes.index'

const app = express()
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());

app.use('/', router)

export default app