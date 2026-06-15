import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Banknote,
  BarChart3,
  Package,
  ShieldCheck,
  ShoppingBasket,
  Store,
  TrendingUp,
} from "lucide-react";

const storeRows = [
  {
    location: "Smoke Shop 1",
    manager: "Manager A",
    salesToday: "$4,850",
    cashDifference: "$0",
    lowStock: 3,
    topItem: "Lost Mary Vape",
    status: "Good",
  },
  {
    location: "Smoke Shop 2",
    manager: "Manager B",
    salesToday: "$3,920",
    cashDifference: "-$18",
    lowStock: 7,
    topItem: "Marlboro Red",
    status: "Watch",
  },
  {
    location: "Smoke Shop 3",
    manager: "Manager C",
    salesToday: "$4,110",
    cashDifference: "-$42",
    lowStock: 5,
    topItem: "RAW Papers",
    status: "Needs Review",
  },
];

const alerts = [
  {
    title: "Smoke Shop 3 cash mismatch",
    description:
      "Closing cash is short by $42. Owner may want to review the register report.",
    urgency: "High",
  },
  {
    title: "Smoke Shop 2 low stock",
    description:
      "Seven fast-moving items are below reorder level and may need vendor follow-up.",
    urgency: "Medium",
  },
  {
    title: "Missing closing note",
    description:
      "Smoke Shop 3 closing checklist is missing manager comments.",
    urgency: "Medium",
  },
];

const futureFeatures = [
  "Import sales from POS system",
  "Track low-stock and fast-moving products",
  "Compare sales across all store locations",
  "Flag cash drawer mismatch after closing",
  "Show top-selling and slow-moving products",
  "Create vendor reorder suggestions",
];

function StatusBadge({ status }: { status: string }) {
  const classes =
    status === "Good"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : status === "Watch"
      ? "bg-amber-50 text-amber-700 ring-amber-200"
      : "bg-rose-50 text-rose-700 ring-rose-200";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${classes}`}
    >
      {status}
    </span>
  );
}

function UrgencyBadge({ urgency }: { urgency: string }) {
  const classes =
    urgency === "High"
      ? "bg-rose-50 text-rose-700 ring-rose-200"
      : "bg-amber-50 text-amber-700 ring-amber-200";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${classes}`}
    >
      {urgency}
    </span>
  );
}

export default function SmokeShopsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Retail Placeholder
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Smoke Shop Dashboard
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              A placeholder dashboard showing how the owner could track sales,
              cash mismatch, low-stock items, and store performance across all
              smoke shop locations.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>
        </div>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 text-white">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <Store className="h-5 w-5 text-blue-200" />
                  <h2 className="text-2xl font-semibold">
                    Multi-location retail snapshot
                  </h2>
                </div>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                  This is not a full POS replacement. The first version would
                  simply give the owner a clear view of store signals that need
                  attention.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-sm">
                Placeholder Module
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-4">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
              <Store className="mb-3 h-6 w-6 text-blue-700" />
              <p className="text-sm font-semibold text-blue-700">
                Store Locations
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-950">3</p>
              <p className="mt-1 text-xs text-blue-700/80">
                All shops in one view
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
              <TrendingUp className="mb-3 h-6 w-6 text-emerald-700" />
              <p className="text-sm font-semibold text-emerald-700">
                Sales Today
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-950">
                $12.9k
              </p>
              <p className="mt-1 text-xs text-emerald-700/80">
                Combined store sales
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
              <Package className="mb-3 h-6 w-6 text-amber-700" />
              <p className="text-sm font-semibold text-amber-700">
                Low-stock Items
              </p>
              <p className="mt-2 text-3xl font-bold text-amber-950">15</p>
              <p className="mt-1 text-xs text-amber-700/80">
                Needs reorder review
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5 shadow-sm">
              <Banknote className="mb-3 h-6 w-6 text-rose-700" />
              <p className="text-sm font-semibold text-rose-700">
                Cash Difference
              </p>
              <p className="mt-2 text-3xl font-bold text-rose-950">-$60</p>
              <p className="mt-1 text-xs text-rose-700/80">
                Across two locations
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">
                Store Performance
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                A simple owner view for sales, cash, low stock, and store-level
                issues.
              </p>
            </div>

            <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
              Demo data only
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Manager</th>
                  <th className="px-4 py-3">Sales Today</th>
                  <th className="px-4 py-3">Cash Difference</th>
                  <th className="px-4 py-3">Low Stock</th>
                  <th className="px-4 py-3">Top Item</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y bg-white">
                {storeRows.map((store) => (
                  <tr key={store.location}>
                    <td className="px-4 py-4 font-semibold text-slate-950">
                      {store.location}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {store.manager}
                    </td>
                    <td className="px-4 py-4 font-semibold text-slate-900">
                      {store.salesToday}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                          store.cashDifference === "$0"
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : "bg-rose-50 text-rose-700 ring-rose-200"
                        }`}
                      >
                        {store.cashDifference}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {store.lowStock} items
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {store.topItem}
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge status={store.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50">
                <AlertTriangle className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">
                  Owner Alerts
                </h2>
                <p className="text-sm text-slate-500">
                  These are the store issues the owner should notice first.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {alert.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {alert.description}
                      </p>
                    </div>

                    <UrgencyBadge urgency={alert.urgency} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ShoppingBasket className="h-5 w-5 text-blue-700" />
              <h2 className="text-xl font-semibold text-slate-950">
                Future POS Integration
              </h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              In a real version, we can connect this to POS exports, CSV files,
              or manual daily closing forms.
            </p>

            <div className="mt-5 space-y-3">
              {futureFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">How to pitch this page</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            “Since you also own three smoke shops, I mocked up how the same
            owner dashboard could work for retail. This does not need to replace
            your POS immediately. The first useful version can simply show daily
            sales, low-stock items, cash mismatch, and store-level alerts in one
            place.”
          </p>
        </section>
      </div>
    </main>
  );
}