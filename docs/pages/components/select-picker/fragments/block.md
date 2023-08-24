<!--start-code-->

```js
import { SelectPicker } from 'cen-suite';

const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  item => ({ label: item, value: item })
);

const App = () => (
  <>
    <SelectPicker data={data} block />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
