import multer from 'multer';
const limits = { fileSize: 500 * 1024 * 1024 }
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function(req, file, cb) {
    cb(null, file.originalname + '.mp4');
  }
});

const upload = multer(
  { 
    storage: storage,
    limits: limits,
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'video/mp4') {
        cb(null, true)
      } else {
        cb(null, false)
        return cb(new Error('Only MP4 video files are allowed.'))
      }
    }
  }
);

const uploadVideo = (req, res) => {
  return new Promise((resolve, reject) => {
    upload.single('video')(req, null, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          resolve({ code: 400, body: 'File size exceeds the limit (500Mb).' });
        } else {
          resolve({ code: 500, body: 'Error uploading file.' });
        }
      } else if (err) {
        resolve({ code: 400, body: err.message });
      } else {
        resolve({ code: 200, body: 'Video successfully uploaded!' });
      }
    });
  });
};

export { uploadVideo };