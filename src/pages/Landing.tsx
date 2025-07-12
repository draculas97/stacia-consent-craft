import React from 'react';
import { Shield, Users, Building2, ArrowRight, Lock, Globe, Zap, CheckCircle, BarChart3, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LandingProps {
  onRoleSelect: (role: 'client' | 'business' | 'admin') => void;
}

const Landing: React.FC<LandingProps> = ({ onRoleSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">ConsentAI</h1>
                <p className="text-xs text-muted-foreground">by Stacia Technologies</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-accent/10">
                DPDP Act Compliant
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Global Coverage
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-gradient-primary text-white px-4 py-2">
              AI-Powered Consent Management
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligent Consent
              <br />
              Management Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The world's first AI-powered consent management platform that automatically analyzes your code, 
              generates compliant policies, and ensures global regulatory compliance with DPDP Act, GDPR, and more.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span className="text-sm">AI Code Analysis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span className="text-sm">Auto-Generated Policies</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span className="text-sm">AES-256 Encryption</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 rounded-full px-4 py-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span className="text-sm">Global Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Access Portal</h2>
            <p className="text-muted-foreground">
              Access the platform based on your role and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Principal Portal */}
            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer"
                  onClick={() => onRoleSelect('client')}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-300">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-xl">Data Principal</CardTitle>
                <CardDescription>
                  Manage your privacy preferences and consent settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Granular consent management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Data export & deletion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Privacy transparency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Real-time consent tracking</span>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Access Portal
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Business Portal */}
            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                  onClick={() => onRoleSelect('business')}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                  <Building2 className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Data Fiduciary</CardTitle>
                <CardDescription>
                  AI-powered compliance tools for businesses
                </CardDescription>
                <Badge className="bg-gradient-primary text-white">Most Popular</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">AI code analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">Auto-generated policies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multi-platform integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">Compliance analytics</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Admin Portal */}
            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer"
                  onClick={() => onRoleSelect('admin')}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-2xl bg-gradient-to-br from-success/10 to-success/20 group-hover:from-success/20 group-hover:to-success/30 transition-all duration-300">
                  <Shield className="h-12 w-12 text-success" />
                </div>
                <CardTitle className="text-xl">Platform Admin</CardTitle>
                <CardDescription>
                  Stacia platform administration and oversight
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-success" />
                    <span className="text-sm">Global consent management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-success" />
                    <span className="text-sm">Business CRM & billing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-success" />
                    <span className="text-sm">Audit trail management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-success" />
                    <span className="text-sm">Compliance monitoring</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-success group-hover:text-success-foreground transition-colors">
                  Admin Access
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ConsentAI?</h2>
            <p className="text-muted-foreground">
              The most advanced consent management platform with AI-powered compliance automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto p-3 rounded-full bg-gradient-primary w-fit">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
              <p className="text-muted-foreground">
                Automatically scans your codebase to identify data fields requiring consent
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto p-3 rounded-full bg-gradient-success w-fit">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Global Compliance</h3>
              <p className="text-muted-foreground">
                Supports DPDP Act, GDPR, CCPA, and other major privacy regulations worldwide
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto p-3 rounded-full bg-gradient-primary w-fit">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Military-Grade Security</h3>
              <p className="text-muted-foreground">
                AES-256 encryption with TLS 1.2+ ensures maximum data protection
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto p-3 rounded-full bg-gradient-success w-fit">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive dashboards with actionable insights and compliance metrics
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto p-3 rounded-full bg-gradient-primary w-fit">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Auto-Generated Policies</h3>
              <p className="text-muted-foreground">
                AI creates privacy policies, terms of service, and legal documents automatically
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto p-3 rounded-full bg-gradient-success w-fit">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Easy Integration</h3>
              <p className="text-muted-foreground">
                Simple embedding across web, mobile, and all major platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-bold">Trusted by Leading Organizations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['TechCorp', 'DataFlow', 'SecureBank', 'HealthPlus'].map((company, index) => (
              <div key={index} className="text-lg font-semibold">
                {company}
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Badge variant="outline" className="bg-accent/10 px-4 py-2">
              <Lock className="h-4 w-4 mr-2" />
              ISO 27001 Certified
            </Badge>
            <Badge variant="outline" className="bg-primary/10 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              SOC 2 Type II
            </Badge>
            <Badge variant="outline" className="bg-success/10 px-4 py-2">
              <CheckCircle className="h-4 w-4 mr-2" />
              GDPR Compliant
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">ConsentAI</h3>
                <p className="text-sm text-muted-foreground">by Stacia Technologies</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Stacia Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;