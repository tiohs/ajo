"use strict";

var _express = _interopRequireWildcard(require("express"));
var _path = require("path");
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const app = (0, _express.default)();
app.use((0, _cookieParser.default)());
app.set('view engine', 'ejs');
app.set('views', (0, _path.join)(__dirname, '..', 'views'));
app.use(_express.default.static((0, _path.join)(__dirname, '..', 'views', 'public')));
app.use(_express.default.static((0, _path.join)(__dirname, '..', 'tmp')));
app.use((0, _express.urlencoded)({
  extended: false
}));
app.use((0, _cookieParser.default)());

// app.use((err, request,  response, _) => {
//   if (err instanceof AppError) {
//     return response.status(err.statusCode).json({
//       status: err.statusCode,
//       message: err.message,
//     });
//   }

//   return response.status(500).json({
//     status: 500,
//     message: 'Interno Error ',
//   });
// });

app.use((request, response) => {
  response.send('Error/404.ejs');
});
app.listen(process.env.PORT || 3333, () => {
  console.log('Port on http://localhost:3333/');
});