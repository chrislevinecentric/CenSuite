### Use with the button

<!--start-code-->

```js
import { DateRangePicker } from 'cen-suite';

const App = () => (
  <>
    <DateRangePicker toggleAs={Button} />
    <hr />
    <DateRangePicker block toggleAs={Button} />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
