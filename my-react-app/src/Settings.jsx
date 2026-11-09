
import { useState } from "react";
import Header from "./Header";

function Settings() {
  const [name, setName] = useState("Tunde Bello");
  const [email, setEmail] = useState("tunde@example.com");
  const [theme, setTheme] = useState("Light");
  const [currency, setCurrency] = useState("NGN");
  const [saved, setSaved] = useState(false);

  const dark = theme === "Dark";

  const colors = {
    page: dark ? "bg-slate-900" : "bg-[#f8fafb]",
    card: dark
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-[#e9eeee]",
    title: dark ? "text-white" : "text-[#172b2a]",
    text: dark ? "text-slate-300" : "text-[#667573]",
    input: dark
      ? "bg-slate-700 border-slate-600 text-white"
      : "bg-white border-[#dfe7e5] text-[#263b38]",
  };

  function handleSave(event) {
    event.preventDefault();
    setSaved(true);
  }

  function handleCancel() {
    setName("Tunde Bello");
    setEmail("tunde@example.com");
    setTheme("Light");
    setCurrency("NGN");
    setSaved(false);
  }

  const firstName = name.trim().split(" ")[0] || "Tunde";

  return (
    <>
    </Header>
    <main className={`min-h-screen ${colors.page} px-5 py-8 sm:px-8 lg:px-10`}>
      <div className="mx-auto max-w-4xl">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className={`text-2xl font-bold tracking-tight ${colors.title}`}>
            Settings
          </h1>
          <p className={`mt-2 text-sm ${colors.text}`}>
            Manage your profile and how Kudi looks.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-6">

          {/* PROFILE CARD */}
          <section className={`overflow-hidden rounded-xl border ${colors.card}`}>
            <div className="border-b border-inherit px-6 py-5">
              <h2 className={`text-base font-semibold ${colors.title}`}>
                Profile Information
              </h2>
              <p className={`mt-1 text-sm ${colors.text}`}>
                Your name appears in the dashboard greeting.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#087f76] text-lg font-semibold text-white">
                  {name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className={`font-semibold ${colors.title}`}>
                    {name}
                  </p>
                  <p className={`mt-1 text-sm ${colors.text}`}>
                    Personal Account
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={`mb-2 block text-sm font-medium ${colors.title}`}>
                    Display name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[#087f76] focus:ring-2 focus:ring-[#087f76]/10 ${colors.input}`}
                  />
                </div>

                <div>
                  <label className={`mb-2 block text-sm font-medium ${colors.title}`}>
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[#087f76] focus:ring-2 focus:ring-[#087f76]/10 ${colors.input}`}
                  />
                </div>
              </div>

              <div className={`mt-7 rounded-lg border p-5 ${
                dark
                  ? "border-slate-600 bg-slate-700"
                  : "border-[#dcefeb] bg-[#f2f9f7]"
              }`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#087f76]">
                  Greeting preview
                </p>
                <p className={`mt-2 text-lg font-semibold ${colors.title}`}>
                  Good afternoon, {firstName}
                </p>
                <p className={`mt-1 text-sm ${colors.text}`}>
                  Welcome back to your Kudi dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* APPEARANCE CARD */}
          <section className={`overflow-hidden rounded-xl border ${colors.card}`}>
            <div className="border-b border-inherit px-6 py-5">
              <h2 className={`text-base font-semibold ${colors.title}`}>
                Appearance
              </h2>
              <p className={`mt-1 text-sm ${colors.text}`}>
                Choose how Kudi looks on your device.
              </p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setTheme("Light")}
                className={`rounded-xl border-2 p-4 text-left transition ${
                  theme === "Light"
                    ? "border-[#087f76] bg-[#f2f9f7]"
                    : dark
                      ? "border-slate-600 hover:border-slate-400"
                      : "border-[#e7eceb] hover:border-[#aabbb8]"
                }`}
              >
                <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
                  <div className="mb-3 h-2 w-2/5 rounded bg-slate-200" />
                  <div className="flex gap-2">
                    <div className="h-12 w-1/3 rounded bg-[#dcefeb]" />
                    <div className="h-12 flex-1 rounded bg-slate-100" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">
                    Light
                  </span>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
                    theme === "Light"
                      ? "border-[#087f76] bg-[#087f76] text-white"
                      : "border-slate-300"
                  }`}>
                    {theme === "Light" ? "✓" : ""}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Light background
                </p>
              </button>

              <button
                type="button"
                onClick={() => setTheme("Dark")}
                className={`rounded-xl border-2 p-4 text-left transition ${
                  theme === "Dark"
                    ? "border-[#087f76] bg-[#f2f9f7]"
                    : dark
                      ? "border-slate-600 hover:border-slate-400"
                      : "border-[#e7eceb] hover:border-[#aabbb8]"
                }`}
              >
                <div className="mb-4 rounded-lg border border-slate-700 bg-slate-900 p-3">
                  <div className="mb-3 h-2 w-2/5 rounded bg-slate-600" />
                  <div className="flex gap-2">
                    <div className="h-12 w-1/3 rounded bg-teal-800" />
                    <div className="h-12 flex-1 rounded bg-slate-700" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">
                    Dark
                  </span>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full border text-xs ${
                    theme === "Dark"
                      ? "border-[#087f76] bg-[#087f76] text-white"
                      : "border-slate-300"
                  }`}>
                    {theme === "Dark" ? "✓" : ""}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Dark background
                </p>
              </button>
            </div>

            <p className={`border-t border-inherit px-6 py-4 text-xs ${colors.text}`}>
              Your appearance preference is currently selected for this page.
            </p>
          </section>

          {/* CURRENCY CARD */}
          <section className={`overflow-hidden rounded-xl border ${colors.card}`}>
            <div className="border-b border-inherit px-6 py-5">
              <h2 className={`text-base font-semibold ${colors.title}`}>
                Currency
              </h2>
              <p className={`mt-1 text-sm ${colors.text}`}>
                Select your preferred currency.
              </p>
            </div>

            <div className="p-6">
              <div className="max-w-md">
                <label className={`mb-2 block text-sm font-medium ${colors.title}`}>
                  Preferred currency
                </label>

                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-[#087f76] ${colors.input}`}
                >
                  <option value="NGN">₦ Nigerian Naira (NGN)</option>
                  <option value="USD">$ US Dollar (USD)</option>
                  <option value="GBP">£ British Pound (GBP)</option>
                  <option value="EUR">€ Euro (EUR)</option>
                </select>

                <p className={`mt-3 text-xs ${colors.text}`}>
                  Selected currency: <span className="font-semibold">{currency}</span>
                </p>
              </div>
            </div>
          </section>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
            <p className={`text-xs ${colors.text}`}>
              Changes to your account preferences.
            </p>

            <div className="flex w-full gap-3 sm:w-auto">
              <button
                type="button"
                onClick={handleCancel}
                className={`flex-1 rounded-lg border px-6 py-3 text-sm font-semibold transition sm:flex-none ${
                  dark
                    ? "border-slate-600 text-slate-200 hover:bg-slate-700"
                    : "border-slate-300 text-slate-600 hover:bg-slate-100"
                }`}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 rounded-lg bg-[#087f76] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06665f] sm:flex-none"
              >
                Save Changes
              </button>
            </div>
          </div>

          {saved && (
            <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Your settings have been saved.
            </p>
          )}

        </form>
      </div>
    </main>
  );
}

export default Settings;
