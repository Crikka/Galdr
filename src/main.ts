import { InitializeStore } from "./guess/store";

/*import { App } from './framework/app';
import { HTMLPlatform } from './framework/platforms/html-platform';

import { deploy } from './framework/deploy';

const app = new App();
const platform = new HTMLPlatform();

deploy(app, platform, {
  port : 8080,
});*/

async function main() {
  const store = await InitializeStore("./src/guess/store");
}

main();