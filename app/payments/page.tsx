import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Banknote,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  ReceiptText,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const receivables = [
  {
    customer: "Plano Villas Client",
    business: "Construction",
    amount: "$8,500",
    dueDate: "12 days overdue",
    status: "Overdue",
    note: "Final payment pending after material delivery.",
  },
  {
    customer: "Remodel Project Customer",
    business: "Construction",
    amount: "$10,000",
    dueDate: "Due this week",
    status: "Due Soon",
    note: "Second milestone payment expected.",
  },
  {
    customer: "Retail Vendor Credit",
    business: "Smoke Shops",
    amount: "$2,400",
    dueDate: "Due in 10 days",
    status: "Open",
    note: "Vendor rebate/credit expected.",
  },
];

const payables = [
  {
    vendor: "Stone World",
    business: "Construction",
    amount: "$4,200",
    dueDate: "Due tomorrow",
    status: "Due Soon",
    note: "Granite supplier payment.",
  },
  {
    vendor: "ABC Tiles",
    business: "Construction",
    amount: "$2,750",
    dueDate: "Due Friday",
    status: "Open",
    note: "Tile order for Plano Villas.",
  },
  {
    vendor: "Smoke Shop Distributor",
    business: "Smoke Shops",
    amount: "$3,600",
    dueDate: "Due in 5 days",
    status: "Open",
    note: "Weekly inventory supply bill.",
  },
];

const cashFlowAlerts = [
  {
    title: "Large customer payment overdue",
    description:
      "$8,500 construction receivable is overdue by 12 days and should be followed up.",
    urgency: "High",
  },
  {
    title: "Vendor payment due before customer payment",
    description:
      "Stone World payment is due tomorrow while customer milestone payment is still pending.",
    urgency: "Medium",
  },
  {
    title: "Smoke shop distributor bill due soon",
    description:
      "Upcoming inventory bill may impact weekly cash position if sales are lower than expected.",
    urgency: "Medium",
  },
];

const futureFeatures = [
  "Track receivables and payables across all businesses",
  "Flag overdue invoices automatically",
  "Show vendor bills due this week",
  "Send owner payment reminders",
  "Attach invoice or receipt files",
  "Show cash-flow risk before money gets tight",
];

function StatusBadge({ status }: { status: string }) {
  const classes =
    status === "Overdue"
      ? "bg-rose-50 text-rose-700 ring-rose-200"
      : status === "Due Soon"
      ? "bg-amber-50 text-amber-700 ring-amber-200"
      : "bg-emerald-50 text-emerald-700 ring-emerald-200";

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

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Cash Flow Placeholder
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Payments & Cash Flow
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              A placeholder dashboard showing how the owner could track money
              coming in, bills going out, overdue invoices, and cash-flow alerts
              across all businesses.
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
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 p-6 text-white">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <WalletCards className="h-5 w-5 text-emerald-200" />
                  <h2 className="text-2xl font-semibold">
                    Owner-level money view
                  </h2>
                </div>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                  This does not need to replace QuickBooks first. The MVP can
                  simply show what money is pending, what bills are due, and
                  what needs follow-up.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-sm">
                Placeholder Module
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-4">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
              <TrendingUp className="mb-3 h-6 w-6 text-emerald-700" />
              <p className="text-sm font-semibold text-emerald-700">
                Receivables
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-950">
                $20.9k
              </p>
              <p className="mt-1 text-xs text-emerald-700/80">
                Money expected in
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5 shadow-sm">
              <TrendingDown className="mb-3 h-6 w-6 text-orange-700" />
              <p className="text-sm font-semibold text-orange-700">
                Payables
              </p>
              <p className="mt-2 text-3xl font-bold text-orange-950">
                $10.6k
              </p>
              <p className="mt-1 text-xs text-orange-700/80">
                Bills and vendors
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5 shadow-sm">
              <Clock3 className="mb-3 h-6 w-6 text-rose-700" />
              <p className="text-sm font-semibold text-rose-700">
                Overdue
              </p>
              <p className="mt-2 text-3xl font-bold text-rose-950">$8.5k</p>
              <p className="mt-1 text-xs text-rose-700/80">
                Needs follow-up
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
              <CalendarClock className="mb-3 h-6 w-6 text-blue-700" />
              <p className="text-sm font-semibold text-blue-700">
                Due This Week
              </p>
              <p className="mt-2 text-3xl font-bold text-blue-950">4</p>
              <p className="mt-1 text-xs text-blue-700/80">
                Payments to review
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="h-5 w-5 text-emerald-700" />
              <h2 className="text-xl font-semibold text-slate-950">
                Receivables
              </h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Money expected from customers, clients, or credits.
            </p>

            <div className="mt-5 space-y-4">
              {receivables.map((item) => (
                <div
                  key={`${item.customer}-${item.amount}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {item.customer}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.business}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.note}
                      </p>
                    </div>

                    <div className="shrink-0 text-left md:text-right">
                      <p className="text-lg font-bold text-slate-950">
                        {item.amount}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.dueDate}
                      </p>
                      <div className="mt-3">
                        <StatusBadge status={item.status} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-orange-700" />
              <h2 className="text-xl font-semibold text-slate-950">
                Payables
              </h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Bills, vendor payments, and upcoming outgoing cash.
            </p>

            <div className="mt-5 space-y-4">
              {payables.map((item) => (
                <div
                  key={`${item.vendor}-${item.amount}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {item.vendor}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.business}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.note}
                      </p>
                    </div>

                    <div className="shrink-0 text-left md:text-right">
                      <p className="text-lg font-bold text-slate-950">
                        {item.amount}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.dueDate}
                      </p>
                      <div className="mt-3">
                        <StatusBadge status={item.status} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                  Cash Flow Alerts
                </h2>
                <p className="text-sm text-slate-500">
                  These are the money-related items the owner should notice first.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {cashFlowAlerts.map((alert) => (
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
              <ReceiptText className="h-5 w-5 text-emerald-700" />
              <h2 className="text-xl font-semibold text-slate-950">
                Future Payment Tracker
              </h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              A real version can start simple: manual entries or spreadsheet
              import first, then automation later.
            </p>

            <div className="mt-5 space-y-3">
              {futureFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white shadow-sm">
          <h2 className="text-xl font-semibold">How to pitch this page</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
            “This page is not meant to replace your accounting software on day
            one. It gives you an owner-level view of what money is coming in,
            what bills are going out, what is overdue, and what needs follow-up.
            This helps you avoid surprises and keep track of cash flow across
            construction and retail businesses.”
          </p>
        </section>
      </div>
    </main>
  );
}