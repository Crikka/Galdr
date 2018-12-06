import Koa, { Request, Response, Context } from 'koa';
import router from 'koa-route';
import { Module } from './module';

export class App extends Module {
  constructor() {
    super();

    this.app = new Koa();
  }

  Handle(koa: Koa) {
    
  }

  deploy({ port }: { port: number }) {

    // respond with "hello world" when a GET request is made to the homepage
    this.app.use(router.get('/', (ctx: Context) => {
      ctx.body = 'hello world';
    }));

    // Serve the application at the given port
    this.app.listen(port, () => {
      // Success callback
      process.stdout.write(`Listening at http://localhost:${port}\n`);
    });
  }

  private app: Koa;
}