import { DOWNLOAD_PDF, PDF_ERROR, SET_LOADING } from '../action/types';

const initialState = {
  pdf: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
