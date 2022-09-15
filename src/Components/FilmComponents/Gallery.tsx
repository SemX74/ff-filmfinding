import { useParams } from "react-router-dom";
import { useGetImagesByIdQuery } from "../../Services/FetchFIlms";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetImagesByIdQuery(Number(id));
  return (
    <>
      <section className="Gallery-info">
        {data &&
          data.backdrops.map((image) => (
            <div className="Gallery-scroll">
              <img src={`https://image.tmdb.org/t/p/w300${image.file_path}`} alt="" />
            </div>
          ))}
      </section>
    </>
  );
};

export default Gallery;
