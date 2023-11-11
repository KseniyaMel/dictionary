import { Card } from "antd";
import { IGlossary } from "../../data/IGlossary";

interface IWordProps {
  word: IGlossary
}

export const Word: React.FC<IWordProps> = ({ word }) => (
  <Card size="small" title={word.word} hoverable>
    <p>{word.meaning}</p>
    <p style={{ color: 'grey', fontSize: 10 }}>{word.source}</p>
  </Card>
)