<!--start-code-->

```js
import { Message } from 'rsuite';

const App = () => (
  <>
    <Message showIcon type="info">
      Informational
    </Message>
    <Message showIcon type="success">
      Success
    </Message>
    <Message showIcon type="warning">
      Warning
    </Message>
    <Message showIcon type="error">
      Error
    </Message>

    <Message showIcon type="info" header="Informational">
      Additional description and informations about copywriting.
    </Message>

    <Message showIcon type="success" header="Success">
      Detailed description and advices about successful copywriting.
    </Message>

    <Message showIcon type="warning" header="Warning">
      This is a warning notice about copywriting.
    </Message>

    <Message showIcon type="error" header="Error">
      This is an error message about copywriting.
    </Message>

    <Message showIcon type="info" header="Has Subtitle" subTitle="Active 35m">
      This is an error message about copywriting.
    </Message>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->