const express = require("express");
const app = express();
const prestashop = require("./routes/prestashop");

const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb" }));

app.use("/api", prestashop);

//app.set('views', `${__dirname}/views`);
app.listen(3001, () => {
  console.log("Sora back escuchando en: ", 3001);
});
