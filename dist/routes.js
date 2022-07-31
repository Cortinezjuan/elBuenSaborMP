"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import postMP from "./mercado_pago";
const controller_1 = require("./controller/controller");
const router = (0, express_1.Router)();
router.get('/:idPedido/:totalCompra', function (req, res) {
    let idPedido = req.params.idPedido;
    let totalCompra = req.params.totalCompra;
    console.log(idPedido);
    //console.log(totalCompra);
    var html = "";
    var html = '<html>' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<link rel="stylesheet" href="http://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">' +
        '</head>' +
        '<body>' +
        '<div class="container">' +
        '<div class="row" id="row">' +
        '<div class="col-md-6 offset-3">' +
        '<div class="card">' +
        '<div class="card-header">' +
        '<h5>Pedido N° ' + idPedido + '</h5>' +
        '</div>' +
        '<div class="card-body">' +
        '<div style="text-align: center;">' +
        '<img src="https://i.imgur.com/wbmEccO.png" width="300" height="150">' +
        '</div>' +
        '<hr>' +
        '<hr>' +
        '<h4>Precio $' + totalCompra + ' </h4>' +
        '<div>' +
        '<form action="http://localhost:3000/checkout" method="POST" target="_blank">' +
        '<input type="hidden" name="idPedido" value="Pedido N° ' + idPedido + '">' +
        '<input type="hidden" name="description" value="">' +
        '<input type="hidden" name="price" value="' + totalCompra + '">' +
        '<input type="submit" value="Comprar ahora" class="btn btn-primary btn-block">' +
        ' </form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        ' </body>' +
        '</html>';
    res.send(html);
});
router.post('/checkout', controller_1.postMP);
exports.default = router;
