<!--start-code-->

```js
import { CheckTreePicker, Button } from 'cen-suite';
import { mockTreeData } from './mock';

const data = mockTreeData({
  limits: [3, 3, 4],
  labels: (layer, value, faker) => {
    const methodName = ['jobArea', 'jobType', 'firstName'];
    return faker.person[methodName[layer]]();
  }
});

const App = () => (
  <>
    <CheckTreePicker data={data} style={{ width: 280 }} toggleAs={Button} />
    <hr />
    <CheckTreePicker data={data} block style={{ width: 280 }} toggleAs={Button} />
  </>
);
ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
