import React from 'react';
import { render } from 'react-dom';
import { clipboard, ipcRenderer } from 'electron';

const writeToClipboard = content => {
  clipboard.writeText(content);
};

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      clippings: [
        {
          content: 'Lol',
          id: 123,
        },
      ],
    };

    this.addClipping = this.addClipping.bind(this);
    this.handleWriteToClipboard = this.handleWriteToClipboard.bind(this);
    // require('crontab').load(function(err, crontab) {

    //   //var job = crontab.create('uuencode /Users/tobiasbecker/Desktop/testing/test1.txt testing.txt | mail -s "Test attachment" cronwizard@gmail.com', '* * * * *', 'comment 1');
    //   // command without attachment: var job = crontab.create('echo "Hello World" | mail -s "Test email" cronwizard@gmail.com', '* * * * *', 'comment 1');
    //   //command to send attachment: ~ uuencode /Users/tobiasbecker/Desktop/testing/test1.txt testing.txt | mail -s "Test attachment" cronwizard@gmail.com

    //   //REMOVE
    //   crontab.remove({command:'uuencode /Users/tobiasbecker/Desktop/testing/test1.txt testing.txt | mail -s "Test attachment" cronwizard@gmail.com', comment:/comment 1/})

    //   //SAVE AFTER CREATE AND/OR REMOVE
    //   crontab.save(function(err, crontab) {
    //     });
    // });
  }

  componentDidMount() {
    ipcRenderer.on('create-new-clipping', this.addClipping);
  }

  addClipping() {
    const { clippings } = this.state;

    const content = clipboard.readText();
    const id = Date.now();

    const clipping = { id, content };

    this.setState({
      clippings: [clipping, ...clippings],
    });
  }

  handleWriteToClipboard() {
    const clipping = this.state.clippings[0];
    if (clipping) writeToClipboard(clipping);
  }

  render() {
    return (
      <div className="container">
        <header className="controls">
          <button id="copy-from-clipboard" onClick={this.addClipping}>
            Copy from Clipboard
          </button>
        </header>

        <section className="content">
          <div className="clippings-list">
            {this.state.clippings.map(clipping => (
              <Clipping content={clipping.content} key={clipping.id} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

const Clipping = ({ content }) => {
  return (
    <article className="clippings-list-item">
      <div className="clipping-text" disabled>
        {content}
      </div>
      <div className="clipping-controls">
        <button onClick={() => writeToClipboard(content)}>
          &rarr; Clipboard
        </button>
        <button>Update</button>
      </div>
    </article>
  );
};

render(<Application />, document.getElementById('application'));
