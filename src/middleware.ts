import { NextResponse, NextRequest } from 'next/server';
 
export function middleware(request: NextRequest) {
  const __tx__ = request.cookies
  console.log(__tx__);
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
  ]
}