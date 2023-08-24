<!--start-code-->

```js
import { InputNumber } from 'cen-suite';

const App = () => (
  <div style={{ width: 160 }}>
    <InputNumber defaultValue={0.01} step={0.01} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
