import { Word } from "../../components/Word/Word";
import data from "../../data/constants/glossary";

export const Glossary: React.FC = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 20 }}>
    {data.map((word) => <Word word={word} key={word.id} />)}
  </div>
);