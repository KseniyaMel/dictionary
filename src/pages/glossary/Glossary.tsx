import { Word } from "../../components/Word/Word";
import data from "../../data/constants/glossary";
import './Glossary.css';

const Glossary: React.FC = () => (
  <div className="wrapper">
    {data.map((word) => <Word word={word} key={word.id} />)}
  </div>
);

export default Glossary;