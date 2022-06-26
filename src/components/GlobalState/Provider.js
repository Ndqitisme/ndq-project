import { useReducer } from 'react';

import Context from './Context';
import reducer, { initState } from './reducer';

function Provider({ children }) {
    const [globalState, dispatch] = useReducer(reducer, initState);

    return (
        <Context.Provider value={[globalState, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
