<!--start-code-->

```js
import { DatePicker } from 'cen-suite';

const App = () => (
  <>
    <DatePicker appearance="default" placeholder="Default" style={{ width: 200 }} />
    <hr />
    <DatePicker appearance="subtle" placeholder="Subtle" style={{ width: 200 }} />
  </>
);
ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
