<!--start-code-->

```js
import { Rate } from 'cen-suite';

const App = () => (
  <>
    <div>
      <Rate defaultValue={5} color="red" />
    </div>
    <div>
      <Rate defaultValue={4} color="orange" />
    </div>
    <div>
      <Rate defaultValue={3} color="yellow" />
    </div>
    <div>
      <Rate defaultValue={2} color="green" />
    </div>
    <div>
      <Rate defaultValue={3} color="cyan" />
    </div>
    <div>
      <Rate defaultValue={4} color="blue" />
    </div>
    <div>
      <Rate defaultValue={5} color="violet" />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
