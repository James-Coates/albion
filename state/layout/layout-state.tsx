import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useReducer,
} from 'react';
import { Action } from '..';

export interface LayoutState {
  loading: boolean;
  headerFloat: boolean;
  headerVariant: 'default' | 'filled';
  menuOpen: boolean;
}

const initialState: LayoutState = {
  loading: true,
  headerFloat: false,
  headerVariant: 'default',
  menuOpen: false,
};

const LayoutContext = createContext(initialState);
const LayoutDispatch = createContext<Dispatch<Action>>(() => null);

const reducer = (state: LayoutState, action: Action): LayoutState => {
  switch (action.type) {
    case 'setLoading':
      console.log(action);
      return {
        ...state,
        loading: action.payload,
      };
    case 'setHeaderFloat':
      return {
        ...state,
        headerFloat: action.payload,
      };
    case 'setHeaderVariant':
      return {
        ...state,
        headerVariant: action.payload,
      };
    case 'toggleMenuOpen':
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      console.warn(`Action type ${action.type} not found`);
      return {
        ...state,
      };
  }
};

export const LayoutStateWrapper: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutDispatch.Provider value={dispatch}>
      <LayoutContext.Provider value={state}>
        {children}
      </LayoutContext.Provider>
    </LayoutDispatch.Provider>
  );
};

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export function useLayoutDispatch() {
  return useContext(LayoutDispatch);
}
