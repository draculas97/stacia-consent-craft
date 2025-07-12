import React from 'react';
import { Shield, Building2, Users, ChevronRight, Zap, Lock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface RoleSelectorProps {
  onSelectRole: (role: 'client' | 'business' | 'admin') => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  const roles = [
    {
      id: 'client',
      title: 'Data Principal',
      subtitle: 'End User / Consumer',
      description: 'Manage your personal data consents and privacy preferences with granular control.',
      icon: Users,
      features: ['Granular Consent Control', 'Privacy Dashboard', 'Data Rights Management', 'Consent History'],
      color: 'from-blue-500 to-blue-600',
      buttonVariant: 'gradient' as const
    },
    {
      id: 'business',
      title: 'Data Fiduciary',
      subtitle: 'Business / Organization',
      description: 'Comprehensive consent management and compliance tools for your business applications.',
      icon: Building2,
      features: ['AI Code Analysis', 'Legal Document Generation', 'Compliance Dashboard', 'Consent Analytics'],
      color: 'from-primary to-primary-glow',
      buttonVariant: 'default' as const
    },
    {
      id: 'admin',
      title: 'Stacia Platform',
      subtitle: 'Consent Manager / Admin',
      description: 'Advanced platform administration with encrypted consent storage and regulatory oversight.',
      icon: Shield,
      features: ['AES-256 Encryption', 'DPDP Act Compliance', 'Audit Trails', 'Global Consent Registry'],
      color: 'from-accent to-accent-glow',
      buttonVariant: 'success' as const
    }
  ];

  return (
    <div className="fixed inset-0 bg-gradient-hero flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-6xl animate-fade-in">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-md">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Stacia CMS</h1>
          </div>
          <p className="text-xl text-white/80 mb-4">
            AI-Powered Consent Management & DPDP Act Compliance Platform
          </p>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose your role to access the appropriate dashboard and tools for managing data consent and privacy compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id} 
                className="relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{role.title}</CardTitle>
                      <CardDescription className="text-white/60 text-sm">
                        {role.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {role.description}
                  </p>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-white font-medium text-sm flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {role.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-white/70 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant={role.buttonVariant}
                    size="lg"
                    className="w-full group/btn"
                    onClick={() => onSelectRole(role.id as 'client' | 'business' | 'admin')}
                  >
                    Access {role.title}
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span>AES-256 Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>DPDP Act Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Real-time Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;