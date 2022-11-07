import React from 'react'
import UseCallbackComponent from './examples/useCallback';
import UseContextComponent from './examples/useContextComponent';
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
      {/* <UseMemoComponent /> */}
      {/* <UseCallbackComponent /> */}
      <UseContextComponent />
    </div>
  );
}

export default App;
