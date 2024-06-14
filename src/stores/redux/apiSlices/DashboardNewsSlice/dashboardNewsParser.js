import _get from 'lodash.get';

const dashboardNewsParser = {};


dashboardNewsParser.parseDashboardNews = (res,meta,arg) => {
  let records = [];
  
  if (res.data && Array.isArray(res.data.records)) {
    records = res.data.records;
  }
  let totalPages = res.data.totalPages;
  let currentPage = res.data.currentPage;
  
  if (!records) {
    return {
      records: [],
      totalPages: 0,
      currentPage: 0
    };
  }
  let {page} = arg ;
  
  return {
    records: records.map((data,index) => {
      return {
        SrNo: (index + 1) + (page * 10),
        name: _get(data, 'name', ''),
        designation: _get(data, 'designation', ''),
      };
    }),
    totalPages: totalPages,
    currentPage: currentPage,
  };
};

export default dashboardNewsParser;
