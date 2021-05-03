import { Tour } from '@type/tour';
import {
  createContext,
  Dispatch,
  FC,
  useContext,
  useReducer,
} from 'react';
import { Guest } from '../types/guest.model';
import { LayoutStateWrapper } from './layout/layout-state';

interface GuestDetails {
  mainGuest: Guest;
  otherGuests: Guest[] | null;
}

export interface BookingState {
  tour: Tour | null;
  guests: number | null;
  date: Date | null;
  guestDetails: GuestDetails | null;
  price: number | null;
}

export interface Action {
  type: string | null;
  payload?: any;
}

const initialState: BookingState = {
  tour: null,
  guests: null,
  date: null,
  guestDetails: null,
  price: null,
};

const AppContext = createContext<BookingState>(initialState);
const AppDispatch = createContext<Dispatch<Action>>(() => null);

const reducer = (state: BookingState, action: Action) => {
  switch (action.type) {
    case 'set':
      return {
        ...state,
        tour: action.payload.tour,
        guests: action.payload.guests,
        date: action.payload.date,
        price: action.payload.price,
      };
    case 'setNumberOfGuests':
      return {
        ...state,
        guests: action.payload.guests,
        price: action.payload.price,
      };
    case 'setGuestDetails':
      return {
        ...state,
        guestDetails: action.payload.guestDetails,
      };
    case 'setHeaderState':
      return {
        ...state,
        guestDetails: action.payload.guestDetails,
      };
    default:
      console.warn(`Action type ${action.type} not found`);
      return {
        ...state,
      };
  }
};

export const AppWrapper: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppDispatch.Provider value={dispatch}>
      <AppContext.Provider value={state}>
        <LayoutStateWrapper>{children}</LayoutStateWrapper>
      </AppContext.Provider>
    </AppDispatch.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatch);
}
