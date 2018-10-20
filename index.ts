import Xonomy = require("./src/app/xonomy.js");
import "./src/assets/css/xonomy.css";
// to get the index.html in the dist
import 'file-loader?name=[name].[ext]!./src/app/index.html';
export = Xonomy
