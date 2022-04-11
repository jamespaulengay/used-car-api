import { createParamDecorator, ExecutionContext } from '@nestjs/common';
//Execution Context - any communication protocol. // Incoming Request

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
    // request.currentUser - comes from the current-user.decorator.ts
  },
  //Give us the underlying request that is coming into our application
);
