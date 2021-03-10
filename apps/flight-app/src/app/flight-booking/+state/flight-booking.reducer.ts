import { createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-lib';

export const flightBookingFeatureKey = 'flightBooking';

export interface State {
  flights: Flight[];
}

export const initialState: State = {
  flights: []
}

export interface FlightBookingAppState {
  flightBooking: State
}


export const reducer = createReducer(
  initialState,

  on(FlightBookingActions.loadFlightBookings, state => state),
  on(FlightBookingActions.loadFlightBookingsSuccess, (state, action) => state),
  on(FlightBookingActions.loadFlightBookingsFailure, (state, action) => state),
  on(FlightBookingActions.flightsLoaded, (state, action) => {
    const flights = state.flights;
    return { ...state, flights};
  }),

);

