import { Button, Card } from "antd";
import { Link, Outlet } from "react-router-dom";
import { IGlossary } from "../../data/IGlossary";
import Meta from "antd/es/card/Meta";

interface IWordProps {
  word: IGlossary
}

export const Word: React.FC<IWordProps> = ({ word }) => (
  <Card size="small" title={word.word} hoverable>
    <p>{word.meaning}</p>
    <p style={{ color: 'grey', fontSize: 10 }}>{word.source}</p>
  </Card>
)