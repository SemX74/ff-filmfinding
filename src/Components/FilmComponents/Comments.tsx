import { useParams } from "react-router-dom";
import { useGetCommentsByIdQuery } from "../../Services/FetchFIlms";

interface CommentsProps {}

const Comments: React.FC<CommentsProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCommentsByIdQuery(Number(id));
  return (
    <>
      <section className="Comments-info">
        {data &&
          data.results.map((comment) => (
            <section key={comment.id} className="Comment">
              <div className="userWrapper">
                <img
                  className="avatarComment"
                  src={`https://image.tmdb.org/t/p/w300${comment.author_details.avatar_path}`}
                  alt=""
                />
                <div className="infoUser_wrapper">
                  <p className="infoUserName">{comment.author}</p>
                  <p className="infoUserUsername">
                    {comment.author_details.username}
                  </p>
                </div>
              </div>
              <p>{comment.content}</p>
              <p>Rated: {comment.author_details.rating || "No Rate"}</p>
            </section>
          ))}
        {data?.results.length === 0 && (
          <h5 className="NoComments">No comments yet</h5>
        )}
      </section>
    </>
  );
};

export default Comments;
