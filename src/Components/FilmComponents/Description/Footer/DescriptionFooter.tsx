import { FilmDescription } from "../../../../Services/Interfaces/Interfaces";
import "./DescriptionFooter.scss";

interface DescriptionFooterProps {
  data: FilmDescription;
}

const DescriptionFooter: React.FC<DescriptionFooterProps> = ({ data }) => {
  return (
    <footer className="description-footer">
      <div className="description-footer__companies-wrapper description-footer__column">
        <p className="description-footer-companies-wrapper__title">
          Production companies
        </p>
        <div className="description-footer__companies">
          {data.production_companies.map((company) => (
            <div className="description-footer-companies__company">
              {company.logo_path ? (
                <img
                  className="description-footer-companies-company__image"
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt=""
                />
              ) : (
                <div className="description-footer-companies-company__no-image">
                  No Image :/
                </div>
              )}

              <p className="description-footer-companies__company-name">
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="description-footer__original-language description-footer__column">
        <p className="description-footer-original-language__title">
          Original language
        </p>
        <p className="description-footer-original-language__info">
          {data.original_language}
        </p>
      </div>
    </footer>
  );
};

export default DescriptionFooter;
