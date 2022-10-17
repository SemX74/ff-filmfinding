import { useParams } from "react-router-dom";
import { useGetCommentsByIdQuery } from "../../../Services/FetchFIlms";
import "./Comments.scss";
interface CommentsProps {}

const Comments: React.FC<CommentsProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCommentsByIdQuery(Number(id));
  return (
    <>
      <section className="comments">
        {data &&
          data.results.map((comment) => (
            <section key={comment.id} className="comments__comment">
              <div className="comment__user-wrapper">
                <img
                  className="comment-user__avatar"
                  src={`https://image.tmdb.org/t/p/w300${comment.author_details.avatar_path}`}
                  alt=""
                />
                <div className="comment-user-bio__wrapper">
                  <p className="comment-user-bio__name">{comment.author}</p>
                  <p className="comment-user-bio__username">
                    @{comment.author_details.username}
                  </p>
                </div>
              </div>
              <p>{comment.content}</p>
              <p>Rated: {comment.author_details.rating || "No Rate"}</p>
            </section>
          ))}
        {data?.results.length === 0 && (
          <h5 className="comments__no-comments">No comments yet</h5>
        )}
      </section>
    </>
  );
};

export default Comments;
