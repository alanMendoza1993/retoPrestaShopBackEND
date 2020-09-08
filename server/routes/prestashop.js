const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { default: Axios } = require("axios");

const app = express();

app.get("/public/getOrders", function (req, res) {
  const { userprestashop, domain } = process.env;

  Axios.get(
    `https://${domain}/api/orders/?ws_key=${userprestashop}&output_format=JSON`
  )
    .then((response) => {
      return res.json(response.data).status(200);
    })
    .catch((err) => {
      console.log("Error: " + err);
      return res
        .json({
          ok: false,
          mensaje: "Error al enviar documentos",
          err,
        })
        .status(500);
    });
});
app.get("/public/getOrder/:id", function (req, res) {
  const { userprestashop, domain } = process.env;
  var id = req.params.id;
  Axios.get(
    `https://${domain}/api/orders/${id}/?ws_key=${userprestashop}&output_format=JSON`
  )
    .then((response) => {
      return res.json(response.data).status(200);
      //return res.json({ ok: true, documentos: "documentos enviados" });
    })
    .catch((err) => {
      console.log("Error: " + err);
      return res.json({
        ok: false,
        mensaje: "Error al enviar documentos",
        err,
      });
    });
});
module.exports = app;
