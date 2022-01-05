import multer from 'fastify-multer';

const imageFilter = function (req, file, cb) {
  // Accept images only
  // use is-svg for svg files https://github.com/sindresorhus/is-svg
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|webp|WEBP)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const limitsUpload = {
  fileSize: 1000000, //15MB 15*1048576
  files: 1,
};

export const upload = multer({
  dest: 'apps/mobileapp-api/src/uploads',
  fileFilter: imageFilter,
  limits: limitsUpload,
});
