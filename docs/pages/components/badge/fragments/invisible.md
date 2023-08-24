<!--start-code-->

```js
import { Badge, Button, Toggle } from 'cen-suite';

const App = () => {
  const [content, setContent] = React.useState(true);

  return (
    <>
      <Badge content={content}>
        <Button>新消息</Button>
      </Badge>
      <hr />
      <Toggle checked={content} onChange={setContent} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
