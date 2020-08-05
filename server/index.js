import Express from 'express'
import Mongoose from 'mongoose'
import path from 'path'
import config from '@config'
import v1Router from '@routes'

import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'

Mongoose.connect(config.databaseUri, { useNewUrlParser: true })

const app = Express()

const compiler = webpack(WebpackConfig)

app.use(WebpackDevMiddleware(compiler))

app.use(v1Router)

app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
    console.log('server started yes')
})
