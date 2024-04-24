const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("../src/routes/userRoutes");
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello é MUNDO?');
});

mongoose.connect('mongodb+srv://gabrielvmc2:gabriel10@cluster.4ac1vw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster').then(() => {
    console.log("Conexão com o mongodb estabelecida com sucesso")
}).catch(error => {
    console.log("Erro ao conectar o mongodb", error);
});

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
});