/**
 * Cloudinary helper (placeholder). Configure with environment variables and
 * use signed/unsigned upload presets that perform automatic square cropping/resizing.
 */
import cloudinary from 'cloudinary'

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env
cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

export function uploadOptionsForSquarePreset() {
  return {
    // Example: transformation: [{ width: 800, height: 800, crop: 'fill' }]
  }
}

export default cloudinary.v2
