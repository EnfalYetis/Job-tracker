require('dotenv').config();
const app = require('./src/app.js');

const PORT = 3000;

console.log(app);

app.listen(PORT, () => {
  console.log(`Server çalışıyor: ${PORT}`);
});