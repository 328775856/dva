import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState:{
    products: [
      {name: 'dva', id:1},
      {name: '1', id:2},
      {name: '2', id:3},
      {name: '3', id:4},
    ],
    count: 0
  }
})
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default)
app.model(require('./models/count').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
