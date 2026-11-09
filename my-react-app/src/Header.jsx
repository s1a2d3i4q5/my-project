
import { NavLink } from "react-router-dom";

// Import all SVG icons
import kudiIcon from "./src/assets/logo-mark.svg";
import dashboardIcon from "./src/assets/icons/dashboard.svg";
import transactionsIcon from "./src/assets/icons/transactions.svg";
import budgetsIcon from "./src/assets/icons/budgets.svg";
import reportsIcon from "./src/assets/icons/reports.svg";
import settingsIcon from "./src/assets/icons/settings.svg";

function Header() {

  // Navigation menu
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: dashboardIcon,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: transactionsIcon,
    },
    {
      name: "Budgets",
      path: "/budgets",
      icon: budgetsIcon,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: reportsIcon,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: settingsIcon,
    },
  ];

  return (

    <aside className="w-[290px] min-h-screen h-screen bg-white border-r border-[#e2e8f0] flex flex-col sticky top-0 shrink-0">

      {/* KUDI LOGO */}

      <div className="px-8 py-8">

        <div className="flex items-center gap-3">

          <img
            src={kudiIcon}
            alt="Kudi Logo"
            className="w-11 h-11 object-contain"
          />

          <h1 className="text-2xl font-bold text-[#10233f]">
            Kudi
          </h1>

        </div>

      </div>


      {/* NAVIGATION MENU */}

      <nav className="flex-1 px-5 pt-4">

        <div className="space-y-3">

          {menuItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#effcf9] text-[#087d73] font-semibold"
                    : "text-[#42536c] hover:bg-gray-50 hover:text-[#087d73]"
                }`
              }
            >

              <img
                src={item.icon}
                alt=""
                className="w-6 h-6 object-contain"
              />

              <span className="text-base">
                {item.name}
              </span>

            </NavLink>

          ))}

        </div>

      </nav>


      {/* USER PROFILE */}

      <div className="p-5 mt-auto">

        <div className="border border-[#e2e8f0] rounded-2xl p-4 flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-[#c9faf0] flex items-center justify-center shrink-0">

            <span className="text-[#107d73] text-2xl font-bold">
              T
            </span>

          </div>

          <div className="min-w-0">

            <h3 className="font-semibold text-[#10233f] truncate">
              Tunde Bello
            </h3>

            <p className="text-sm text-gray-500 truncate">
              tunde@example.com
            </p>

          </div>

        </div>

      </div>

    </aside>

  );

}

export default Header;
