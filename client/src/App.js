import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Overview from "scenes/overview";
import Breakdown from "scenes/breakdown";
import Products from "scenes/products";
import AirTable from "scenes/airtable";
import Contracts from "scenes/contracts";
import Royalties from "scenes/royalties";
import RoyaltyForm from "scenes/royaltyform";
import Admin from "scenes/admin";
import Login from "scenes/login";
import DataTable from "scenes/datatable";

function App() {
	const mode = useSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route
								path="/"
								element={<Navigate to="/dashboard" replace />}
							/>
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/overview" element={<Overview />} />
							<Route path="/breakdown" element={<Breakdown />} />
							<Route path="/products" element={<DataTable />} />
							<Route path="/airtable" element={<AirTable />} />
							<Route path="/contracts" element={<Contracts />} />
							<Route path="/royalties" element={<Royalties />} />
							<Route path="/royaltyform" element={<RoyaltyForm />} />
							{/* <Route path="/datatable" element={<DataTable />} /> */}
							<Route path="/admin" element={<Admin />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
