<!--start-code-->

```js
import { Nav } from 'cen-suite';

const App = () => (
  <>
    <Nav justified>
      <Nav.Item active icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
    <br />
    <Nav appearance="tabs" justified>
      <Nav.Item active icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
    <br />
    <Nav appearance="subtle" justified>
      <Nav.Item active icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Solutions</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Item>About</Nav.Item>
    </Nav>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
