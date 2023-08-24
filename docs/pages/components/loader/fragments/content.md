<!--start-code-->

```js
import { Loader } from 'cen-suite';

const App = () => (
  <>
    <Loader content="Loading..." />
    <hr />
    <Loader content="vertical Loading..." vertical />
  </>
);
ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
