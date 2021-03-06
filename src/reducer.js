import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurantDetails: {
    id: null,
    name: null,
    address: null,
    menuItems: [],
  },
  selectedRegion: null,
  selectedCategory: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  setRestaurantDetails(state, { payload: { restaurantDetails } }) {
    const {
      id, name, address, menuItems,
    } = restaurantDetails;

    return {
      ...state,
      restaurantDetails: {
        id,
        name,
        address,
        menuItems,
      },
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
