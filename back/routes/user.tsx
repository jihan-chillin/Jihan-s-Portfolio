// import express from 'express';

// class App {
//   public application: express.Application;

//   constructor() {
//     this.application = express();
//     this.router();
//   }

//   private router(): void {
//     this.application.get('/', (req: express.Request, res: express.Response) => {
//       res.send('hello!');
//     })
//   }
// }

// export default App;

import express from 'express';

const router = express.Router();

router.post('/', (req, res)=>{
  res.json({id : 1, content : 'hello'})
})

router.delete('/', (req, res)=>{
  res.json({id : 1})
})

module.exports = router;