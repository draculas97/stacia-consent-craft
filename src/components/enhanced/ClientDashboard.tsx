import React, { useState } from 'react';
import { Shield, Eye, Download, Settings, Bell, Lock, Users, BarChart3, ChevronRight, Check, X, Mail, MapPin, Building, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface ClientDashboardProps {
  onBack: () => void;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ onBack }) => {
  const { toast } = useToast();
  const [selectedBusiness, setSelectedBusiness] = useState('');
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

  const businessTypes = [
    { value: 'ecommerce', label: 'E-commerce', icon: '🛒' },
    { value: 'banking', label: 'Banking & Financial', icon: '🏦' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'education', label: 'Education', icon: '🎓' },
    { value: 'saas', label: 'SaaS & Technology', icon: '💻' },
    { value: 'media', label: 'Media & Entertainment', icon: '🎬' },
    { value: 'retail', label: 'Retail & Consumer', icon: '🛍️' },
    { value: 'government', label: 'Government & Public', icon: '🏛️' }
  ];

  const getConsentPolicies = (businessType: string) => {
    const basePolicies = {
      essential: {
        title: 'Essential Cookies',
        description: 'Required for basic website functionality and security',
        required: true,
        details: 'Session management, security, basic functionality'
      },
      analytics: {
        title: 'Analytics & Performance',
        description: 'Help us understand how you use our services',
        required: false,
        details: 'Google Analytics, performance monitoring, usage statistics'
      },
      marketing: {
        title: 'Marketing & Advertising',
        description: 'Personalized advertisements and marketing content',
        required: false,
        details: 'Ad targeting, campaign tracking, social media integration'
      },
      personalization: {
        title: 'Personalization',
        description: 'Customize your experience based on your preferences',
        required: false,
        details: 'Content recommendations, UI preferences, saved settings'
      },
      thirdParty: {
        title: 'Third-Party Services',
        description: 'Integration with external services and APIs',
        required: false,
        details: 'Social login, payment processing, external widgets'
      },
      location: {
        title: 'Location Services',
        description: 'Access to your geographical location',
        required: false,
        details: 'GPS data, IP-based location, location-based services'
      },
      communication: {
        title: 'Communication',
        description: 'Email notifications and communication preferences',
        required: false,
        details: 'Email updates, SMS notifications, in-app messages'
      },
      profiling: {
        title: 'User Profiling',
        description: 'Create profiles for personalized services',
        required: false,
        details: 'Behavioral analysis, preference modeling, demographic data'
      }
    };

    // Customize based on business type
    switch (businessType) {
      case 'banking':
        return {
          ...basePolicies,
          analytics: { ...basePolicies.analytics, description: 'Financial analytics and fraud detection' },
          location: { ...basePolicies.location, description: 'Branch locator and fraud prevention' },
          profiling: { ...basePolicies.profiling, description: 'Credit scoring and risk assessment' }
        };
      case 'healthcare':
        return {
          ...basePolicies,
          analytics: { ...basePolicies.analytics, description: 'Medical analytics for improved patient care' },
          communication: { ...basePolicies.communication, description: 'Appointment reminders and health notifications' },
          profiling: { ...basePolicies.profiling, description: 'Medical history and treatment personalization' }
        };
      case 'ecommerce':
        return {
          ...basePolicies,
          marketing: { ...basePolicies.marketing, description: 'Product recommendations and promotional offers' },
          personalization: { ...basePolicies.personalization, description: 'Shopping preferences and wishlists' },
          location: { ...basePolicies.location, description: 'Delivery tracking and local store finder' }
        };
      default:
        return basePolicies;
    }
  };

  const consentCategories = selectedBusiness ? getConsentPolicies(selectedBusiness) : {} as Record<string, any>;

  const toggleConsent = (key: keyof typeof consents) => {
    if (key === 'essential') return; // Essential cannot be toggled
    setConsents(prev => ({ ...prev, [key]: !prev[key] }));
    
    toast({
      title: "Consent Updated",
      description: `${(consentCategories as any)[key]?.title || 'Consent'} has been ${consents[key] ? 'withdrawn' : 'granted'}`,
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data Export Initiated",
      description: "Your data export will be ready within 24 hours. We'll notify you via email.",
    });
  };

  const handleContactPrivacy = () => {
    toast({
      title: "Privacy Team Contacted",
      description: "Your inquiry has been sent to our privacy team. Expect a response within 2 business days.",
    });
  };

  const handleDataDeletion = () => {
    toast({
      title: "Deletion Request Submitted",
      description: "Your data deletion request is being processed. This may take up to 30 days.",
    });
  };

  const consentHistory = [
    { date: '2024-01-15', action: 'Marketing consent withdrawn', status: 'updated', business: selectedBusiness || 'Unknown' },
    { date: '2024-01-10', action: 'Analytics consent granted', status: 'granted', business: selectedBusiness || 'Unknown' },
    { date: '2024-01-05', action: 'Initial consent provided', status: 'initial', business: selectedBusiness || 'Unknown' },
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
                ← Back to Home
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
              <Button variant="outline" size="sm" onClick={handleExportData}>
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
            {/* Business Type Selection */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Business Type Selection
                </CardTitle>
                <CardDescription>
                  Choose the type of business you're interacting with to see relevant consent options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedBusiness} onValueChange={setSelectedBusiness}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select business type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <span>{type.icon}</span>
                          <span>{type.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Consent Management */}
            {selectedBusiness && (
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Consent Management
                      </CardTitle>
                      <CardDescription>
                        Control how your personal data is used for {businessTypes.find(b => b.value === selectedBusiness)?.label}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Advanced Settings
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(consentCategories).map(([key, category]: [string, any]) => (
                    <div key={key} className="p-4 rounded-lg border bg-white/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium">{category?.title}</h3>
                            {category?.required && (
                              <Badge variant="secondary" className="text-xs">Required</Badge>
                            )}
                            {consents[key as keyof typeof consents] && !category?.required && (
                              <Badge variant="outline" className="text-xs bg-accent/10 text-accent">
                                <Check className="h-3 w-3 mr-1" />
                                Active
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{category?.description}</p>
                          <p className="text-xs text-muted-foreground">{category?.details}</p>
                        </div>
                        <Switch
                          checked={consents[key as keyof typeof consents]}
                          onCheckedChange={() => toggleConsent(key as keyof typeof consents)}
                          disabled={category?.required}
                          className="ml-4"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

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
                        <p className="text-xs text-muted-foreground">{item.date} • {item.business}</p>
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
                <Button variant="outline" className="w-full justify-start" onClick={handleExportData}>
                  <Download className="h-4 w-4 mr-2" />
                  Download My Data
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <Eye className="h-4 w-4 mr-2" />
                      View Data Usage
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Data Usage Report</DialogTitle>
                      <DialogDescription>
                        Here's how your data is being used across different services.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border">
                        <h4 className="font-medium mb-2">Analytics Data</h4>
                        <p className="text-sm text-muted-foreground">Used for improving user experience and service performance.</p>
                      </div>
                      <div className="p-4 rounded-lg border">
                        <h4 className="font-medium mb-2">Communication Data</h4>
                        <p className="text-sm text-muted-foreground">Used for sending important notifications and updates.</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="w-full justify-start" onClick={handleDataDeletion}>
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
                <Button variant="premium" className="w-full" onClick={handleContactPrivacy}>
                  <Mail className="h-4 w-4 mr-2" />
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