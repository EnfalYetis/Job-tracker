require('dotenv').config();

const errorHandler = require('./src/middlewares/errorHandler');

const app = require('./src/app');

const PORT = 3000;
console.log("JWT:", process.env.JWT_SECRET);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server çalışıyor: ${PORT}`);
});

