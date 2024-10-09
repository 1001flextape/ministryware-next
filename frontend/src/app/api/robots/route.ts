// app/api/robots/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /
Sitemap: ${process.env.NEXT_PUBLIC_DOMAIN || "https://ministryware.org"}/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
