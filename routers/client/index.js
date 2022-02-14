const customer = require('./customer.route')
const template = require('./template.route')
const compaign = require('./compaign.route')
const cus_compaign = require('./cus_compaign.route')
const history = require('./history.route')
const login = require('./login.route')
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
    app.use(url + "templates", template);
    app.use(url + "compaigns", compaign);
    app.use(url + "cus_compaigns", cus_compaign);
    app.use(url + "histories", history);
    app.use(url + "logins", login);
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