export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://igristechnos.com/sitemap
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
