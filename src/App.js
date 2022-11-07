import React from 'react'
import CustomHook from './examples/CustomHook';
import UseContextComponent2 from './examples/refactorUseContext/useContextRefactoring';
import UseCallbackComponent from './examples/useCallback';
import UseContextComponent from './examples/useContextComponent';
import UseEffectComponent from './examples/useEffect';
import UseMemoComponent from './examples/useMemo';
import UseReducerComponent from './examples/useReduser/UseReducerComponent';
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
      {/* <UseContextComponent /> */}
      {/* <UseContextComponent2 /> */}
      {/* <UseReducerComponent /> */}
      <CustomHook />
    </div>
  );
}

export default App;
