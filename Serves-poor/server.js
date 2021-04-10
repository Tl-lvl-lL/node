import express from 'express'

const app = express()

app.set('port', 3080)

app.use(express.urlencoded({ extended: false }))

app.listen(app.get('port'))