<!--start-code-->

```js
import { Tooltip, Whisper } from 'cen-suite';

const App = () => (
  <Whisper speaker={<Tooltip> Tooltip!</Tooltip>}>
    <span>
      <Button disabled style={{ pointerEvents: 'none' }}>
        button
      </Button>
    </span>
  </Whisper>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
