<!--start-code-->

```js
import { Loader, Placeholder } from 'cen-suite';

const App = () => (
  <div>
    <Placeholder.Paragraph rows={8} />
    <Loader center content="loading" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
