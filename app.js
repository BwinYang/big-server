const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')
app.listen(3007, () => console('火箭启动了'))
// cors跨域解决
app.use(cors())
// 获取post请求参数
app.use(express.urlencoded({ extend: false }))
app.use('/api', require(path.join(__dirname, 'routers', 'login')))
app.use('/my/article', require(path.join(__dirname, 'routers', 'article')))
app.use('/my/article', require(path.join(__dirname, 'routers', 'category')))
app.use('/my', require(path.join(__dirname, 'routers', 'user')))
