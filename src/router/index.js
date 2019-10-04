const Router = require('koa-router');
const { getUsers, getUser } = require('../controller');

const router = new Router();

router.get('/', (ctx) => ctx.body = '근데 왜 3000번 포트로 그거안되냐 프록시');
router.get('/deploy', (ctx) => ctx.body = '무중단배포 성공');

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
