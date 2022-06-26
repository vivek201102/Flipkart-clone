const product_controller = require("../controllers/product");
const multer = require("multer");
const path = require("path");
const router = require('express').Router();

const storagegive = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, "./image")
    },
    filename: function (req, file, cb) {
        
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
})



const upload = multer({
    storage: storagegive,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give Proper File Formate To Upload')
    }
});


router.post('/insert', upload.single("image"), product_controller.addProduct);
router.get('/getall',product_controller.getProducts);
router.get('/get/:id',product_controller.getProduct);
router.put('/update/:id',product_controller.updateProduct);
router.delete('/delete/:id', product_controller.deleteProduct);

router.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

router.post('/upload-file',upload.single("image"), product_controller.upload_file);         //For uploading image in folder
module.exports = router