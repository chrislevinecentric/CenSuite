<!--start-code-->

```js
import { Loader } from 'cen-suite';

const App = () => (
  <>
    <Loader speed="fast" content="Fast" />
    <hr />
    <Loader speed="normal" content="Normal" />
    <hr />
    <Loader speed="slow" content="Slow" />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
