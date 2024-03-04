/* eslint-disable no-undef */
require('dotenv').config();
const app = require("./app");
app.listen(process.env.PORT, () => {
  console.log(`Started express server at port ${process.env.PORT} || 3000`);
});
