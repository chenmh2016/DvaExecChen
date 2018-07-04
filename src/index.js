import dva ,{connect} from 'dva';
import './index.css';
import 'antd/dist/antd.css';
import createLogger from 'redux-logger';

// 1. Initialize
const app = dva({
  onAction:createLogger //onAction 支持数组，可同时传入多个中间件
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/users').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
