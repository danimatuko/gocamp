import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
	}
});

const checkFileType = (req, file, cb) => {
	const filetypes = /jpg|jpeg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase());
	const mimeType = filetypes.test(file.mimeType);
	if (extname && mimeType) {
		cb(file, true);
	} else {
		cb("Images only");
	}
};

var upload = multer({ storage: storage });

// const upload = multer({
// 	storage: storage
// });

router.post("/", upload.single("image"), (req, res) => res.send(`/${req.file.path}`));

export default router;
