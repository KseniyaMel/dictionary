import { IGlossary } from "../../data/IGlossary";
import { Word } from "../../components/Word/Word";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/Loading/Loading";

export const Glossary: React.FC = () => {
  const [words, setWords] = useState<IGlossary[] | null>(null);

  const callBackendAPI = async () => {
    const response = await fetch('/glossary');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  useEffect(() => {
    callBackendAPI()
      .then(res => setWords(res))
      .catch(err => console.log(err));
  }, []);

  if (words === null) {
    return <LoadingScreen />;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 20 }}>
      {words.map((word) => <Word word={word} key={word.id} />)}
    </div>
  )
}