const sql = require('./sql');

function getProducByCatId(req,res){
    var catId = req.body.catId;
    sql.executeSQL(`select * from Sach where catId='${catId}'`, (recordset) => {
        var result = "";
        if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
            res.send("Chưa có sản phẩm");
        }
        else {
            recordset.recordsets[0].forEach(row => {
                result += `
                <ul style='display:inline;width:500px; height: 600px;float: left;background-color:white;color:black;text-align: center;margin-bottom: 20px;
                line-height: 40px;'>
                <li><a href="/detail/${row['MaSach']}"><img style="width:350px;" src='/images/${row['SachImage']}'/></a></li>
                <li style="word-wrap: break-word; width:300px;margin-left: 100px;"><b>${row['TenSach']}</b></li>
                <li><span style="color:red;font-size: 20px;"> ${row['DonGia']} Đ</span></li>
                </ul>
                `;
            });
            res.send(result);
        }
    });
}

//call api Chủ đề
// function getProducByChuDe(req,res){
//     var ChuDe = req.body.ChuDe;
//     sql.executeSQL(`select * from Sach where ChuDe= N'${ChuDe}' order by productIndex`, (recordset) => {
//         var result = "";
//         if (recordset.recordsets[0] === null || recordset.recordsets[0].length === 0) {
//             res.send("Chưa có sản phẩm");
//         }
//         else {
//             recordset.recordsets[0].forEach(row => {
//                 result += `
//                 <ul style='display:inline;width:500px; height: 600px;float: left;background-color:white;color:black;text-align: center;margin-bottom: 20px;
//                 line-height: 40px;'>
//                 <li><a href="/detail/${row['MaSach']}"><img style="width:350px;" src='/images/${row['SachImage']}'/></a></li>
//                 <li style="word-wrap: break-word; width:300px;margin-left: 100px;"><b>${row['TenSach']}</b></li>
//                 <li><span style="color:red;font-size: 20px;"> ${row['DonGia']} Đ</span></li>
//                 </ul>
//                 `;
//             });
//             res.send(result);
//         }
//     });
// }

module.exports = {
    getProducByCatId: getProducByCatId,
    getProducByChuDe: getProducByChuDe
}