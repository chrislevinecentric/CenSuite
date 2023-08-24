<!--start-code-->

```js
import { DatePicker } from 'cen-suite';

const App = () => (
  <>
    <DatePicker oneTap style={{ width: 200 }} />
    <hr />
    <DatePicker oneTap format="yyyy-MM" style={{ width: 200 }} />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
