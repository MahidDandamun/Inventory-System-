/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 * 
 */

export const publicRoutes = [
  "/",
  "/auth/new-verification",
   
];



/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings authentication.
 * @type {string[]}
 * 
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password"
]



/**
 * The prefix for API authentication routes.
 * Routes that starts with this prefix are used for  APi authentication.
 * @type {string[]}
 * 
 */

export const apiAuthPrefix = "/api/auth";
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
