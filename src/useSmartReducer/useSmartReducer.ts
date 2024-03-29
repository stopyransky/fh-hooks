import { Reducer, useMemo, useReducer } from 'react';
import { Action, CustomReducer, StateSetter } from '..';
import { updateObject } from '../utils';

function baseReducer<T>(state: T, action: Action): T {
  return updateObject(state, action.type, action.value);
}

function makeReducer<T>(customReducer?: CustomReducer<T, Action>) {
  return function reducerFn(state: T, action: Action): T {
    if (typeof customReducer === 'undefined') {
      return baseReducer(state, action);
    }
    const newState = customReducer(state, action);
    if (newState === null) {
      return baseReducer(state, action);
    }
    return newState;
  };
}

/**
 * Hook works with object '{}' state only.
 * Similarly to React useState and useReducer retaining all advantages of both and less verbosity than useReducer.
 *
 * How it works:
 * the hook returns [state, setState].
 * setState accepts two arguments (type, value), where:
 * - type is the key of the state or reducer's action name,
 * - value is the new value of the portion of the state defined by type.
 * setState returns new state as provided by custom reducer.
 *
 * Rules of thumb:
 * - If customReducer is not provided it will check if first argument of setState (action.type) matches with any key in the initialState.
 * - If action.type matches with any state key then the hook will update the state with given second argument of setState (action.value).
 * - If action.value is not provided and customReducer is not given it will not change state.
 * - If customReducer is provided and it returns null as default case, then the baseReducer will be used as default.
 * - If customReducer is provided and it returns unchanged state as default case then baseReducer will not be used and state will be handled
 * exactly as per provided reducer.
 * @param initialState initial state of the reducer.
 * @param customReducer optional, custom reducer functiom
 *
 * @return [ state, setState ], where state is current state and setState is function that accepts (type: string, value?: any = null);
 */

export function useSmartReducer<T>(
  initialState: T,
  customReducer?: CustomReducer<T, Action>
): [state: T, setState: StateSetter] {
  const reducer = makeReducer(customReducer);
  const [state, dispatch] = useReducer<Reducer<T, Action>>(
    reducer,
    initialState
  );

  const setState = useMemo(
    function callback(): StateSetter {
      return function (type: string, value?: unknown): void {
        if (customReducer || typeof value !== 'undefined') {
          dispatch({ type, value });
          return;
        }
        // eslint-disable-next-line no-console
        console.error(
          `(fh-hooks) SmartReducer: Missing action.value for '${type}'. Provide the value or pass a custom reducer.`
        );

        return;
      };
    },
    [dispatch, customReducer]
  );

  return [state, setState];
}
