import path from 'path';
import multer from 'multer';
import { randomBytes } from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename: (req, file, callback) => {
      const name = randomBytes(8).toString('hex');
      const fullName = `${name}-${file.originalname}`;

      return callback(null, fullName);
    }
  })
}