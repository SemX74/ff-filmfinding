import { useParams } from "react-router-dom";
import { useGetImagesByIdQuery } from "../../../Services/FetchFIlms";
import "./Gallery.css";
interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetImagesByIdQuery(Number(id));
  return (
    <>
      <section className="gallery">
        {data &&
          data.backdrops.map((image) => (
            <div className="gallery__scroll">
              <img
              className="gallery-scroll__image"
                src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
                alt=""
              />
            </div>
          ))}
      </section>
    </>
  );
};

export default Gallery;
