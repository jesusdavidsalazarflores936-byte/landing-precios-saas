// src/app/api/products/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "../products";

interface ProductRouteContext {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_req: NextRequest, { params }: ProductRouteContext) {
  const { slug } = await params;
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
