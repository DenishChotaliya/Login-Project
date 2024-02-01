import { NextResponse } from "next/server";

export const middleware = (request) => {

  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/Login" || path === "/Register";
  const isAdminPath = path.startsWith("/Admin");

  const role = request.cookies.get("role")?.value || "";
  const isLoggedIn = role !== "";
  // console.log(role); 
  
  if (isPublicPath && isLoggedIn) {
    if (role === "1") {
      return NextResponse.redirect(new URL("/Admin", request.nextUrl));
    } else {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    
  }
  if (isAdminPath) {
    if (!isLoggedIn) { // role === "" role blank 
      return NextResponse.redirect(new URL("/Login", request.nextUrl));
    } else if (role !== "1") {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
  }
  if (path === "/Profile" && role == "") {
    return NextResponse.redirect(new URL("/Login", request.nextUrl));
  }
};
