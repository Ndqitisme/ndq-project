import { useContext } from 'react';

import { GlobalStateContext } from '~/components/GlobalState';

function useGlobalState() {
    const [globalState, dispatch] = useContext(GlobalStateContext);
    return [globalState, dispatch];
}

export default useGlobalState;
