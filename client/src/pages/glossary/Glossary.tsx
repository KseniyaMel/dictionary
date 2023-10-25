import { Button, Card } from "antd";
import { Link, Outlet } from "react-router-dom";
import { IGlossary } from "../../data/IGlossary";
import { Word } from "../../components/Word/Word";

interface IWordProps {
  words: IGlossary[]
}

export const Glossary: React.FC<IWordProps> = ({ words }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 20 }}>
    {words.map((word) => <Word word={word} key={word.id} />)}
  </div>
)