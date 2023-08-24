<!--start-code-->

```js
import { Popover, Whisper, Button } from 'cen-suite';

const App = () => (
  <Whisper
    placement="top"
    trigger="click"
    speaker={<Popover arrow={false}>This is a Popover without arrow indicator</Popover>}
  >
    <Button>Click</Button>
  </Whisper>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
