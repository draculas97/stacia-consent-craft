import React, { useState } from 'react';
import Landing from '@/pages/Landing';
import ClientDashboard from '@/components/enhanced/ClientDashboard';
import BusinessDashboard from '@/components/BusinessDashboard';
import AdminDashboard from '@/components/AdminDashboard';

type Role = 'client' | 'business' | 'admin' | null;

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  const handleRoleSelect = (role: 'client' | 'business' | 'admin') => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  if (selectedRole === null) {
    return <Landing onRoleSelect={handleRoleSelect} />;
  }

  switch (selectedRole) {
    case 'client':
      return <ClientDashboard onBack={handleBack} />;
    case 'business':
      return <BusinessDashboard onBack={handleBack} />;
    case 'admin':
      return <AdminDashboard onBack={handleBack} />;
    default:
      return <Landing onRoleSelect={handleRoleSelect} />;
  }
};

export default Index;
