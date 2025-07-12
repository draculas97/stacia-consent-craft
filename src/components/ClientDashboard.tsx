import React, { useState } from 'react';
import { Shield, Eye, Download, Settings, Bell, Lock, Users, BarChart3, ChevronRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ClientDashboardProps {
  onBack: () => void;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ onBack }) => {
  const [consents, setConsents] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    personalization: true,
    thirdParty: false,
    location: false,
    communication: true,
    profiling: false
  });

  const toggleConsent = (key: keyof typeof consents) => {
    if (key === 'essential') return; // Essential cannot be toggled
    setConsents(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const consentCategories = [
    {
      key: 'essential' as const,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality and security',
      required: true,
      details: 'Session management, security, basic functionality'
    },
    {
      key: 'analytics' as const,
      title: 'Analytics & Performance',
      description: 'Help us understand how you use our services',
      required: false,
      details: 'Google Analytics, performance monitoring, usage statistics'
    },
    {
      key: 'marketing' as const,
      title: 'Marketing & Advertising',
      description: 'Personalized advertisements and marketing content',
      required: false,
      details: 'Ad targeting, campaign tracking, social media integration'
    },
    {
      key: 'personalization' as const,
      title: 'Personalization',
      description: 'Customize your experience based on your preferences',
      required: false,
      details: 'Content recommendations, UI preferences, saved settings'
    },
    {
      key: 'thirdParty' as const,
      title: 'Third-Party Services',
      description: 'Integration with external services and APIs',
      required: false,
      details: 'Social login, payment processing, external widgets'
    },
    {
      key: 'location' as const,
      title: 'Location Services',
      description: 'Access to your geographical location',
      required: false,
      details: 'GPS data, IP-based location, location-based services'
    },
    {
      key: 'communication' as const,
      title: 'Communication',
      description: 'Email notifications and communication preferences',
      required: false,
      details: 'Email updates, SMS notifications, in-app messages'
    },
    {
      key: 'profiling' as const,
      title: 'User Profiling',
      description: 'Create profiles for personalized services',
      required: false,
      details: 'Behavioral analysis, preference modeling, demographic data'
    }
  ];

  const consentHistory = [
    { date: '2024-01-15', action: 'Marketing consent withdrawn', status: 'updated' },
    { date: '2024-01-10', action: 'Analytics consent granted', status: 'granted' },
    { date: '2024-01-05', action: 'Initial consent provided', status: 'initial' },
  ];

  const activeConsents = Object.values(consents).filter(Boolean).length;
  const totalConsents = Object.keys(consents).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack}>
                ← Back to Role Selection
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Data Principal Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Manage your privacy and consent preferences</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-accent/10">
                {activeConsents}/{totalConsents} Active Consents
              </Badge>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Consent Management */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Consent Management
                    </CardTitle>
                    <CardDescription>
                      Control how your personal data is used across all connected services
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Advanced Settings
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {consentCategories.map((category) => (
                  <div key={category.key} className="p-4 rounded-lg border bg-white/50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium">{category.title}</h3>
                          {category.required && (
                            <Badge variant="secondary" className="text-xs">Required</Badge>
                          )}
                          {consents[category.key] && !category.required && (
                            <Badge variant="outline" className="text-xs bg-accent/10 text-accent">
                              <Check className="h-3 w-3 mr-1" />
                              Active
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                        <p className="text-xs text-muted-foreground">{category.details}</p>
                      </div>
                      <Switch
                        checked={consents[category.key]}
                        onCheckedChange={() => toggleConsent(category.key)}
                        disabled={category.required}
                        className="ml-4"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Consent History */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Consent History
                </CardTitle>
                <CardDescription>Track all changes to your consent preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {consentHistory.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/50">
                      <div className={`p-2 rounded-full ${
                        item.status === 'granted' ? 'bg-accent/10' :
                        item.status === 'updated' ? 'bg-warning/10' : 'bg-muted'
                      }`}>
                        {item.status === 'granted' ? (
                          <Check className="h-4 w-4 text-accent" />
                        ) : item.status === 'updated' ? (
                          <Settings className="h-4 w-4 text-warning" />
                        ) : (
                          <Shield className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Privacy Overview */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Privacy Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 rounded-lg bg-accent/5">
                  <div className="text-3xl font-bold text-accent mb-1">{activeConsents}</div>
                  <div className="text-sm text-muted-foreground">Active Consents</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Data Security</span>
                    <Badge className="bg-accent text-accent-foreground">AES-256</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Compliance</span>
                    <Badge className="bg-primary text-primary-foreground">DPDP Act</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Last Updated</span>
                    <span className="text-muted-foreground">Today</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download My Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="h-4 w-4 mr-2" />
                  View Data Usage
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <X className="h-4 w-4 mr-2" />
                  Request Data Deletion
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Notification Settings
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Get support with your privacy settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="premium" className="w-full">
                  Contact Privacy Team
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;