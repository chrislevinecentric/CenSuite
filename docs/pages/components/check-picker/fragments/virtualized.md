<!--start-code-->

```js
import { CheckPicker } from 'cen-suite';

const data = Array.from({ length: 10000 }).map((_, index) => {
  return {
    label: `Item ${index}`,
    value: `Item ${index}`
  };
});

const App = () => (
  <>
    <CheckPicker data={data} style={{ width: 224 }} virtualized />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
