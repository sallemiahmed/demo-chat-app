import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnLoginPage = req.nextUrl.pathname.startsWith("/login");
  const isOnRegisterPage = req.nextUrl.pathname.startsWith("/register");
  const isOnLandingPage = req.nextUrl.pathname === "/";

  if (isLoggedIn && (isOnLoginPage || isOnRegisterPage)) {
    return Response.redirect(new URL("/chat", req.url));
  }

  if (!isLoggedIn && !isOnLoginPage && !isOnRegisterPage && !isOnLandingPage) {
    return Response.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
