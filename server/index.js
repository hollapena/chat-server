const express = require("express");
const app = express();
const mc = require("./controllers/messages_controller");

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const baseURL = "/api/messages";
app.post(baseURL, mc.create);
app.get(baseURL, mc.read);
app.put(`${baseURL}/:id`, mc.update);
app.delete(`${baseURL}/:id`, mc.delete);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server Rockin and Rollin on ${PORT}`);
});
