import dimensions from "../data/image-sizes.json";

export default function CafeImage({
  image,
  alt,
  priority = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
  ...props
}) {
  const { width, height } = dimensions[image];
  const base = `${import.meta.env.BASE_URL}images/${image}`;
  return (
    <img
      {...props}
      src={`${base}-640.webp`}
      srcSet={`${base}-640.webp ${Math.min(640, width)}w, ${base}-1280.webp ${Math.min(1280, width)}w`}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
