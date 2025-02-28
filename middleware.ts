import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware(async (auth, req) => {
  // Await the promise to get the resolved auth object
  const authObj = await auth();

  if (protectedRoute(req)) {
    if (!authObj.userId) {
      // If there is no userId, the user is not authenticated
      return authObj.redirectToSignIn();
    }
  }

  return; // Continue if the route doesn't need protection or user is authenticated
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

