import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/app/api/products/products";

// Compatibility endpoint for consumers that accidentally include the product UI
// segment in their API base URL, e.g. /gesrest/api/products/gesrest.
interface NestedProductRouteContext {
  params: Promise<{
    product: string;
    slug: string;
  }>;
}

export async function GET(
  _req: NextRequest,
  { params }: NestedProductRouteContext
) {
  const { product, slug } = await params;

  if (product !== slug) {
    return NextResponse.json(
      { error: `Ruta de producto inconsistente: "${product}" no coincide con "${slug}"` },
      { status: 404 }
    );
  }

  const config = PRODUCTS[slug];

  if (!config) {
    return NextResponse.json(
      { error: `Producto "${slug}" no encontrado` },
      { status: 404 }
    );
  }

  return NextResponse.json(config, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
    },
  });
}
