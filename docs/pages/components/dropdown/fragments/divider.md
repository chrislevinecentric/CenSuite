<!--start-code-->

```js
import { Dropdown } from 'cen-suite';

const App = () => (
  <Dropdown title="GitHub">
    <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
      <p>Signed in as</p>
      <strong>foobar</strong>
    </Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item>Your profile</Dropdown.Item>
    <Dropdown.Item>Your stars</Dropdown.Item>
    <Dropdown.Item>Your Gists</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item>Help</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
