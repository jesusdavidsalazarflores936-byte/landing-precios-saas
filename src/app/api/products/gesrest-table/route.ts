import { NextResponse } from "next/server";

import gesrestModulesTable from "@/config/gesrest-modules-table";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(gesrestModulesTable, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
    },
  });
}
