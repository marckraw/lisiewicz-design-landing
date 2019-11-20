const STORYBLOK_IMAGE_SIZE_LIMIT = 4000;
const QUALITY_DEFAULT = 90;

export function resize(image, option) {
  if (image === undefined) return "";
  const imageService = "http://img2.storyblok.com";
  const path = image.replace("//a.storyblok.com", "");
  return imageService + path;
}
