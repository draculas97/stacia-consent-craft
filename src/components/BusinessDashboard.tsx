import React, { useState } from 'react';
import { Building2, Code, FileText, BarChart3, Users, Download, Upload, GitBranch, Settings, Shield, Zap, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface BusinessDashboardProps {
  onBack: () => void;
}

const BusinessDashboard: React.FC<BusinessDashboardProps> = ({ onBack }) => {
  const { toast } = useToast();
  const [codeAnalysis, setCodeAnalysis] = useState({
    status: 'idle', // idle, analyzing, complete
    progress: 0,
    findings: []
  });

  const [embeddableCode, setEmbeddableCode] = useState({
    web: `<!-- Stacia Consent Widget -->
<div id="stacia-consent-widget"></div>
<script src="https://cdn.stacia.com/widget.js" data-app-id="your-app-id"></script>`,
    android: `// Add to your Activity
StaciaConsent.initialize(this, "your-app-id");
StaciaConsent.showConsentDialog();`,
    ios: `// Add to your ViewController
StaciaConsent.initialize(appId: "your-app-id")
StaciaConsent.showConsentDialog()`
  });

  const copyToClipboard = (code: string, platform: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied!",
      description: `${platform} integration code copied to clipboard`,
    });
  };

  const analyzeCode = () => {
    setCodeAnalysis({ status: 'analyzing', progress: 0, findings: [] });
    
    // Simulate AI analysis
    const interval = setInterval(() => {
      setCodeAnalysis(prev => {
        const newProgress = prev.progress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return {
            status: 'complete',
            progress: 100,
            findings: [
              { type: 'email', field: 'user_email', location: 'components/auth/LoginForm.tsx:45', severity: 'high' },
              { type: 'phone', field: 'phone_number', location: 'components/profile/UserProfile.tsx:23', severity: 'high' },
              { type: 'location', field: 'gps_coordinates', location: 'utils/location.js:12', severity: 'medium' },
              { type: 'analytics', field: 'user_behavior', location: 'services/analytics.ts:8', severity: 'medium' },
              { type: 'cookies', field: 'session_data', location: 'middleware/session.js:5', severity: 'low' },
            ]
          };
        }
        return { ...prev, progress: newProgress };
      });
    }, 200);
  };

  const complianceStats = {
    dpdpCompliance: 85,
    consentCoverage: 92,
    dataFields: 15,
    legalDocs: 5
  };

  const recentActivity = [
    { action: 'AI Analysis Completed', time: '2 hours ago', status: 'success' },
    { action: 'Privacy Policy Generated', time: '1 day ago', status: 'success' },
    { action: 'New Data Field Detected', time: '2 days ago', status: 'warning' },
    { action: 'Consent Widget Updated', time: '3 days ago', status: 'info' },
  ];

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
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Business Dashboard</h1>
                  <p className="text-sm text-muted-foreground">AI-Powered Consent Management for Data Fiduciaries</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-accent/10">
                DPDP Compliant
              </Badge>
              <Button variant="premium" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                AI Analyze
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="documents">Legal Docs</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">DPDP Compliance</p>
                      <p className="text-2xl font-bold text-primary">{complianceStats.dpdpCompliance}%</p>
                    </div>
                    <Shield className="h-8 w-8 text-primary/30" />
                  </div>
                  <Progress value={complianceStats.dpdpCompliance} className="mt-3" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Consent Coverage</p>
                      <p className="text-2xl font-bold text-accent">{complianceStats.consentCoverage}%</p>
                    </div>
                    <Users className="h-8 w-8 text-accent/30" />
                  </div>
                  <Progress value={complianceStats.consentCoverage} className="mt-3" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Data Fields</p>
                      <p className="text-2xl font-bold">{complianceStats.dataFields}</p>
                    </div>
                    <Code className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Identified & Tracked</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Legal Documents</p>
                      <p className="text-2xl font-bold">{complianceStats.legalDocs}</p>
                    </div>
                    <FileText className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Auto-Generated</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                      <div className={`p-1.5 rounded-full ${
                        activity.status === 'success' ? 'bg-accent/10' :
                        activity.status === 'warning' ? 'bg-warning/10' : 'bg-primary/10'
                      }`}>
                        <CheckCircle className={`h-3 w-3 ${
                          activity.status === 'success' ? 'text-accent' :
                          activity.status === 'warning' ? 'text-warning' : 'text-primary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Code className="h-4 w-4 mr-2" />
                    Run AI Code Analysis
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Legal Documents
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Compliance Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    View Consent Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  AI-Powered Code Analysis
                </CardTitle>
                <CardDescription>
                  Upload your codebase or connect Git repository for automated DPDP Act compliance analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label>Upload Code Files</Label>
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">Drag & drop files or click to browse</p>
                      <Button variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Connect Git Repository</Label>
                    <div className="space-y-3">
                      <Input placeholder="https://github.com/yourorg/yourapp.git" />
                      <Button variant="outline" className="w-full">
                        <GitBranch className="h-4 w-4 mr-2" />
                        Connect Repository
                      </Button>
                    </div>
                  </div>
                </div>

                {codeAnalysis.status === 'idle' && (
                  <Button onClick={analyzeCode} className="w-full" variant="premium">
                    <Zap className="h-4 w-4 mr-2" />
                    Start AI Analysis
                  </Button>
                )}

                {codeAnalysis.status === 'analyzing' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                      <span className="text-sm">Analyzing code for data fields...</span>
                    </div>
                    <Progress value={codeAnalysis.progress} />
                  </div>
                )}

                {codeAnalysis.status === 'complete' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Analysis Complete</span>
                    </div>
                    
                    <div className="space-y-3">
                      {codeAnalysis.findings.map((finding, index) => (
                        <div key={index} className="p-4 rounded-lg border bg-white/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Badge variant={finding.severity === 'high' ? 'destructive' : 
                                            finding.severity === 'medium' ? 'default' : 'secondary'}>
                                {finding.severity.toUpperCase()}
                              </Badge>
                              <span className="font-medium capitalize">{finding.type} Data</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{finding.field}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{finding.location}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integration Tab */}
          <TabsContent value="integration" className="space-y-6">
            <div className="grid gap-6">
              {Object.entries(embeddableCode).map(([platform, code]) => (
                <Card key={platform} className="bg-gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="capitalize">{platform} Integration</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => copyToClipboard(code, platform)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Code
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Embed the Stacia consent widget in your {platform} application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Legal Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Auto-Generated Legal Documents
                </CardTitle>
                <CardDescription>
                  AI-generated legal documents based on your app's data usage patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Cookie Policy',
                  'Data Retention Policy',
                  'Transparency Report'
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-white/50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{doc}</h3>
                        <p className="text-sm text-muted-foreground">Last updated: Today</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>Consent Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Consents</span>
                      <span className="font-bold">1,245</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accepted Rate</span>
                      <span className="font-bold text-accent">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Users</span>
                      <span className="font-bold">892</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>Compliance Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>DPDP Compliance</span>
                      <Badge className="bg-accent text-accent-foreground">95%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Retention</span>
                      <Badge className="bg-primary text-primary-foreground">Compliant</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Audit Status</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessDashboard;