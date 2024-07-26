/*
 * @Author: BINGWU
 * @Date: 2024-07-26 10:56:41
 * @LastEditors: hujiacheng hujiacheng@iipcloud.com
 * @LastEditTime: 2024-07-26 11:42:18
 * @FilePath: \my-app\index.js
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
const express = require('express')
const app = express()
const port = 8888
const cors = require('cors')
app.use(cors()) /
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/vvv', (req, res) => {
  res.send('Hello World!vvv')
})

// GET 请求，获取单个项目
app.get('/api/items/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `获取项目 ${id}` })
})

// POST 请求，创建新项目
app.post('/api/items', (req, res) => {
  const newItem = req.body
  res.json({ message: '创建新项目', item: newItem })
})

// PUT 请求，更新项目
app.put('/api/items/:id', (req, res) => {
  const { id } = req.params
  const updatedItem = req.body
  res.json({ message: `更新项目 ${id}`, item: updatedItem })
})

// DELETE 请求，删除项目
app.delete('/api/items/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `删除项目 ${id}` })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})