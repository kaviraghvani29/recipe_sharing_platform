// const cloudinary = require("../config/cloudinary");

// exports.uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Please upload an image",
//       });
//     }

//     const result = await new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream(
//         {
//           folder: "recipe-sharing",
//           resource_type: "image",
//         },
//         (error, result) => {
//           if (error) {
//             reject(error);
//           } else {
//             resolve(result);
//           }
//         }
//       );

//       uploadStream.end(req.file.buffer);
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Image uploaded successfully",
//       imageUrl: result.secure_url,
//       publicId: result.public_id,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
