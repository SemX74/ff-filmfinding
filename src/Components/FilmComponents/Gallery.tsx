interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  return (
    <>
      <section className="Gallery-info">
        <p>Gallery</p>
        <p>
          <span>FullHD</span> 120mit
        </p>
        <p>Descriptio</p>
        <p></p>
      </section>
      <section className="Gallery-footer">
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </section>
    </>
  );
};

export default Gallery;
