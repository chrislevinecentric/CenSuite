<!--start-code-->

```js
import { Notification, Placeholder } from 'cen-suite';

const App = () => (
  <>
    <Notification closable type="info">
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    </Notification>
    <hr />
    <Notification closable type="info" header="Informational">
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    </Notification>
  </>
);
ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
