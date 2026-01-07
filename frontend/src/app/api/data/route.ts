import { NextRequest } from 'next/server';

const SYMFONY_API_URL = 'http://localhost:8000/api/items';

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get('category');
  const pageParam = req.nextUrl.searchParams.get('page') ?? '1';

  const params = new URLSearchParams();

  if (category) {
    params.append('category', category);
  }

  params.append('page', pageParam);

  try {
    const response = await fetch(`${SYMFONY_API_URL}?${params.toString()}`);
    const data = await response.json();

    const items = data['hydra:member'] || data.member || [];
    const totalItems = data['hydra:totalItems'] || data.totalItems || 0;
    const currentPage = parseInt(pageParam);
    const itemsPerPage = 24;

    const hasMorePages = currentPage * itemsPerPage < totalItems;
    const nextCursor = hasMorePages ? currentPage + 1 : null;

    return Response.json({
      data: items,
      nextCursor: nextCursor,
    });
  } catch (error) {
    console.error('Error fetching from Symfony API:', error);
    return Response.json({ data: [], nextCursor: null }, { status: 500 });
  }
}
