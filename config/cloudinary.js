//cloudinary.js is a configuration file for the Cloudinary service, which is a cloud-based image and video management platform. It sets up the necessary credentials to connect to Cloudinary's API.

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'jrtf2pqy',
  api_key: process.env.API_KEY || '758972999116539',
  api_secret: process.env.API_SECRET || 'c-xaErRdoPrN3OO1Xy3rUEGAhZI',
});

export default cloudinary;