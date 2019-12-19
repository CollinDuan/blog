const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')
// 连接数据库
const conn = mysql.createConnection(models.mysql)
const table = 'user'
conn.connect()
let jsonWrite = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}
let tableQuery = (sql, res) => {
  conn.query(sql, function (err, result) {
    if (err) {
      console.log('添加失败' + err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
}
let callback = (req, res) => {
  let sql = $sql.user.add(table, req.body)
  tableQuery(sql, res)
}
// 增加用户接口
router.post('/addUser', callback)

module.exports = router
