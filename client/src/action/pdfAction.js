import { DOWNLOAD_PDF, PDF_ERROR, SET_LOADING } from './types';

export const downloadpdf = () => async dispatch => {
  try {
    setLoading();

    dispatch({
      type: DOWNLOAD_PDF
    });
  } catch (err) {
    dispatch({
      type: PDF_ERROR
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
