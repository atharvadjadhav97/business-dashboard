import Link from "next/link";
import { AlertTriangle, Building2, Hammer, Store, WalletCards } from "lucide-react";

const businessSnapshot = [
  {
    name: "Construction Company",
    type: "Construction",
    status: "Active",
    metric: "3 houses in progress",
    href: "/construction",
  },
  {
    name: "Smoke Shop 1",
    type: "Retail",
    status: "Placeholder",
    metric: "$4,850 sales today",
    href: "/smoke-shops",
  },
  {
    name: "Smoke Shop 2",
    type: "Retail",
    status: "Placeholder",
    metric: "7 low-stock items",
    href: "/smoke-shops",
  },
  {
    name: "Smoke Shop 3",
    type: "Retail",
    status: "Placeholder",
    metric: "$42 cash mismatch",
    href: "/smoke-shops",
  },
];

const alerts = [
  "Granite delivery pending for Plano Villas.",
  "Smoke Shop 2 has low stock for fast-moving vape products.",
  "One customer invoice is overdue by 12 days.",
  "Manager closing checklist missing for Smoke Shop 3.",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-slate-500">Owner View</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
              Business Command Center
            </h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              This dashboard shows how construction, smoke shops, payments, and daily
              manager updates can eventually be tracked from one place.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl border bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            Back Home
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <Building2 className="mb-3 h-6 w-6 text-slate-700" />
            <p className="text-sm text-slate-500">Businesses</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">5</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <Hammer className="mb-3 h-6 w-6 text-slate-700" />
            <p className="text-sm text-slate-500">Active Construction Sites</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">1</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <Store className="mb-3 h-6 w-6 text-slate-700" />
            <p className="text-sm text-slate-500">Smoke Shops</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">3</p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <WalletCards className="mb-3 h-6 w-6 text-slate-700" />
            <p className="text-sm text-slate-500">Pending Payments</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">$18.5k</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Business Snapshot</h2>
            <p className="mt-1 text-sm text-slate-500">
              The construction module can be functional first. Other businesses can start as placeholders.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Business</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Today&apos;s Signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y bg-white">
                  {businessSnapshot.map((item) => (
                    <tr key={item.name}>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        <Link href={item.href} className="hover:underline">
                          {item.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{item.type}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{item.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-slate-700" />
              <h2 className="text-xl font-semibold text-slate-900">Owner Alerts</h2>
            </div>

            <div className="mt-5 space-y-3">
              {alerts.map((alert) => (
                <div key={alert} className="rounded-xl border bg-slate-50 p-4 text-sm text-slate-700">
                  {alert}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}