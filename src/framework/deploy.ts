import { App } from './app';
import { Platform } from './platform';

import express, { Application, Request, Response } from 'express';

export function deploy(app: App, platform: Platform, { port }: { port: number}) {
    const expressApp: Application = express();

    // Serve the application at the given port
    expressApp.listen(port, () => {
        // Success callback
        process.stdout.write(`Listening at http://localhost:${port}\n`);
    });

    // respond with "hello world" when a GET request is made to the homepage
    expressApp.get('/', (req: Request, res: Response) => {
        res.send('hello world');
    });
}