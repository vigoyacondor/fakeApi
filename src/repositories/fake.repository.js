const { FAKE_DATA } = require("../constants/constants");
const { Paginator } = require("array-paginator");



const getCandidates = ({ employerId, processId, offset, limit }) => {
  const size = FAKE_DATA.length;
  if (offset === 0) offset = 1;
  if (limit === 0) limit = size;

  console.log(`
  employerid: ${employerId}
  processID: ${processId}
  OFFSET: ${offset}
  LIMIT: ${limit}

  `);

  const items = paginationFilter(FAKE_DATA, offset, limit);
  console.log({ processId, items });

  return {
    href: "/users",
    offset: offset,
    limit: limit || size,
    totalCandidates: size,
    size,
    first: "/candidates/offset=1",
    previous: null,
    next: null,
    last: `/candidates?offset=${size}`,
    items,
  };

  // console.log(offset, limit);
};
 


const paginationFilter = (data, offset, limit) => {
  // offset = limit * offset - limit;

  //   const start = parseInt((offset - 1) * limit);

  // const end = parseInt(offset * limit);

  // return data.slice(start, end);

  // const paginator = new Paginator(data, limit, offset);
  const paginator = new Paginator(data, limit);
  return paginator.page(offset);

  // return data.slice((offset - 1) * limit, offset * limit);
};;


module.exports = {
 getCandidates
}