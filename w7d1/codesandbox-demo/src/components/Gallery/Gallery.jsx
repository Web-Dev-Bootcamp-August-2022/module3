import Image from "../Image/Image";
import srcLinks from '../../data/images.json';

function Gallery() {
 
  return (
    <div id="gallery">
      <h2>GALLERY</h2>
      {srcLinks.map((srcLink) => {
        return <Image src={srcLink.src} />;
      })}
    </div>
  );
}

export default Gallery;