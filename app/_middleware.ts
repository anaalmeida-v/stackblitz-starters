import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //pegar cookie de autenticação
  //chamar alguma API

  //return Response.redirect('/blog/asdasd');
  return NextResponse.redirect(
    'https://nextjs-pyvca8--3000.local.webcontainer.io'
  );
}
