import Express from 'express'
import Mongoose from 'mongoose'
import path from 'path'
import config from '@config'
import v1Router from '@routes'

import WebpackConfig from '../webpack.config'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import bodyParser from 'body-parser'

Mongoose.connect(config.databaseUri, { useNewUrlParser: true })

const app = Express()

app.use(bodyParser.json())

const compiler = webpack(WebpackConfig)

app.use(WebpackDevMiddleware(compiler,{
    hot:true,
    publicPath: WebpackConfig.output.publicPath
}))

app.use(WebpackHotMiddleware(compiler))

app.use(v1Router)

app.use(Express.static(path.resolve(__dirname,'public')))

app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
    console.log('server started yes')
})
