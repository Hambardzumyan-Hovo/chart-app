import { getCompanyNames, getDataByCompanyname } from '../../api/requests';

const initialState = { companies: [], predictedData: [], receivedData: [], companyName: '' };
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMPANY_NAMES': {
      return { ...state, companies: action.companies };
    }
    case 'SET_VALUES': {
      return { ...state, predictedData: action.data.predicted, receivedData: action.data.received };
    }
    default:
      return state;
  }
};

//actions
export const setCompanyNames = () => {
  return dispatch => {
    ///api call
    getCompanyNames().then(res => {
      if (res.status === 200) {
        const companies = res.data.data;
        dispatch({ type: 'SET_COMPANY_NAMES', companies });
      }
    });
  };
};

export const setData = clientData => {
  return dispatch => {
    const [first, ...predicted] = Object.values(clientData);
    getDataByCompanyname(first).then(res => {
      const companyData = res.data.data;
      const chunks = [];
      for (let i = 4; i > 0; i--) {
        chunks.push(companyData.splice(0, companyData.length / i).map(elem => elem.amount));
      }
      const received = chunks.map(chunk => {
        return chunk.reduce((a, b) => a + b, 0);
      });
      const data = { predicted, received };
      dispatch({ type: 'SET_VALUES', data });
    });
  };
};

export default mainReducer;
