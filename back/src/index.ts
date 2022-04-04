import App from './App';

const app = new App().application;

app.listen(3060, () => {
  console.log('3060포트 express 연결');
});