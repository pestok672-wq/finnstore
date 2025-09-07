import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import GameCatalog from './pages/game-catalog';
import SupportCenter from './pages/support-center';
import SecurityTrust from './pages/security-trust';
import AccountDashboard from './pages/account-dashboard';
import PaymentCheckout from './pages/payment-checkout';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AccountDashboard />} />
        <Route path="/game-catalog" element={<GameCatalog />} />
        <Route path="/support-center" element={<SupportCenter />} />
        <Route path="/security-trust" element={<SecurityTrust />} />
        <Route path="/account-dashboard" element={<AccountDashboard />} />
        <Route path="/payment-checkout" element={<PaymentCheckout />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
