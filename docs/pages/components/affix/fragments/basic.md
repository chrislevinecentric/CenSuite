<!--start-code-->

```js
import { Affix, Button, Placeholder } from 'cen-suite';

const App = () => (
  <>
    <Affix>
      <Button appearance="primary">Top 0</Button>
    </Affix>
    <Placeholder.Paragraph rows={6} />
  </>
);
ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
