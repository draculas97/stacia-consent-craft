import React, { useState } from 'react';
import { Shield, Lock, Database, Users, BarChart3, FileText, Settings, AlertTriangle, CheckCircle, Clock, Download, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const [consentFilter, setConsentFilter] = useState('all');
  
  const platformStats = {
    totalConsents: 45672,
    activeUsers: 12453,
    businesses: 234,
    encryptionLevel: 'AES-256',
    uptime: 99.98
  };

  const recentConsents = [
    {
      id: 'CNS-001',
      user: 'john.doe@example.com',
      business: 'TechCorp Ltd',
      type: 'Marketing Consent',
      status: 'granted',
      timestamp: '2024-01-15 14:30:22',
      encrypted: true
    },
    {
      id: 'CNS-002',
      user: 'jane.smith@example.com',
      business: 'DataFlow Inc',
      type: 'Analytics Consent',
      status: 'withdrawn',
      timestamp: '2024-01-15 14:25:15',
      encrypted: true
    },
    {
      id: 'CNS-003',
      user: 'mike.wilson@example.com',
      business: 'AppMakers Co',
      type: 'Essential Cookies',
      status: 'granted',
      timestamp: '2024-01-15 14:20:08',
      encrypted: true
    },
    {
      id: 'CNS-004',
      user: 'sarah.johnson@example.com',
      business: 'TechCorp Ltd',
      type: 'Location Services',
      status: 'pending',
      timestamp: '2024-01-15 14:15:45',
      encrypted: true
    }
  ];

  const auditLogs = [
    {
      id: 'AUD-001',
      action: 'Consent Record Access',
      user: 'system@stacia.com',
      details: 'Automated compliance check',
      timestamp: '2024-01-15 14:30:00',
      status: 'success'
    },
    {
      id: 'AUD-002',
      action: 'Data Deletion Request',
      user: 'jane.smith@example.com',
      details: 'User requested complete data deletion',
      timestamp: '2024-01-15 14:25:00',
      status: 'processed'
    },
    {
      id: 'AUD-003',
      action: 'Business Onboarding',
      user: 'admin@newcorp.com',
      details: 'New business account created',
      timestamp: '2024-01-15 14:20:00',
      status: 'success'
    }
  ];

  const complianceMetrics = {
    dpdpCompliance: 98,
    gdprCompliance: 95,
    dataRetention: 92,
    auditReadiness: 89
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'granted': return 'bg-accent text-accent-foreground';
      case 'withdrawn': return 'bg-destructive text-destructive-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

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
                <div className="p-2 rounded-lg bg-gradient-success">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Stacia Admin Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Global Consent Management & Platform Administration</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-accent/10">
                <Lock className="h-3 w-3 mr-1" />
                AES-256 Encrypted
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Uptime: {platformStats.uptime}%
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="consents">Consents</TabsTrigger>
            <TabsTrigger value="businesses">Businesses</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-5 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Consents</p>
                      <p className="text-2xl font-bold text-primary">{platformStats.totalConsents.toLocaleString()}</p>
                    </div>
                    <Database className="h-8 w-8 text-primary/30" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">+2.3% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold text-accent">{platformStats.activeUsers.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-accent/30" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">+5.7% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Businesses</p>
                      <p className="text-2xl font-bold">{platformStats.businesses}</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">+12 new this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Encryption</p>
                      <p className="text-2xl font-bold text-accent">{platformStats.encryptionLevel}</p>
                    </div>
                    <Lock className="h-8 w-8 text-accent/30" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Military grade</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Platform Uptime</p>
                      <p className="text-2xl font-bold text-accent">{platformStats.uptime}%</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-accent/30" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Last 30 days</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Compliance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(complianceMetrics).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-medium">{value}%</span>
                      </div>
                      <Progress value={value} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Recent Audit Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {auditLogs.slice(0, 4).map((log) => (
                    <div key={log.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                      <div className={`p-1.5 rounded-full ${
                        log.status === 'success' ? 'bg-accent/10' :
                        log.status === 'processed' ? 'bg-primary/10' : 'bg-warning/10'
                      }`}>
                        {log.status === 'success' ? (
                          <CheckCircle className="h-3 w-3 text-accent" />
                        ) : log.status === 'processed' ? (
                          <Clock className="h-3 w-3 text-primary" />
                        ) : (
                          <AlertTriangle className="h-3 w-3 text-warning" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{log.action}</p>
                        <p className="text-xs text-muted-foreground">{log.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Consents Tab */}
          <TabsContent value="consents" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Consent Management
                    </CardTitle>
                    <CardDescription>
                      Encrypted consent records with TLS 1.2+ and AES-256 protection
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <Select value={consentFilter} onValueChange={setConsentFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="granted">Granted</SelectItem>
                        <SelectItem value="withdrawn">Withdrawn</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentConsents.map((consent) => (
                    <div key={consent.id} className="p-4 rounded-lg border bg-white/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">{consent.id}</span>
                              <Badge className={getStatusColor(consent.status)}>
                                {consent.status}
                              </Badge>
                              {consent.encrypted && (
                                <Badge variant="outline" className="bg-accent/10">
                                  <Lock className="h-3 w-3 mr-1" />
                                  Encrypted
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{consent.user} • {consent.business}</p>
                            <p className="text-xs text-muted-foreground">{consent.type} • {consent.timestamp}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Businesses Tab */}
          <TabsContent value="businesses" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Business Onboarding & CRM
                </CardTitle>
                <CardDescription>
                  Manage data fiduciaries and their compliance status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label>Quick Onboarding Form</Label>
                    <div className="space-y-3">
                      <Input placeholder="Business Name" />
                      <Input placeholder="Contact Email" />
                      <Input placeholder="Industry Sector" />
                      <Button className="w-full">
                        Create Business Account
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Recent Business Activities</Label>
                    <div className="space-y-2">
                      {[
                        'TechCorp Ltd - Compliance audit completed',
                        'DataFlow Inc - New integration deployed',
                        'AppMakers Co - Privacy policy updated',
                        'NewCorp Ltd - Account created'
                      ].map((activity, index) => (
                        <div key={index} className="p-3 rounded-lg bg-white/50 text-sm">
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  DPDP Act & Global Compliance
                </CardTitle>
                <CardDescription>
                  Monitor compliance across all connected businesses and data processing activities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Regulatory Compliance</h3>
                    {Object.entries(complianceMetrics).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <span className="capitalize text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <Badge className={value >= 95 ? 'bg-accent text-accent-foreground' : 
                                        value >= 85 ? 'bg-warning text-warning-foreground' : 
                                        'bg-destructive text-destructive-foreground'}>
                          {value}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Security Measures</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <span className="text-sm">Data Encryption</span>
                        <Badge className="bg-accent text-accent-foreground">AES-256</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <span className="text-sm">Transport Security</span>
                        <Badge className="bg-accent text-accent-foreground">TLS 1.2+</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <span className="text-sm">Audit Logging</span>
                        <Badge className="bg-accent text-accent-foreground">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/50">
                        <span className="text-sm">Access Control</span>
                        <Badge className="bg-accent text-accent-foreground">RBAC</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audit Logs Tab */}
          <TabsContent value="audit" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Immutable Audit Trail
                </CardTitle>
                <CardDescription>
                  Comprehensive logging of all platform activities and data access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {auditLogs.map((log) => (
                    <div key={log.id} className="p-4 rounded-lg border bg-white/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-full ${
                            log.status === 'success' ? 'bg-accent/10' :
                            log.status === 'processed' ? 'bg-primary/10' : 'bg-warning/10'
                          }`}>
                            {log.status === 'success' ? (
                              <CheckCircle className="h-4 w-4 text-accent" />
                            ) : log.status === 'processed' ? (
                              <Clock className="h-4 w-4 text-primary" />
                            ) : (
                              <AlertTriangle className="h-4 w-4 text-warning" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm">{log.action}</span>
                              <Badge variant="outline" className="text-xs">{log.id}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{log.details}</p>
                            <p className="text-xs text-muted-foreground">{log.user} • {log.timestamp}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Platform Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Default Encryption Level</Label>
                    <Select defaultValue="aes256">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aes256">AES-256</SelectItem>
                        <SelectItem value="aes192">AES-192</SelectItem>
                        <SelectItem value="aes128">AES-128</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Data Retention Period (Days)</Label>
                    <Input defaultValue="2555" type="number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Audit Log Retention (Days)</Label>
                    <Input defaultValue="3650" type="number" />
                  </div>
                  
                  <Button className="w-full">Save Configuration</Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>TLS Version</Label>
                    <Select defaultValue="tls12">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tls13">TLS 1.3</SelectItem>
                        <SelectItem value="tls12">TLS 1.2+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Session Timeout (Minutes)</Label>
                    <Input defaultValue="30" type="number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Failed Login Attempts</Label>
                    <Input defaultValue="5" type="number" />
                  </div>
                  
                  <Button variant="destructive" className="w-full">Update Security</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;