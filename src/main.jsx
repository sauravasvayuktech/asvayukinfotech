import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import Home from "./Components/HomePage/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/ContactPage/Contact.jsx";
import CaseStudies from "./Components/CaseStudiesPage/CaseStudies.jsx";
import Blog from "./Components/BlogPage/Blog.jsx";
import EnterprisePortalDevelopment from "./Components/ServicesPage/EnterprisePortalDevelopment.jsx";
import MobileAppDevelopment from "./Components/ServicesPage/MobileAppDevelopment.jsx";
import About from "./Components/About/About.jsx";
import Website_Development from "./Components/ServicesPage/Website_Development.jsx";
import Performance from "./Components/ServicesPage/Peformance.jsx";
import LowCode_NoCode from "./Components/ServicesPage/LowCode_NoCode.jsx";
import Woocomerce from "./Components/ServicesPage/Woocomerce.jsx";
import Ecommerce from "./Components/ServicesPage/Ecommerce.jsx";
import BlockChain from "./Components/ServicesPage/BlockChain.jsx";
import Magento_Dev from "./Components/ServicesPage/Magento_Dev.jsx";
import React_Native from "./Components/ServicesPage/React_Native.jsx";
import Saas_Dev from "./Components/ServicesPage/Saas_Dev.jsx";
import Shopify_Dev from "./Components/ServicesPage/Shopify_Dev.jsx";
import Software_Dev from "./Components/ServicesPage/Software_Dev.jsx";
import Laravel_Dev from "./Components/ServicesPage/Laravel_Dev.jsx";
import Ar_Vr_Dev from "./Components/ServicesPage/Ar_Vr_Dev.jsx";
import Social_Media_Marketing from "./Components/ServicesPage/Social_Media_Marketing.jsx";
import Search_Engine_Opti from "./Components/ServicesPage/Search_Engine_Opti.jsx";
import UI_UX_Design from "./Components/ServicesPage/UI_UX_Design.jsx";
import SingleBlog from "./Components/BlogPage/SingleBlog.jsx";
import Shopify_Blog from "./Components/BlogPage/Shopify_Blog.jsx";
import Enterprise_Blog from "./Components/BlogPage/Enterprise_Blog.jsx";
import MLM_software_developer_Chandigarh from "./Components/BlogPage/MLM_software_developer_Chandigarh.jsx";
import Smart_Contract_Developer_in_Chandigarh_Panchkula_Mohali from "./Components/BlogPage/Smart_Contract_Developer_in_Chandigarh_Panchkula_Mohali.jsx";
import Crypto_Software_Developer_in_Chandigarh from "./Components/BlogPage/Crypto_Software_Developer_in_Chandigarh.jxs.jsx";
import Crypto_Exchange_Developer from "./Components/BlogPage/Crypto_Exchange_Developer.jsx";
import Blockchain_Developer from "./Components/BlogPage/Blockchain_Developer.jsx";
import CRMDdeveloper from "./Components/BlogPage/CRMDdeveloper.jsx";
import MLM_Software from "./Components/ProductPages/MLM_Software.jsx";
import AI_chatBot from "./Components/ProductPages/AI_chatBot.jsx";
import CRM_ERP from "./Components/ProductPages/CRM_ERP.jsx";
import DAP_DAO from "./Components/ProductPages/DAP_DAO.jsx";
import CryptoWallet from "./Components/ProductPages/CryptoWallet.jsx";
import TradingBot from "./Components/ProductPages/TradingBot.jsx";
import JobPortal from "./Components/ProductPages/JobPortal.jsx";
import Game24 from "./Components/ProductPages/Game24.jsx";
import Uber_ola_clone from "./Components/ProductPages/Uber_ola_clone.jsx";
import CryptoExchange from "./Components/ProductPages/CryptoExchange.jsx";
import SchoolManagement from "./Components/ProductPages/SchoolManagement.jsx";
import Zomato_Urbanup_Clone from "./Components/ProductPages/Zomato_Urbanup_Clone.jsx";
import Layer1_Layer2_BlockChain from "./Components/ProductPages/Layer1_Layer2_BlockChain.jsx";
import HospitalManagement from "./Components/ProductPages/HospitalManagement.jsx";
import MultivendorEcommerce from "./Components/ProductPages/MultivendorEcommerce.jsx";
import SingleCaseStudy from "./Components/SingleCaseStudiesPages/SingleCaseStudy.jsx";
import QuadLock from "./Components/SingleCaseStudiesPages/QuadLock.jsx";
import TheModernShop from "./Components/SingleCaseStudiesPages/TheModernShop.jsx";
import Coffee49th from "./Components/SingleCaseStudiesPages/Coffee49th.jsx";
import KrishnaPearls from "./Components/SingleCaseStudiesPages/KrishnaPearls.jsx";
import Spicetribe from "./Components/SingleCaseStudiesPages/spicetribe.jsx";
import Bookmytask from "./Components/SingleCaseStudiesPages/Bookmytask.jsx";
import Kreshya from "./Components/SingleCaseStudiesPages/Kreshya.jsx";
import Page404 from "./Components/Page404.jsx";
import ShopifyDeveloper from "./Components/TopDevelopersChandigarh/ShopifyDeveloper.jsx";
import MlmDeveloper from "./Components/TopDevelopersChandigarh/mlmDeveloper.jsx";
import CryptoExchangeDeveloper from "./Components/TopDevelopersChandigarh/CryptoExchangeDeveloper.jsx";
import BlockchainDeveloper from "./Components/TopDevelopersChandigarh/blockchainDeveloper.jsx";
import SmartContract from "./Components/TopDevelopersChandigarh/SmartContract.jsx";
import PrivacyPolicy from "./Components/LegalPages/PrivacyPolicy.jsx";
import MetaverseDeveloper from "./Components/BlogPage/MetaverseDeveloper.jsx";
import SoftwareDeveloper from "./Components/BlogPage/SoftwareDeveloper.jsx";
import SmartContractDeveloperNew from "./Components/BlogPage/SmartContractDeveloperNew.jsx";
import BlockchainSolutions from "./Components/BlogPage/BlockchainSolutions.jsx";
import NFT_Development from "./Components/BlogPage/NFT_Development.jsx";
import DAppDevelopment from "./Components/BlogPage/DAppDevelopment.jsx";
import MLMSoftwareNew from "./Components/BlogPage/MLMSoftwareNew.jsx";
import HybridMLMSoftware from "./Components/BlogPage/HybridMLMSoftware.jsx";
import MLMPlanGenerator from "./Components/BlogPage/MLMPlanGenerator.jsx";
import Web3Development from "./Components/BlogPage/Web3Development.jsx";
import NetworkMarketing from "./Components/BlogPage/NetworkMarketing.jsx";
import CryptocurrencyApp from "./Components/BlogPage/CryptocurrencyApp.jsx";
import UIUXDesign from "./Components/BlogPage/UIUXDesign.jsx";
import ShopifyDevelopmentServices from "./Components/BlogPage/ShopifyDevelopmentServices.jsx";
import SEOWebDesign from "./Components/BlogPage/SEOWebDesign.jsx";
import CRMSoftware from "./Components/BlogPage/CRMSoftware.jsx";
import SecureBlockchainSoftware from "./Components/BlogPage/SecureBlockchainSoftware.jsx";
import ECommerceWebDevelopment from "./Components/BlogPage/ECommerceWebDevelopment.jsx";
import CustomWebDesign from "./Components/BlogPage/CustomWebDesign.jsx";
import MobileAppDevelopments from "./pages/Riyadh-Developement/MobileAppDevelopments.jsx";
import MernStackDevelopments from "./pages/Riyadh-Developement/MernStackDevelopments.jsx";
import EcommerceDevelopments from "./pages/Riyadh-Developement/EcommerceDevelopments.jsx";
import ShopifyDevelopments from "./pages/Riyadh-Developement/ShopifyDevelopments.jsx";
import DeliveryAppDevelopment from "./pages/Riyadh-Developement/DeliveryAppDevelopment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // About Page
      { path: "/about-us", element: <About /> },
      // Our Services
      {
        path: "/web-portal-development-chandigarh",
        element: <EnterprisePortalDevelopment />,
      },
      {
        path: "/mobile-app-development-chandigarh",
        element: <MobileAppDevelopment />,
      },
      {
        path: "/website-development-company-in-chandigarh-and-mohali",
        element: <Website_Development />,
      },
      {
        path: "/digital-marketing-services-in-chandigarh",
        element: <Performance />,
      },
      { path: "/lowcode-nocode-app", element: <LowCode_NoCode /> },
      {
        path: "/woocommerce-development-services-in-chandigarh",
        element: <Woocomerce />,
      },
      {
        path: "/ecommerce-website-designing-company-chandigarh",
        element: <Ecommerce />,
      },
      {
        path: "/blockchain-web-development-chandigarh",
        element: <BlockChain />,
      },
      {
        path: "/best-magento-developers-in-chandigarh",
        element: <Magento_Dev />,
      },
      {
        path: "/react-native-developers-chandigarh",
        element: <React_Native />,
      },
      {
        path: "/saas-app-development-company-in-chandigarh",
        element: <Saas_Dev />,
      },
      { path: "/shopify-development", element: <Shopify_Dev /> },
      {
        path: "/software-development-company-in-chandigarh",
        element: <Software_Dev />,
      },
      {
        path: "/laravel-development-company-in-chandigarh",
        element: <Laravel_Dev />,
      },
      { path: "/ar-vr-development", element: <Ar_Vr_Dev /> },
      {
        path: "/social-media-marketing-agency-in-chandigarh",
        element: <Social_Media_Marketing />,
      },
      {
        path: "/best-seo-services-in-chandigarh",
        element: <Search_Engine_Opti />,
      },
      {
        path: "/best-ui-ux-designers-in-chandigarh",
        element: <UI_UX_Design />,
      },
      { path: "/mlm-software-chandigarh-panchkula", element: <MLM_Software /> },
      { path: "/ai-chatbot-chandigarh-panchkula", element: <AI_chatBot /> },
      { path: "/crm-erp", element: <CRM_ERP /> },
      { path: "/dap-dao-chandigarh-panchkula", element: <DAP_DAO /> },
      {
        path: "/crypto-wallet-solutions-chandigarh-panchkula",
        element: <CryptoWallet />,
      },
      { path: "/trading-bot-chandigarh-panchkula", element: <TradingBot /> },
      { path: "/job-portal-solutions", element: <JobPortal /> },
      { path: "/24-games-panchkula-chandigarh", element: <Game24 /> },
      {
        path: "/uber-ola-clone-panchkula-chandigarh",
        element: <Uber_ola_clone />,
      },
      {
        path: "/crypto-exchange-chandigarh-panchkula",
        element: <CryptoExchange />,
      },
      {
        path: "/school-management-panchkula-chandigarh",
        element: <SchoolManagement />,
      },
      {
        path: "/zomato-urbanup-clone-panchkula-chandigarh",
        element: <Zomato_Urbanup_Clone />,
      },
      {
        path: "/layer1-layer2-blockchain-panchkula-chandigarh",
        element: <Layer1_Layer2_BlockChain />,
      },
      {
        path: "/hospital-management-panchkula-chandigarh",
        element: <HospitalManagement />,
      },
      {
        path: "/multi-vendor-ecommerce-panchkula-chandigarh",
        element: <MultivendorEcommerce />,
      },
      // Blog and Single Blogs
      { path: "/blog", element: <Blog /> },
      {
        path: "/blog/Boost-Your-Business-with-SEO-Key-Tactics-to-Drive-Organic-Traffic",
        element: <SingleBlog />,
      },
      {
        path: "/blog/Revolutionize-Your-Business-with-Asvayuks-Shopify-Development",
        element: <Shopify_Blog />,
      },
      {
        path: "/blog/Enhance-Efficiency-with-Custom-Enterprise-Portals",
        element: <Enterprise_Blog />,
      },
      {
        path: "/blog/MLM-Software-Developer-in-Chandigarh-Panchkula-Mohali",
        element: <MLM_software_developer_Chandigarh />,
      },
      {
        path: "/blog/Smart-Contract-Developer-in-Chandigarh-Panchkula-Mohali",
        element: <Smart_Contract_Developer_in_Chandigarh_Panchkula_Mohali />,
      },
      {
        path: "/blog/Crypto-Software-Development-by-Asvayuk-Technologies",
        element: <Crypto_Software_Developer_in_Chandigarh />,
      },
      {
        path: "/blog/Crypto-Exchange-Development-in-Chandigarh-Zirakpur-Mohali",
        element: <Crypto_Exchange_Developer />,
      },
      {
        path: "/blog/Blockchain-Developer-in-Zirakpur-Chandigarh-Panchkula-Mohali",
        element: <Blockchain_Developer />,
      },
      {
        path: "/blog/CRM-Developer-in-Chandigarh-Panchkula-Mohali",
        element: <CRMDdeveloper />,
      },
      {
        path: "/blog/metaverse-developer-in-chandigarh",
        element: <MetaverseDeveloper />,
      },
      {
        path: "/blog/software-developer-chandigarh",
        element: <SoftwareDeveloper />,
      },
      {
        path: "/blog/smart-contract-developer-mohali",
        element: <SmartContractDeveloperNew />,
      },
      {
        path: "/blog/token-developer-chandigarh",
        element: <BlockchainSolutions />,
      },
      {
        path: "/blog/nft-development-chandigarh",
        element: <NFT_Development />,
      },
      {
        path: "/blog/dapp-development-chandigarh",
        element: <DAppDevelopment />,
      },
      {
        path: "/blog/binary-mlm-software-chandigarh",
        element: <MLMSoftwareNew />,
      },
      {
        path: "/blog/hybrid-mlm-software-developer-chandigarh",
        element: <HybridMLMSoftware />,
      },
      {
        path: "/blog/mlm-plan-generator-chandigarh",
        element: <MLMPlanGenerator />,
      },
      {
        path: "/blog/web3-development-future-internet",
        element: <Web3Development />,
      },
      {
        path: "/blog/network-marketing-software",
        element: <NetworkMarketing />,
      },
      {
        path: "/blog/cryptocurrency-app-development",
        element: <CryptocurrencyApp />,
      },
      {
        path: "/blog/ui-ux-design-services-chandigarh",
        element: <UIUXDesign />,
      },
      {
        path: "/blog/shopify-development-services-chandigarh",
        element: <ShopifyDevelopmentServices />,
      },
      {
        path: "/blog/seo-web-design-services-chandigarh",
        element: <SEOWebDesign />,
      },
      {
        path: "/blog/chandigarh-crm-software-solutions",
        element: <CRMSoftware />,
      },
      {
        path: "/blog/secure-blockchain-software-development",
        element: <SecureBlockchainSoftware />,
      },
      {
        path: "/blog/ecommerce-web-development-chandigarh",
        element: <ECommerceWebDevelopment />,
      },
      {
        path: "/blog/custom-web-design-chandigarh",
        element: <CustomWebDesign />,
      },
      // Case Studies
      { path: "/case-studies", element: <CaseStudies /> },
      { path: "/case-studies/moonlightconcept", element: <SingleCaseStudy /> },
      { path: "/case-studies/quadlock", element: <QuadLock /> },
      { path: "/case-studies/themodernshop", element: <TheModernShop /> },
      { path: "/case-studies/49thcoffee", element: <Coffee49th /> },
      {
        path: "/case-studies/krishnapearlsandjewellers",
        element: <KrishnaPearls />,
      },
      { path: "/case-studies/spicetribe", element: <Spicetribe /> },
      { path: "/case-studies/bookmytask", element: <Bookmytask /> },
      { path: "/case-studies/kreshya", element: <Kreshya /> },
      // Contact Us
      { path: "/contact-us", element: <Contact /> },
      // Legal Page
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      // Top Developers Chandigarh Pages
      {
        path: "/best-shopify-developer-chandigarh",
        element: <ShopifyDeveloper />,
      },
      {
        path: "/best-mlm-software-developer-chandigarh",
        element: <MlmDeveloper />,
      },
      {
        path: "/best-crypto-exchange-developer-chandigarh",
        element: <CryptoExchangeDeveloper />,
      },
      {
        path: "/best-blockchain-developer-chandigarh",
        element: <BlockchainDeveloper />,
      },
      {
        path: "/best-smart-contract-developer-chandigarh",
        element: <SmartContract />,
      },
      {
        path: "mobile-app-development-company-riyadh-saudi-arabia",
        element: <MobileAppDevelopments />,
      },
      {
        path: "mern-stack-development-company-riyadh-saudi-arabia",
        element: <MernStackDevelopments />,
      },
      {
        path: "e-commerce-development-company-riyadh-saudi-arabia",
        element: <EcommerceDevelopments />,
      },
      {
        path: "shopify-development-company-riyadh-saudi-arabia",
        element: <ShopifyDevelopments />,
      },
      {
        path: "delivery-app-development-company-riyadh-saudi-arabia",
        element: <DeliveryAppDevelopment />,
      },
      // 404 Page
      { path: "*", element: <Page404 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider RouterProvider router={router}>
    <App />
  </RouterProvider>
);
