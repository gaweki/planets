import {
  Planet, Meta, PlanetDispatchTypes, PLANET_FAIL, PLANET_INIT, PLANET_LOADING, PLANET_SUCCESS,
} from '../actions/PlanetActionTypes';

interface DefaultStateType {
    loading: boolean,
    planets: Planet[],
    wishlist: Planet[],
    meta: Meta,
}

const defaultState: DefaultStateType = {
  loading: false,
  planets: [],
  wishlist: [],
  meta: {
    count: 0,
  },
};

const PlanetReducer = (
  state: DefaultStateType = defaultState,
  action: PlanetDispatchTypes = { type: PLANET_INIT },
) => {
  switch (action.type) {
    case PLANET_INIT:
      return defaultState;
    case PLANET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PLANET_FAIL:
      return {
        ...state,
        loading: false,
      };
    case PLANET_SUCCESS: {
      const { planets: _planets, meta } = action.payload;
      return {
        ...state,
        loading: false,
        meta,
        planets: !meta.previous ? _planets : [...state.planets, ..._planets],
      };
    }
    default:
      return { ...state };
  }
};

export default PlanetReducer;
