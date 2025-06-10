import data from 'data/data.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const products = data.products.find(
    (item) => item.id === parseInt(params.id),
  );

  return new Response(JSON.stringify(products));
}
