<!--start-code-->

```js
import { Drawer, RadioGroup, Radio, ButtonToolbar, Button, Placeholder } from 'cen-suite';

const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};
const App = () => {
  const [backdrop, setBackdrop] = React.useState('static');
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <RadioGroup
        name="radioList"
        appearance="picker"
        inline
        value={backdrop}
        onChange={setBackdrop}
      >
        <span style={styles.radioGroupLabel}>Backdrop: </span>
        <Radio value="static">static</Radio>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </RadioGroup>
      <hr />

      <ButtonToolbar>
        <Button onClick={() => setOpen(true)}>Open</Button>
      </ButtonToolbar>
      <Drawer backdrop={backdrop} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
