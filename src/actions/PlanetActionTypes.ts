export const PLANET_INIT = 'PLANET_INIT';
export const PLANET_LOADING = 'PLANET_LOADING';
export const PLANET_FAIL = 'PLANET_FAIL';
export const PLANET_SUCCESS = 'PLANET_SUCCESS';
export const PLANET_DETAIL_GET = 'PLANET_DETAIL_GET';
export const PLANET_DETAIL_SUCCESS = 'PLANET_DETAIL_SUCCESS';
export const PLANET_DETAIL_FAIL = 'PLANET_DETAIL_FAIL';
export const PLANET_WISHLIST_TOGGLE = 'PLANET_WISHLIST_TOGGLE';

export type Planet = {
    climate: string,
    created: string,
    diameter: string;
    gravity: string;
    name: string;
    population: string;
    residents: string,
    terrain: string;
}

export type Meta = {
    count: number;
    next?: string;
    previous?: string;
}

interface PayloadListSuccess {
    planets: Planet[],
    meta: Meta
}

interface PlanetInit {
    type: typeof PLANET_INIT
}

interface PlanetLoading {
    type: typeof PLANET_LOADING
}

interface PlanetSuccess {
    type: typeof PLANET_SUCCESS,
    payload: PayloadListSuccess,
}

interface PlanetFail {
    type: typeof PLANET_FAIL
}

interface PlanetDetail {
    type: typeof PLANET_DETAIL_GET
}

interface PlanetDetailSuccess {
    type: typeof PLANET_DETAIL_SUCCESS,
    payload: Planet
}

interface PlanetDetailFail {
    type: typeof PLANET_DETAIL_FAIL
}

interface PlanetWishlist {
    type: typeof PLANET_WISHLIST_TOGGLE,
    payload: Planet
}

export type PlanetDispatchTypes = PlanetLoading | PlanetInit | PlanetSuccess | PlanetFail |
    PlanetDetail | PlanetDetailSuccess | PlanetDetailFail | PlanetWishlist;
