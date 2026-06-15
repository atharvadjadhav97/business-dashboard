import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  FileSpreadsheet,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const beforeAfterRows = [
  {
    current: "Material requirements are handled in Excel files.",
    mvp: "Material needs are calculated in a live web dashboard.",
    value: "Less manual calculation and fewer mistakes.",
  },
  {
    current: "Owner has to call managers/supervisors for updates.",
    mvp: "Daily updates, blockers, and action items appear in one place.",
    value: "Less follow-up and better visibility.",
  },
  {
    current: "Purchase needs may be discovered late.",
    mvp: "System shows what needs to be purchased based on stock gaps.",
    value: "Fewer delays due to missing materials.",
  },
  {
    current: "Construction, smoke shops, payments, and checklists are separate.",
    mvp: "Owner Command Center can bring all businesses into one view.",
    value: "One dashboard instead of scattered information.",
  },
  {
    current: "Payments and vendor follow-ups depend on memory or manual tracking.",
    mvp: "Receivables, payables, overdue invoices, and vendor bills can be tracked.",
    value: "Better cash flow visibility.",
  },
  {
    current: "Issues are often found after they already become problems.",
    mvp: "Alerts show cash mismatch, low stock, overdue payments, and blockers early.",
    value: "Owner can act before small issues become bigger.",
  },
];

const valueCards = [
  {
    title: "Owner Visibility",
    description:
      "The owner can see what needs attention across construction, smoke shops, payments, and operations without checking multiple places.",
    icon: Target,
    style: "border-blue-100 bg-blue-50 text-blue-700",
  },
  {
    title: "Less Manual Work",
    description:
      "Excel calculations, manager follow-ups, and repeated status checks can be reduced using dashboards, forms, and alerts.",
    icon: FileSpreadsheet,
    style: "border-orange-100 bg-orange-50 text-orange-700",
  },
  {
    title: "Faster Decisions",
    description:
      "Instead of waiting for someone to summarize the problem, the owner can quickly see material gaps, overdue payments, and daily priorities.",
    icon: TrendingUp,
    style: "border-emerald-100 bg-emerald-50 text-emerald-700",
  },
  {
    title: "Scalable System",
    description:
      "We can start with construction and later add smoke shops, inventory, employees, payments, and daily reports in the same platform.",
    icon: Rocket,
    style: "border-purple-100 bg-purple-50 text-purple-700",
  },
];

const mvpModules = [
  {
    name: "Owner Daily Snapshot",
    status: "Demo Ready",
    description:
      "Morning summary of action items, alerts, payments, and business signals.",
  },
  {
    name: "Project Material Planner",
    status: "Functional MVP",
    description:
      "Calculates material required, stock available, need to buy, and estimated purchase cost.",
  },
  {
    name: "Construction Dashboard",
    status: "Next Build",
    description:
      "Track active sites, houses, supervisors, daily updates, material delays, and purchase orders.",
  },
  {
    name: "Smoke Shop Dashboard",
    status: "Placeholder",
    description:
      "Future view for daily sales, low stock, cash mismatch, top-selling items, and store comparison.",
  },
  {
    name: "Payments Tracker",
    status: "Placeholder",
    description:
      "Future view for receivables, payables, overdue invoices, vendor bills, and payment reminders.",
  },
  {
    name: "Manager Checklists",
    status: "Placeholder",
    description:
      "Future forms for opening/closing tasks, construction site updates, blockers, and issue reporting.",
  },
];

const dealPaths = [
  {
    title: "Path 1: Direction Looks Good",
    description:
      "If this solves the right problem, we define the first paid version with a small focused scope.",
    bullets: [
      "Finalize the first module to build properly.",
      "Agree on exact features, timeline, and price.",
      "Start with construction material tracking plus owner daily summary.",
    ],
  },
  {
    title: "Path 2: Needs Workflow Feedback",
    description:
      "If the MVP is close but not exact, we collect feedback and revise the demo around his real business process.",
    bullets: [
      "Ask which business pain is highest priority.",
      "Collect 3-5 changes he wants to see.",
      "Come back with a revised version before finalizing the deal.",
    ],
  },
];

