import galleryPicture1 from "../../assets/images/gallary/pexels1.jpg";
import galleryPicture2 from "../../assets/images/gallary/pexels2.jpg";
import galleryPicture3 from "../../assets/images/gallary/pexels3.jpg";
import galleryPicture4 from "../../assets/images/gallary/pexels4.jpg";
import galleryPicture5 from "../../assets/images/gallary/pexels5.jpg";
import galleryPicture6 from "../../assets/images/gallary/pexels6.jpg";
import galleryPicture7 from "../../assets/images/gallary/pexels7.jpg";
import galleryPicture8 from "../../assets/images/gallary/pexels8.jpg";
import galleryPicture9 from "../../assets/images/gallary/pexels9.jpg";
import galleryPicture10 from "../../assets/images/gallary/pexels10.jpg";
import galleryPicture11 from "../../assets/images/gallary/pexels11.jpg";
import galleryPicture12 from "../../assets/images/gallary/pexels12.jpg";
import galleryPicture13 from "../../assets/images/gallary/pexels13.jpg";
import galleryPicture14 from "../../assets/images/gallary/pexels14.jpg";
import galleryPicture15 from "../../assets/images/gallary/pexels15.jpg";
import "../../styles/ImageGallery.css";

const ImageGallery = () => {
  return (
    <section className="mx-auto max-w-6xl my-20 py-8">
      <div className="container mx-auto">
        <h1 className="text-center uppercase font-oswald text-sm md:text-base lg:text-2xl font-semibold tracking-widest">
          EXCLUSIVE Mosaic View
        </h1>
        <hr className="mx-auto h-[2px] bg-black opacity-100 w-[70%] md:w-[34%] lg:w-[36%]" />

        <div className="grid-wrapper mt-14">
          <div className="wide">
            <img src={galleryPicture1} alt="Gallery Image 1" />
          </div>
          <div className="tall">
            <img src={galleryPicture2} alt="Gallery Image 2" />
          </div>
          <div>
            <img src={galleryPicture3} alt="Gallery Image 3" />
          </div>
          <div>
            <img src={galleryPicture4} alt="Gallery Image 4" />
          </div>
          <div>
            <img src={galleryPicture5} alt="Gallery Image 5" />
          </div>
          <div className="big">
            <img src={galleryPicture6} alt="Gallery Image 6" />
          </div>
          <div>
            <img src={galleryPicture7} alt="Gallery Image 7" />
          </div>
          <div>
            <img src={galleryPicture8} alt="Gallery Image 8" />
          </div>
          <div>
            <img src={galleryPicture9} alt="Gallery Image 9" />
          </div>
          <div>
            <img src={galleryPicture10} alt="Gallery Image 10" />
          </div>
          <div>
            <img src={galleryPicture11} alt="Gallery Image 11" />
          </div>
          <div>
            <img src={galleryPicture12} alt="Gallery Image 12" />
          </div>
          <div>
            <img src={galleryPicture13} alt="Gallery Image 13" />
          </div>
          <div>
            <img src={galleryPicture14} alt="Gallery Image 14" />
          </div>
          <div>
            <img src={galleryPicture15} alt="Gallery Image 15" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
