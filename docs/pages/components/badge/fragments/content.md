<!--start-code-->

```js
import { Badge, Button } from 'cen-suite';

const App = () => (
  <>
    <Badge content={999}>
      <Button>New Message</Button>
    </Badge>

    <Badge content="NEW">
      <Button>New Message</Button>
    </Badge>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
