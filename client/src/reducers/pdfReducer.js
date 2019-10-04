import { DOWNLOAD_PDF, GET_PDF, PDF_ERROR, SET_LOADING } from '../action/types';

const initialState = {
  pdfs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_PDF:
      return {
        ...state,
        pdf: action.payload,
        loading: false
      };
    case GET_PDF:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case PDF_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
