"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMP = void 0;
const mercadopago_1 = __importDefault(require("mercadopago"));
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
mercadopago_1.default.configure({
    access_token: 'TEST-8525872847877285-063019-384030cbf5c2f72cb3d2a810abec5b4e-172896960'
});
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
const postMP = (req, res) => {
    let preference = {
        back_urls: {
            success: "http://localhost:4200/pedidoAprobado",
        },
        auto_return: "approved",
        external_reference: req.body.idPedido,
        items: [{
                title: req.body.idPedido,
                description: req.body.description,
                unit_price: parseFloat(req.body.price),
                quantity: 1,
            }]
    };
    mercadopago_1.default.preferences.create(preference)
        .then(function (response) {
        console.log(response.body);
        res.redirect(response.body.init_point);
    }).catch(function (error) {
        console.log(error);
    });
};
exports.postMP = postMP;
