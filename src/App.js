import React from 'react'
import UseEffectComponent from './examples/useEffect';
import UseMemoComponent from './examples/useMemo';
import UseRefComponent from './examples/useRef';
import UseStateComponent from './examples/useState';

function App() {
  return (
    <div>
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseRefComponent /> */}
      <UseMemoComponent />
    </div>
  );
}

export default App;
