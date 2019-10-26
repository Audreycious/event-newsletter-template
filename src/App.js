import React, { useState } from 'react';
import * as style from './style';
import { Table } from './components/table';
import { LinkComp } from './components/link'
import ReactMarkdown from 'react-markdown';

const App = (props) => {
  const [markdown, setMarkdown] = useState('Please write an essay about your favorite DOM element.');

  const handleChange = ({target}) => {
    setMarkdown(target.value);
  };

  return (
    <body className="App">
      <div className="container">
        <div className="col-markdown">
          <textarea className="markdown-textarea" data-testid="textarea" type="text" name="input" value={markdown} onChange={handleChange}></textarea>
        </div>
        <div className="col-preview">
          <Table style={style.outerTableStyle}>
          <tbody>
            <tr>
                <td data-testid="child">hello</td>
            </tr>
          </tbody>
          </Table>
          <div data-testid="preview">
            <ReactMarkdown source={markdown} />
          </div>
        </div>
        <LinkComp 
          linkPath='/link-clicked'
          linkStyle={style.linkCompStyle}
        >
          Link
        </LinkComp>
      </div>
    </body>
  );
};

export default App;
