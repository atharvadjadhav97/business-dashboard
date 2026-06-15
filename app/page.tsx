import Link from "next/link";
import {
  Building2,
  Hammer,
  Store,
  WalletCards,
  ClipboardCheck,
  CalendarCheck,
} from "lucide-react";

const modules = [
  {
    title: "Owner Dashboard",
    description: "One place to track all businesses, alerts, money, and operations.",
    href: "/dashboard",
    icon: Building2,
  },
  {
    title: "Owner Daily Snapshot",
    description: "Morning summary of alerts, payments, operations, and action items.",
    href: "/owner-daily-snapshot",
    icon: CalendarCheck,
  },
  {
    title: "Construction",
    description: "Track sites, houses, materials, purchases, and daily updates.",
    href: "/construction",
    icon: Hammer,
  },
  {
    title: "Smoke Shops",
    description: "Placeholder for sales, inventory, cash mismatch, and low-stock alerts.",
    href: "/smoke-shops",
    icon: Store,
  },
  {
    title: "Payments",
    description: "Placeholder for receivables, payables, overdue invoices, and vendor bills.",
    href: "/payments",
    icon: WalletCards,
  },
  {
    title: "Manager Checklists",
    description: "Placeholder for opening, closing, and daily supervisor checklists.",
    href: "/checklists",
    icon: ClipboardCheck,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">MVP Demo</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Owner Command Center
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            A simple dashboard to help a multi-business owner track construction,
            smoke shops, payments, manager updates, and daily alerts from one place.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <Link
                key={module.title}
                href={module.href}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                  <Icon className="h-6 w-6 text-slate-700" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">{module.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{module.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}