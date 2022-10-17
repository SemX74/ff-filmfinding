import "./TitlePanel.scss";
interface TitlePanelProps {
  text: string;
  style?: any;
  svg?: any;
}

const TitlePanel: React.FC<TitlePanelProps> = ({ text, style, svg }) => {
  return (
    <section style={style} className="title-panel__wrapper">
      <h2 className="title-panel">
        {text}
        {svg}
      </h2>
    </section>
  );
};

export default TitlePanel;
