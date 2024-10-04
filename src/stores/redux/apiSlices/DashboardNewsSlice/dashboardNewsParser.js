// import _get from 'lodash.get';

const dashboardNewsParser = {};


dashboardNewsParser.parseDashboardNews = (res,meta,arg) => {
  let records = [];
  
  if (res.data && Array.isArray(res.data)) {
    records = res.data;
  }
  
  if (!records) {
    return {
      records: [],
    };
  }
};

export default dashboardNewsParser;
