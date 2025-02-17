// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const protectedRoute = createRouteMatcher([
//   '/',
//   '/upcoming',
//   '/meeting(.*)',
//   '/previous',
//   '/recordings',
//   '/personal-room',
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (protectedRoute(req)) auth.protect();
// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, req) => {
  // Just protect everything for now
  auth.protect();
});

export const config = {
  matcher: ['/', '/upcoming', '/meeting(.*)', '/previous', '/recordings', '/personal-room'],
};
