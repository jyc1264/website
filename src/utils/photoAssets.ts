type ImageInputFormat = "avif" | "png" | "webp" | "jpeg" | "jpg" | "svg" | "tiff" | "gif";

interface PhotoAsset {
  src: string;
  width: number;
  height: number;
  format: ImageInputFormat;
}

const photoAssetModules = import.meta.glob<{ default: PhotoAsset }>(
  "/src/assets/photos/*.{JPG,JPEG,jpg,jpeg,png,PNG,webp,WEBP}",
  { eager: true },
);

const photoAssets = new Map(
  Object.entries(photoAssetModules).map(([path, module]) => [path.split("/").at(-1), module.default]),
);

export const getPhotoAsset = (imageSrc: string): PhotoAsset => {
  const filename = imageSrc.split("/").at(-1);
  const asset = filename ? photoAssets.get(filename) : undefined;

  if (!asset) {
    throw new Error(`Missing optimized photo asset for ${imageSrc}`);
  }

  return asset;
};
