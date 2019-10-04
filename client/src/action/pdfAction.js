import { DOWNLOAD_PDF, GET_PDF, PDF_ERROR, SET_LOADING } from './types';
import axios from 'axios';
import { saveAs } from 'file-saver';

export const downloadpdf = () => async dispatch => {
  try {
    setLoading();
    const config = {
      headers: {
        'Content-type': 'application/pdf'
      }
    };

    const res = await axios.post('/api/downloadpdf', config);

    dispatch({
      type: DOWNLOAD_PDF,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PDF_ERROR
    });
  }
};

export const getdownloadpdf = () => async dispatch => {
  try {
    setLoading();

    const pdfBlob = new Blob([]);

    const res = await axios.get(
      '/api/downloadpdf',
      { responseType: 'blob' },
      saveAs(pdfBlob, 'newPdf.pdf')
    );

    dispatch({
      type: GET_PDF,
      payload: res.data
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
