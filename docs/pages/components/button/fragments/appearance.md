<!--start-code-->

```js
import { Button, ButtonToolbar } from 'rsuite';

const App = () => (
  <div>
  <ButtonToolbar>
    <Button appearance="default">Default</Button>
    <Button appearance="primary">Primary</Button>
    <Button appearance="link">Link</Button>
    <Button appearance="subtle">Subtle</Button>
    <Button appearance="ghost">Ghost</Button>
  </ButtonToolbar>
  <ButtonToolbar>
    <Button rounded appearance="default">Default</Button>
    <Button rounded appearance="primary">Primary</Button>
    <Button rounded appearance="link">Link</Button>
    <Button rounded appearance="subtle">Subtle</Button>
    <Button rounded appearance="ghost">Ghost</Button>
  </ButtonToolbar>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
