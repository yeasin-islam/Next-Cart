import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function Layout({ children }) {
  // This layout will apply to all pages within the /dashboard route
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}