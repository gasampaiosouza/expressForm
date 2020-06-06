"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(cors_1.default());
// run css
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/form', function (req, res) {
    return res.sendFile(path_1.default.join(__dirname, '../public/view/index.html'));
});
app.get('/form/submit', function (req, res) {
    var _a = req.query, username = _a.username, password = _a.password, email = _a.email;
    return res.json({
        username: username,
        password: password,
        email: email,
    });
});
app.post('/form/submit', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password, email = _a.email;
    return res.redirect("/form/submit/?username=" + username + "&password=" + password + "&email=" + email);
});
app.listen(3232);
