const customer = require('./customer.route')
    // const nhomsanpham = require('./bk/nhomsanpham.route')
    // const khachhang = require('./bk/khachhang.route')
    // const dangnhap = require('./bk/dangnhap.route')
    // const dieutri = require('./bk/dieutri.route')
    // const donvitinh = require('./bk/donvitinh.route')
    // const congdichvu = require('./bk/congdichvu.route')
    // const bacsi = require('./bk/bacsi.route')
    // const chungloai = require('./bk/chungloai.route')
    // const nhomkhachhang = require('./bk/nhomkhachhang.route')
    // const banle = require('./bk/banle.route')
    // const thanhvien = require('./bk/thanhvien.route')
    // const setting = require('./bk/setting.route')
    // const giong = require('./bk/giong.route')

let initClientAPI = (app, url) => {
    // insert routers ADMIN here
    // /danhtuthems/ put post get delete
    // /customers method post -> tao customer
    // /customers method get -> lay customer
    // /customers?id=value method put -> cap nhat customer
    // /customers?id=value method delete -> xoa customer
    app.use(url + "customers", customer);
    // -> api/customers
    // app.use(url + "categories", nhomsanpham);
    // app.use(url + "customers", khachhang);
    // app.use(url + "auth", dangnhap);
    // app.use(url + "examination", dieutri);
    // app.use(url + "units", donvitinh);
    // app.use(url + "serviceplus", congdichvu);
    // app.use(url + "doctors", bacsi);
    // app.use(url + "species", chungloai);
    // app.use(url + "audience", nhomkhachhang);
    // app.use(url + "orders", banle);
    // app.use(url + "staffs", thanhvien);
    // app.use(url + "config", setting);
    // app.use(url + "kinds", giong);
}

module.exports = initClientAPI;