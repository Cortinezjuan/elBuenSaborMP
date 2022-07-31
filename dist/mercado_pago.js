"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mercadopago_1 = __importDefault(require("mercadopago"));
const app = (0, express_1.default)();
// SDK de Mercado Pago
//middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Agrega credenciales
mercadopago_1.default.configure({
    access_token: 'TEST-7915539618719448-050900-37d558bd1d32a29b86380a65a73094df-96867950'
});
//routes
app.post('/checkout', (req, res) => {
    // Crea un objeto de preferencia
    let preference = {
        back_urls: {
            success: "https://localhost/MercadoPago/success.html",
            failure: "https://localhost/MercadoPago/failure.html",
            pending: "https://localhost/MercadoPago/pending.html"
        },
        auto_return: "approved",
        external_reference: "1800",
        items: [
            {
                title: req.body.title,
                description: req.body.description,
                unit_price: parseFloat(req.body.price),
                quantity: 1,
            }
        ]
    };
    mercadopago_1.default.preferences.create(preference)
        .then(function (response) {
        console.log(response.body);
        res.redirect(response.body.init_point);
    }).catch(function (error) {
        console.log(error);
    });
});
//server
app.listen(3000, () => {
    console.log("Server on port 3000");
});
