<!--start-code-->

```js
import { SelectPicker, RadioGroup, Radio } from 'cen-suite';

const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  item => ({ label: item, value: item })
);

const placements = [
  'bottomStart',
  'bottomEnd',
  'topStart',
  'topEnd',
  'leftStart',
  'leftEnd',
  'rightStart',
  'rightEnd'
];

function PreventOverflowContainer({ children, height = 500 }) {
  const container = React.useRef();
  const content = React.useRef();

  const containerStyle = {
    overflow: 'auto',
    position: 'relative'
  };

  const contentStyle = {
    height: '400%',
    width: '230%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  };

  React.useEffect(() => {
    container.current.scrollTop = content.current.clientHeight / 2 - 60;
    container.current.scrollLeft =
      content.current.clientWidth / 2 - container.current.clientWidth / 2;
  }, [container, content]);

  return (
    <div style={{ ...containerStyle, height }} ref={container}>
      <div style={contentStyle} ref={content}>
        {children(() => container.current)}
      </div>
    </div>
  );
}

const App = () => {
  const [placement, setPlacement] = React.useState('bottomStart');

  return (
    <>
      <RadioGroup
        name="radioList"
        inline
        appearance="picker"
        value={placement}
        onChange={placement => setPlacement(placement)}
      >
        {placements.map(item => (
          <Radio value={item} key={item}>
            {item}
          </Radio>
        ))}
      </RadioGroup>
      <hr />
      <PreventOverflowContainer>
        {getContainer => (
          <SelectPicker
            preventOverflow
            placement={placement}
            style={{ width: 224 }}
            container={getContainer}
            data={data}
          />
        )}
      </PreventOverflowContainer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
