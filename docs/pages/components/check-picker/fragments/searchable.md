<!--start-code-->

```js
import { CheckPicker } from 'cen-suite';

const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  item => ({ label: item, value: item })
);

const App = () => (
  <>
    <CheckPicker data={data} searchable={false} style={{ width: 224 }} />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
