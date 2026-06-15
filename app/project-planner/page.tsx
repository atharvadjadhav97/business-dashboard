import Link from "next/link";
import {
  ArrowLeft,
  Calculator,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

type MaterialRow = {
  id: string;
  name: string;
  unit: string;
  category: string | null;
  unit_cost: number | null;
  default_vendor: string | null;
};

type PlannerRow = {
  unit_type: string;
  quantity_per_unit: number;
  material: MaterialRow | MaterialRow[] | null;
};

type InventoryRow = {
  material_id: string;
  quantity_on_hand: number | null;
};

const unitCounts: Record<string, number> = {
  "Standard House": 2,
  "Premium House": 1,
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function ProjectPlannerPage() {
  const { data: requirements, error: requirementsError } = await supabase
    .from("unit_requirements")
    .select(
      `
      unit_type,
      quantity_per_unit,
      material:materials (
        id,
        name,
        unit,
        category,
        unit_cost,
        default_vendor
      )
    `
    )
    .order("unit_type", { ascending: true });

  const { data: inventory, error: inventoryError } = await supabase
    .from("inventory")
    .select("material_id, quantity_on_hand");

  if (requirementsError || inventoryError) {
    return (
      <main className="min-h-screen bg-slate-50 p-8">
        <div className="mx-auto max-w-5xl rounded-2xl border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-red-700">
            Project Planner Error
          </h1>
          <pre className="mt-4 overflow-auto rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {JSON.stringify(requirementsError || inventoryError, null, 2)}
          </pre>
        </div>
      </main>
    );
  }

  const inventoryMap = new Map<string, number>();

  (inventory as InventoryRow[] | null)?.forEach((item) => {
    inventoryMap.set(item.material_id, Number(item.quantity_on_hand || 0));
  });

  const plannerRows = ((requirements || []) as unknown as PlannerRow[])
    .map((row) => {
      const material = Array.isArray(row.material)
        ? row.material[0]
        : row.material;

      if (!material) return null;

      const numberOfUnits = unitCounts[row.unit_type] || 0;
      const quantityPerUnit = Number(row.quantity_per_unit || 0);
      const totalRequired = quantityPerUnit * numberOfUnits;
      const stockOnHand = inventoryMap.get(material.id) || 0;
      const needToBuy = Math.max(totalRequired - stockOnHand, 0);
      const unitCost = Number(material.unit_cost || 0);
      const estimatedCost = needToBuy * unitCost;

      return {
        unitType: row.unit_type,
        materialName: material.name,
        category: material.category || "General",
        unit: material.unit,
        vendor: material.default_vendor || "Not assigned",
        numberOfUnits,
        quantityPerUnit,
        totalRequired,
        stockOnHand,
        needToBuy,
        unitCost,
        estimatedCost,
      };
    })
    .filter((row) => row !== null);

  const totalEstimatedCost = plannerRows.reduce(
    (sum, row) => sum + row.estimatedCost,
    0
  );

  const totalNeedToBuyItems = plannerRows.filter(
    (row) => row.needToBuy > 0
  ).length;

  const totalMaterialsTracked = new Set(
    plannerRows.map((row) => row.materialName)
  ).size;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Construction MVP
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Project Material Planner
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              This converts the Excel-style per-house material requirement sheet
              into a live calculator. It shows total required quantity, current
              stock, what needs to be purchased, and estimated cost.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-950 via-slate-900 to-orange-950 p-6 text-white">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-orange-200" />
                  <h2 className="text-2xl font-semibold">
                    Plano Villas Material Plan
                  </h2>
                </div>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                  Demo plan using sample data from Supabase. For now, unit
                  counts are hardcoded: 2 Standard Houses and 1 Premium House.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-sm">
                MVP Demo
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-4">
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5 shadow-sm">
              <Package className="mb-3 h-6 w-6 text-orange-700" />
              <p className="text-sm font-semibold text-orange-700">
                Materials Tracked
              </p>
              <p className="mt-2 text-3xl font-bold text-orange-950">
                {totalMaterialsTracked}
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
              <TrendingUp className="mb-3 h-6 w-6 text-blue-700" />
              <p className="text-sm font-semibold text-blue-700">
                Unit Types Planned
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-950">
                {Object.keys(unitCounts).length}
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5 shadow-sm">
              <ShoppingCart className="mb-3 h-6 w-6 text-rose-700" />
              <p className="text-sm font-semibold text-rose-700">
                Items Need Purchase
              </p>
              <p className="mt-2 text-3xl font-bold text-rose-950">
                {totalNeedToBuyItems}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
              <Calculator className="mb-3 h-6 w-6 text-emerald-700" />
              <p className="text-sm font-semibold text-emerald-700">
                Est. Purchase Cost
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-950">
                {formatCurrency(totalEstimatedCost)}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">
                Material Requirement Calculator
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                This is the functional part of the MVP. Later, the unit counts
                can come from selected sites/houses instead of hardcoded demo
                values.
              </p>
            </div>

            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              2 Standard + 1 Premium
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[1100px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-4 py-3">Unit Type</th>
                  <th className="px-4 py-3">Material</th>
                  <th className="px-4 py-3">Qty / Unit</th>
                  <th className="px-4 py-3">Units</th>
                  <th className="px-4 py-3">Total Required</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Need to Buy</th>
                  <th className="px-4 py-3">Est. Cost</th>
                  <th className="px-4 py-3">Vendor</th>
                </tr>
              </thead>

              <tbody className="divide-y bg-white">
                {plannerRows.map((row) => (
                  <tr key={`${row.unitType}-${row.materialName}`}>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {row.unitType}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      <div className="font-medium">{row.materialName}</div>
                      <div className="text-xs text-slate-500">
                        {row.category}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {row.quantityPerUnit.toLocaleString()} {row.unit}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {row.numberOfUnits}
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {row.totalRequired.toLocaleString()} {row.unit}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {row.stockOnHand.toLocaleString()} {row.unit}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                          row.needToBuy > 0
                            ? "bg-rose-50 text-rose-700 ring-rose-200"
                            : "bg-emerald-50 text-emerald-700 ring-emerald-200"
                        }`}
                      >
                        {row.needToBuy.toLocaleString()} {row.unit}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {formatCurrency(row.estimatedCost)}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{row.vendor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              What this replaces
            </h2>
            <div className="mt-5 space-y-3">
              {[
                "Manual Excel calculations for every house or project.",
                "Calling someone to ask what material is short.",
                "Guessing purchase quantity without checking stock.",
                "Losing track of vendor and estimated cost.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              Next version
            </h2>
            <div className="mt-5 space-y-3">
              {[
                "Allow owner to select site and number of houses dynamically.",
                "Create purchase orders automatically from Need to Buy.",
                "Track delivered vs pending material.",
                "Upload supplier invoices and site photos.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm text-orange-900"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">How to pitch this page</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            “This is your Excel material sheet converted into a live planning
            dashboard. Instead of manually calculating what each house needs,
            this page calculates total material requirement, compares it with
            available stock, and shows what needs to be purchased with estimated
            cost.”
          </p>
        </section>
      </div>
    </main>
  );
}