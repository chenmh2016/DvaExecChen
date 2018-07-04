// ./mock/users.js
'use strict';

// 引入 mock js
const mockjs = require('mockjs');

module.exports = {
  'GET /api/users'(req, res) {
    // const page = qs.parse(req.query);

    const data = mockjs.mock({
      'data|100': [{
        'id|+1': 1,
        name: '@cname',
        'age|11-99': 1,
        address: '@region'
      }],
      page: {
        total: 100,
        current: 1
      }
    });

    res.json({
      success: true,
      data: data.data,
      page: data.page
    });
  },
};


// const Mock = require('mockjs');
// let db = Mock.mock({'data|3-6': [{id: '@id', name: '@name', 'age|18-32': 1}]});
// module.exports = {
//   [`GET /api/users`](req, res) {
//     res.status(200).json(db);
//   }, [`POST /api/users`](req, res) {
//     let user = req.body;
//     console.log(req);
//     user.id = Mock.mock('@id');
//     db.data.push(user);
//     res.status(200).json(user);
//   }
// }
