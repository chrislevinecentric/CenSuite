<!--start-code-->

```js
import { Badge } from 'cen-suite';

const App = () => (
  <>
    <Badge />
    <Badge style={{ background: '#4caf50' }} />
    <Badge content="99+" />
    <Badge content="NEW" />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
