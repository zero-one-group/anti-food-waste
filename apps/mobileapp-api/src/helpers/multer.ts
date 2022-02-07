import multer from 'fastify-multer';

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|webp|WEBP)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, Date.now() + '-' + file.originalname);
};

const limitsUpload = {
  fileSize: 1000000,
  files: 1,
};

export const upload = multer({
  dest: 'apps/mobileapp-api/src/uploads',
  fileFilter: imageFilter,
  limits: limitsUpload,
});