function StatusBadge({ status }: { status: string }) {
  const classes =
    status === "Functional MVP"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : status === "Demo Ready"
      ? "bg-blue-50 text-blue-700 ring-blue-200"
      : status === "Next Build"
      ? "bg-amber-50 text-amber-700 ring-amber-200"
      : "bg-slate-50 text-slate-700 ring-slate-200";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${classes}`}
    >
      {status}
    </span>
  );
}

export default function DemoValuePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              MVP Value Story
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Why This MVP Helps
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              This page explains the business value of the Owner Command Center:
              what it replaces, what it improves, and how it can grow from one
              construction Excel sheet into a multi-business management system.
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
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-6 text-white">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-indigo-200" />
                  <h2 className="text-2xl font-semibold">
                    From scattered work to one owner command center
                  </h2>
                </div>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                  The MVP starts with one real problem from the Excel file, then
                  shows how the same system can expand into construction,
                  smoke shops, payments, employee checklists, and daily alerts.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-sm">
                Sales Demo Page
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-4">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 shadow-sm">
              <Lightbulb className="mb-3 h-6 w-6 text-indigo-700" />
              <p className="text-sm font-semibold text-indigo-700">
                Core Idea
              </p>
              <p className="mt-2 text-2xl font-bold text-indigo-950">
                One dashboard
              </p>
              <p className="mt-1 text-xs text-indigo-700/80">
                For all key business signals
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5 shadow-sm">
              <FileSpreadsheet className="mb-3 h-6 w-6 text-orange-700" />
              <p className="text-sm font-semibold text-orange-700">
                Starting Point
              </p>
              <p className="mt-2 text-2xl font-bold text-orange-950">
                Excel → Web
              </p>
              <p className="mt-1 text-xs text-orange-700/80">
                Construction material planning
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
              <ShieldCheck className="mb-3 h-6 w-6 text-emerald-700" />
              <p className="text-sm font-semibold text-emerald-700">
                Owner Benefit
              </p>
              <p className="mt-2 text-2xl font-bold text-emerald-950">
                Fewer surprises
              </p>
              <p className="mt-1 text-xs text-emerald-700/80">
                Alerts before issues grow
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5 shadow-sm">
              <Rocket className="mb-3 h-6 w-6 text-purple-700" />
              <p className="text-sm font-semibold text-purple-700">
                Expansion
              </p>
              <p className="mt-2 text-2xl font-bold text-purple-950">
                Multi-business
              </p>
              <p className="mt-1 text-xs text-purple-700/80">
                Construction + retail + payments
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-slate-700" />
            <h2 className="text-xl font-semibold text-slate-950">
              Current Process vs MVP Process
            </h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            This table is useful during the demo because it explains the value
            in business terms, not technical terms.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[950px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="px-4 py-3">Current Process</th>
                  <th className="px-4 py-3">MVP Process</th>
                  <th className="px-4 py-3">Business Value</th>
                </tr>
              </thead>
              <tbody className="divide-y bg-white">
                {beforeAfterRows.map((row) => (
                  <tr key={row.current}>
                    <td className="px-4 py-4 align-top text-slate-600">
                      {row.current}
                    </td>
                    <td className="px-4 py-4 align-top font-medium text-slate-900">
                      {row.mvp}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        {row.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`rounded-3xl border p-6 shadow-sm ${card.style}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {card.description}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">
            MVP Module Roadmap
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            This helps him understand what is built, what is demo-only, and what
            can become part of the first paid version.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mvpModules.map((module) => (
              <div
                key={module.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-slate-950">
                    {module.name}
                  </h3>
                  <StatusBadge status={module.status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {dealPaths.map((path) => (
            <div
              key={path.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-950">
                {path.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {path.description}
              </p>

              <div className="mt-5 space-y-3">
                {path.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">How to pitch this page</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            “I built this page to show the value clearly. The first version
            starts with construction material planning because that came from
            your Excel file. But the bigger idea is one owner command center
            where you can see business alerts, construction updates, smoke shop
            signals, payments, and daily action items in one place.”
          </p>
        </section>
      </div>
    </main>
  );
}