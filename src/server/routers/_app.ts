import { createRouter } from '../createRouter';
import { appRouter as appEndpointRouter } from './appRouter';
import { helloRouter } from './helloRouter';

export const appRouter = createRouter()
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .query('healthz', {
    async resolve() {
      return 'yay!';
    },
  })
  .merge('app.', appEndpointRouter)
  .merge('hello.', helloRouter);
