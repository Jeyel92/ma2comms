import { useEffect } from 'react';
import { Route, Routes,useLocation  } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import BlogPage from "./components/Pages/BlogPage";
import BlogDetailsPage from "./components/Pages/BlogDetailsPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import PortfolioDetailsPage from "./components/Pages/PortfolioDetailsPage";
// import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from "./components/Pages/ServicesPage";
// import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from "./components/Pages/PortfolioPage";
// import TeamDetails from './components/Pages/TeamDetails';
// import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
// import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
// import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
// import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
// import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
// import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from "./components/Layout";
// import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
// import FaqPage from './components/Pages/FaqPage';
import ReactGA from 'react-ga';

function App() {
  const routes = (
    <Route>
      <Route index element={<Home />} />
      <Route path="sobre" element={<AboutPage />} />
      <Route path="servicos" element={<ServicesPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route
        path="portfolio/:portfolioDetailsId"
        element={<PortfolioDetailsPage />}
      />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/:slug" element={<BlogDetailsPage />} />
      <Route path="blog/category/:categoryName" element={<BlogPage />} />
      <Route path="blog/tag/:tagName" element={<BlogPage />} />
      <Route path="contato" element={<ContactPage />} />
    </Route>
  );

  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>          
          {routes}
          <Route path="pt">{routes}</Route>
          <Route path="en">{routes}</Route>
          <Route path="de">{routes}</Route>
          {/*     
          
          <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          />
          <Route path="digital-agency" element={<DigitalAgencyHome />} />
          <Route path="marketing-agency" element={<MarketingAgencyHome />} />
         
          </Route>
          
          <Route
            path=":lang/service/:serviceDetailsId"
            element={<ServiceDetailsPage />}
          />
         
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
         
          
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:teamDetails" element={<TeamDetails />} />
          <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
          <Route
            path="creative-portfolio"
            element={<CreativePortfolioHome />}
          />
          <Route
            path="showcase-portfolio"
            element={<ShowcasePortfolioHome />}
          />
          <Route
            path="case-study-showcase"
            element={<CaseStudyShowcaseHome />}
          />*/}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
