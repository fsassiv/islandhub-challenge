import data from 'data/data.json';

export async function GET() {
  return new Response(JSON.stringify(data));
}
