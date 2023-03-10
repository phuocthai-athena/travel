var TourKhuyenmai = require('../models').TourKhuyenmai;
exports.create = (req, res) => {
    TourKhuyenmai.bulkCreate(req.body).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findall = (req, res) => {
    TourKhuyenmai.findAll({ order: [['id', 'DESC']] }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.findone = (req, res) => {
    TourKhuyenmai.findOne({ where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.delete = (req, res) => {
    TourKhuyenmai.destroy({ where: { tourId: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
exports.update = (req, res) => {
    TourKhuyenmai.update(req.body, { where: { id: req.params.id } }).then(data => {
        res.json({ data: data })
    }).catch(er => {
        throw er;
    })
}
