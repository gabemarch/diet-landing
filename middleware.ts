import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'hu'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'hu',

  // Always use the default locale for the root path
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (e.g. /favicon.ico)
  // - _next internal routes
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 