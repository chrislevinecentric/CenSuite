<!--start-code-->

```js
import { InputNumber } from 'cen-suite';

const App = () => (
  <div style={{ width: 160 }}>
    <label>Disabled:</label>
    <InputNumber disabled defaultValue={10} />
    <hr />
    <label>Read only:</label>
    <InputNumber readOnly defaultValue={10} />

    <hr />
    <label>Plaintext</label>
    <InputNumber plaintext defaultValue={10} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
