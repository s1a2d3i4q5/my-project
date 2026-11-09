
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

// Import pages
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Budgets from "./Budgets";
import Reports from "./Reports";
import Settings from "./Settings";

function App() {
  return (
    <BrowserRouter>

      {/* Navigation links */}
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/budgets">Budgets</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>

      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
