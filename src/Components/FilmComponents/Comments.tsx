interface CommentsProps {}

const Comments: React.FC<CommentsProps> = () => {
  return (
    <>
      <section className="Comments-info">
        <p>Comments</p>
        <p>
          <span>FullHD</span> 120mit
        </p>
        <p>Descriptio</p>
        <p></p>
      </section>
      <section className="Comments-footer">
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

export default Comments;
