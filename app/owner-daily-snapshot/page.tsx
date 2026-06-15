import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Building2,
  CheckCircle2,
  Hammer,
  Package,
  Store,
  WalletCards,
} from "lucide-react";

const priorityActions = [
  {
    title: "Follow up with granite vendor",
    description:
      "Granite delivery is pending for Plano Villas and may delay kitchen work.",
    owner: "Construction",
    urgency: "High",
  },
  {
    title: "Review Smoke Shop 3 cash mismatch",
    description: "Closing report shows a $42 cash difference from yesterday.",
    owner: "Smoke Shop 3",
    urgency: "Medium",
  },
  {
    title: "Call customer about overdue invoice",
    description: "$8,500 invoice is overdue by 12 days.",
    owner: "Payments",
    urgency: "High",
  },
];

const businessCards = [
  {
    title: "Construction",
    icon: Hammer,
    summary: "Plano Villas has 3 houses being tracked.",
    metrics: ["1 active site", "3 houses", "1 material delay"],
    accent: "border-orange-100 bg-orange-50",
    iconBg: "bg-orange-100",
    iconText: "text-orange-700",
  },
  {
    title: "Smoke Shops",
    icon: Store,
    summary: "Three store locations can be tracked from the same owner dashboard.",
    metrics: ["$12,880 sales yesterday", "15 low-stock items", "1 cash mismatch"],
    accent: "border-blue-100 bg-blue-50",
    iconBg: "bg-blue-100",
    iconText: "text-blue-700",
  },
  {
    title: "Payments",
    icon: WalletCards,
    summary: "Receivables and vendor bills can be summarized for owner visibility.",
    metrics: ["$18,500 receivables", "$6,950 payables", "1 overdue invoice"],
    accent: "border-emerald-100 bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-700",
  },
  {
    title: "Inventory",
    icon: Package,
    summary: "Low-stock and reorder needs can be shown across businesses.",
    metrics: ["Tiles need reorder", "Granite below stock", "7 vape SKUs low"],
    accent: "border-purple-100 bg-purple-50",
    iconBg: "bg-purple-100",
    iconText: "text-purple-700",
  },
];

const dailySignals = [
  "Plano Villas: House 1 flooring started. House 3 foundation completed.",
  "Granite delivery is still pending from Stone World.",
  "Smoke Shop 1 had the highest sales yesterday.",
  "Smoke Shop 2 has 7 low-stock fast-moving items.",
  "Smoke Shop 3 closing checklist is missing manager notes.",
];

export default function OwnerDailySnapshotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Daily Owner View
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Owner Daily Snapshot
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              A morning summary that tells the owner what happened yesterday,
              what needs attention today, and where money or operations may be stuck.
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

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 text-white">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-200" />
                  <h2 className="text-2xl font-semibold">
                    Good morning — here is what needs your attention
                  </h2>
                </div>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                  Demo report for multiple businesses: construction, smoke shops,
                  payments, inventory, and manager updates.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-sm">
                Report Date: Today
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
                <p className="text-sm font-semibold text-blue-700">
                  Businesses Tracked
                </p>
                <p className="mt-2 text-3xl font-bold text-blue-950">5</p>
                <p className="mt-1 text-xs text-blue-700/80">
                  Construction + retail + payments
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
                <p className="text-sm font-semibold text-amber-700">
                  Action Items
                </p>
                <p className="mt-2 text-3xl font-bold text-amber-950">3</p>
                <p className="mt-1 text-xs text-amber-700/80">
                  Needs owner attention
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
                <p className="text-sm font-semibold text-emerald-700">
                  Pending Receivables
                </p>
                <p className="mt-2 text-3xl font-bold text-emerald-950">$18.5k</p>
                <p className="mt-1 text-xs text-emerald-700/80">
                  Money to follow up
                </p>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5 shadow-sm">
                <p className="text-sm font-semibold text-rose-700">
                  Operational Alerts
                </p>
                <p className="mt-2 text-3xl font-bold text-rose-950">4</p>
                <p className="mt-1 text-xs text-rose-700/80">
                  Exceptions and blockers
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50">
                <AlertTriangle className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">
                  Priority Actions
                </h2>
                <p className="text-sm text-slate-500">
                  These are the items the owner should handle first.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {priorityActions.map((action) => (
                <div
                  key={action.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {action.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {action.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 gap-2">
                      <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {action.owner}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                          action.urgency === "High"
                            ? "bg-rose-50 text-rose-700 ring-rose-200"
                            : "bg-amber-50 text-amber-700 ring-amber-200"
                        }`}
                      >
                        {action.urgency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">
                  Daily Signals
                </h2>
                <p className="text-sm text-slate-500">
                  Quick updates from different businesses.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {dailySignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  {signal}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">
            Business Summary
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            This section shows how the same dashboard can summarize all business units.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {businessCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`rounded-2xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${card.accent}`}
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${card.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${card.iconText}`} />
                  </div>
                  <h3 className="font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.summary}
                  </p>

                  <div className="mt-4 space-y-2">
                    {card.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-lg bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-white/80"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">How to pitch this page</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            “This page is the owner’s morning view. Instead of calling every manager,
            checking Excel files, and remembering vendor/payment follow-ups, this gives
            you one simple summary of what needs your attention today. We can start
            with construction and later connect smoke shop sales, inventory, payments,
            and checklists.”
          </p>
        </section>
      </div>
    </main>
  );
}