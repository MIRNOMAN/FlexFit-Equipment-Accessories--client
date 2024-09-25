import Gallery from "react-photo-gallery";
import { photos } from "../../utils/ImageGalleryPhoto";

const ImageGallery = () => {
  return (
    <section className=" mx-auto max-w-6xl my-20 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold  text-center text-gray-800 mb-6">
          Mosaic View
        </h2>
        <Gallery photos={photos} />
      </div>
    </section>
  );
};

export default ImageGallery;
