<!--start-code-->

```js
import { InputNumber } from 'cen-suite';

const App = () => (
  <div style={{ width: 160 }}>
    <InputNumber defaultValue={10} max={100} min={10} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
