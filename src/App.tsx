import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Policies from "./pages/Policies";
import NotFound from "./pages/404";
import Contact from "./pages/iletisim";
import Hakkimizda from "./pages/hakkimizda";
import Services from "./pages/hizmetlerimiz";
import Pay from "./pages/checkout";
import CheckoutPage from "./pages/checkout";
import ServiceDetailPage from "./pages/hizmetlerimiz/[slug]";

// -------------------------
// Page Transition Wrapper
// -------------------------
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}     // açılış animasyonu
      animate={{ opacity: 1, y: 0 }}      // görünür hâle geliyor
      exit={{ opacity: 0, y: -10 }}       // çıkış animasyonu
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

// -------------------------
// Animated Routes (Magic)
// -------------------------
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
          <Route
          path="/odeme"
          element={
            <PageTransition>
              <Pay/>
            </PageTransition>
          }
        />

         <Route
          path="/odeme/:productId"
          element={
            <PageTransition>
              <CheckoutPage />
            </PageTransition>
          }
        />

        <Route
          path="/policies"
          element={
            <PageTransition>
              <Policies />
            </PageTransition>
          }
        />
           
        
         <Route
          path="/hizmetlerimiz"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
<Route
  path="/hizmetlerimiz/:slug"
  element={
    <PageTransition>
      <ServiceDetailPage />
    </PageTransition>
  }
/>
 <Route
          path="/policies"
          element={
            <PageTransition>
              <Policies />
            </PageTransition>
          }
        />

        <Route
          path="/iletisim"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        <Route
          path="/hakkimizda"
          element={
            <PageTransition>
              <Hakkimizda />
            </PageTransition>
          }
        />

        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />

      </Routes>
    </AnimatePresence>
  );
};

// -------------------------
// MAIN APP
// -------------------------
function App() {
  return (
    <BrowserRouter>
        <ScrollToTop /> 
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
