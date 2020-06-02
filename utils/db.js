let db = (sql, parmas = null) => {
    let mysql = require('mysql')
    let conn = mysql.createConnection({
        host: localhost,
        port: 3306,
        user: root,
        password: root,
        database: 'bigevent'
    })
    conn.connect()
    return new Promise((reslove, reject) => {
        conn.query(sql, parmas, (err, result) => {
            // if (err) {
            //     reject(err)
            // } else {
            //     reslove(result)
            // }
            err ? reject(err) : reslove(result)
        }).cacth((err) => {
            console.log(err)
        })
        conn.end()
    })
}