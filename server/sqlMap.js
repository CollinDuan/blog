var sqlMap = {
  // 用户
  user: {
    add: (table, datas, callback) => {
      var fields = ''
      var values = ''
      for (var k in datas) {
        fields += k + ','
        values = values + "'" + datas[k] + "',"
      }
      fields = fields.slice(0, -1)
      values = values.slice(0, -1)
      console.log(fields, values)
      return 'INSERT INTO ' + table + '(' + fields + ') VALUES(' + values + ')'
    }
  }
}
module.exports = sqlMap
