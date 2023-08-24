<!--start-code-->

```js
import { Rate } from 'cen-suite';
import BeerIcon from '@rsuite/icons/legacy/Beer';

const App = () => (
  <Rate defaultValue={2.5} allowHalf vertical character={<BeerIcon />} color="blue" />
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
