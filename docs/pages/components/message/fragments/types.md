<!--start-code-->

```js
import { Message } from 'cen-suite';

const App = () => (
  <>
    <Message type="info">Informational</Message>
    <Message type="success">Success</Message>
    <Message type="warning">Warning</Message>
    <Message type="error">Error</Message>
    <Message type="info" subTitle="Active 35m ago" border>Informational with border and subtitle</Message>
    <Message type="success" subTitle="Active 35m ago" border>Success with border and subtitle</Message>
    <Message type="warning" subTitle="Active 35m ago" border>Warning with border and subtitle</Message>
    <Message type="error" subTitle="Active 35m ago" border>Error with border and subtitle</Message>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
