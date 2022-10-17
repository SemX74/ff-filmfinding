import { useParams } from "react-router-dom";
import Spinner from "react-spinner-material";
import { useGetFilmByIdQuery } from "../../../Services/FetchFIlms";
import "./Description.scss";
import DescriptionMain from "./DescriptionMain";
import DescriptionFooter from "./Footer/DescriptionFooter";

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFilmByIdQuery(Number(id));
  return (
    <>
      {isLoading && <Spinner />}
      {data && (
        <>
          <DescriptionMain data={data} />
          <DescriptionFooter data={data} />
        </>
      )}
    </>
  );
};

export default Description;
