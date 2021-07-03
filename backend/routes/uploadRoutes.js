import express from "express";
import multer from "multer";
import path from "path";
import admin from "../middleware/adminMiddlware.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
	}
});

const checkFileType = (file, cb) => {
	const filetypes = /jpg|jpeg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase());
	const mimeType = filetypes.test(file.mimeType);
	if (extname && mimeType) {
		return cb(null, true);
	} else {
		cb("Images only");
	}
};

const upload = multer({
	storage: storage
	// fileFilter: function (req, file, cb) {
	// 	checkFileType(file, cb);
	// }
});

router.post("/", [auth, admin, upload.single("image")], (req, res) =>
	res.send(`/${req.file.path}`)
);

export default router;
