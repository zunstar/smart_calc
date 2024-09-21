// src/App.tsx
import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import MenuAppBar from './components/common/MenuAppBar';
import TemporaryDrawer from './components/common/TemporaryDrawer';
import Notifications from './components/common/Notifications';
import ServiceTerms from './pages/ServiceTerms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AnnualLeaveCalculator from './pages/AnnualLeaveCalculator';
import CompanyInfo from './pages/CompanyInfo';
import Salary from './pages/salary/Salary';
import SalaryInfo from './pages/salary/SalaryInfo';
import SalaryCalculator from './pages/salary/SalaryCalculator';
import SalaryGrowth from './pages/salary/SalaryGrowth';
import RetirementInfo from './pages/RetirementInfo';
import RetirementCalculator from './pages/RetirementCalculator';

const App: FC = () => {
  return (
    <Router>
      <MenuAppBar />
      <TemporaryDrawer />
      <Box
        sx={{
          padding: 2, // 원하는 패딩 값 설정
        }}
      >
        <Routes>
          <Route path="/" element={<Salary />} />
          <Route path="/salary-info" element={<SalaryInfo />} />
          <Route path="/salary-calculator" element={<SalaryCalculator />} />
          <Route path="/salary-growth" element={<SalaryGrowth />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/service-terms" element={<ServiceTerms />} />
          <Route
            path="/annual-leave-calculator"
            element={<AnnualLeaveCalculator />}
          />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/retirement-info" element={<RetirementInfo />} />
          <Route
            path="/retirement-calculator"
            element={<RetirementCalculator />}
          />
        </Routes>
        <Notifications />
      </Box>
    </Router>
  );
};

export default App;
