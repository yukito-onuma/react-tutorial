import { List } from "./list";
import { useState } from 'react';
import { Form } from './form';

function App() {
  const [description, setDescription] = useState('クリック前の表示')
  const [tab, setTab] = useState('list');

  const changeDescription = () => {
    setDescription('クリック後の表示です。')
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('tab')}>フォーム</li>
        </ul>
      <hr />
      </header>
      { description }
      {
        tab === 'list' ? <List title="使用する言語一覧" /> : <Form />
      }
      <button onClick={ changeDescription }>ボタン</button>
    </div>
  );
}

export default App;
