"use strict";
// file upload using multer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
// Path: server/src/lib/fileUpload.ts
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
// Set storage engine
const storage = multer_1.default.diskStorage({
    destination: 'public/images/',
    filename: (req, file, cb) => {
        cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
    },
});
// Init upload
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
});
exports.upload = upload;
// Check file type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb('Error: Images Only!');
    }
}
//# sourceMappingURL=imageUpload.js.map