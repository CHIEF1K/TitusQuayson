'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Download, Mail, Cloud, Server, Shield, GitBranch, Activity, Globe } from 'lucide-react'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 'ecobank-gitops',
      title: 'GitOps Deployment — Ecobank Mobile Platform',
      tags: ['cloud-platforms', 'kubernetes', 'ci-cd', 'fintech'],
      featured: true
    },
    {
      id: 'aws-platform',
      title: 'Production AWS Platform — Scalable Cloud Infrastructure',
      tags: ['cloud-platforms', 'kubernetes'],
      featured: true
    },
    {
      id: 'database-migration',
      title: 'Terraform-Based Database Migration — On-Prem to AWS RDS',
      tags: ['cloud-platforms'],
      featured: true
    },
    {
      id: 'ussd-platform',
      title: 'USSD Payment Platform — High Availability Cloud System',
      tags: ['cloud-platforms', 'kubernetes', 'fintech'],
      featured: false
    },
    {
      id: 'secure-cicd',
      title: 'Secure CI/CD Platform — Kubernetes Applications',
      tags: ['kubernetes', 'ci-cd'],
      featured: false
    },
    {
      id: 'ec2-platform',
      title: 'EC2-Based Application Platform',
      tags: ['cloud-platforms', 'ci-cd'],
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'cloud-platforms', label: 'Cloud Platforms' },
    { id: 'kubernetes', label: 'Kubernetes' },
    { id: 'ci-cd', label: 'CI/CD & Automation' },
    { id: 'fintech', label: 'Fintech / Payments' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <main className="min-h-screen bg-near-black text-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40">
              <img 
                src="/TitusQuayson/profile.jpg" 
                alt="Titus Quayson"
                className="w-full h-full object-cover rounded-full border-3 sm:border-4 border-cloud-blue shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-cloud-blue to-reliability-green items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                TQ
              </div>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight px-2">
            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 block">Titus Quayson</span>
            <span className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl block mb-2">Cloud & Site Reliability Engineer</span>
            <span className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-normal mt-2 block">
              building and operating production platforms at scale
            </span>
          </h1>
          
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 font-medium px-2 sm:px-4">
            AWS • Cloud Architecture • Kubernetes • SRE Practices • CI/CD • GitOps • Fintech & Payment Systems
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Designing resilient cloud platforms and ensuring production reliability with 99.9%+ uptime 
            across distributed, multi-country payment systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 sm:pt-6 lg:pt-8 px-2 sm:px-4 max-w-3xl mx-auto">
            <Link href="/solutions" className="bg-reliability-green hover:bg-green-600 active:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation">
              Source Code & Solutions
              <ExternalLink size={16} className="sm:hidden" />
              <ExternalLink size={20} className="hidden sm:block" />
            </Link>
            <a href="/resume.pdf" className="border-2 border-gray-600 hover:border-gray-400 active:border-gray-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation">
              Download Resume
              <Download size={16} className="sm:hidden" />
              <Download size={20} className="hidden sm:block" />
            </a>
            <a href="mailto:quaysontitus@gmail.com" className="text-gray-400 hover:text-white active:text-gray-200 transition-colors flex items-center justify-center gap-2 py-2 text-sm sm:text-base touch-manipulation">
              Contact Me
              <Mail size={16} className="sm:hidden" />
              <Mail size={20} className="hidden sm:block" />
            </a>
          </div>
        </div>
      </section>

      {/* Production Metrics */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cloud-blue mb-1 sm:mb-2">33+</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base">Countries Supported</div>
          </div>
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-reliability-green mb-1 sm:mb-2">99.9%+</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base">System Reliability</div>
          </div>
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cloud-blue mb-1 sm:mb-2">AWS</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base">Cloud Platforms</div>
          </div>
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-reliability-green mb-1 sm:mb-2">SRE</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base">Production Operations</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">About</h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            <p>
              Cloud & Site Reliability Engineer with 4+ years of experience designing scalable cloud platforms 
              and ensuring production system reliability for fintech and payment systems.
            </p>
            <p>
              I combine cloud architecture expertise with SRE practices to build resilient AWS infrastructure, 
              implement comprehensive monitoring, and maintain 99.9%+ uptime across distributed environments. 
              Experienced in Kubernetes platforms, Infrastructure as Code, and incident response.
            </p>
            <p>
              I document cloud reliability patterns and SRE practices through technical articles, 
              sharing real-world insights from operating large-scale payment platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Cloud & SRE Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="text-cloud-blue flex-shrink-0" size={24} />
              <h3 className="text-lg sm:text-xl font-semibold">Cloud Architecture</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400">AWS (EKS, EC2, ECS, RDS, ECR, VPC, IAM, S3) • Multi-Region Design</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-reliability-green flex-shrink-0" size={24} />
              <h3 className="text-lg sm:text-xl font-semibold">Site Reliability Engineering</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400">SLOs/SLIs • Incident Response • Error Budgets • Monitoring</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Server className="text-cloud-blue flex-shrink-0" size={24} />
              <h3 className="text-lg sm:text-xl font-semibold">Container Platforms</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Kubernetes • Docker • Helm • EKS</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-reliability-green flex-shrink-0" size={24} />
              <h3 className="text-lg sm:text-xl font-semibold">Observability & Monitoring</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Grafana • Dynatrace • CloudWatch • Alerting • Performance</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="text-cloud-blue flex-shrink-0" size={24} />
              <h3 className="text-lg sm:text-xl font-semibold">Automation & Delivery</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Terraform • GitOps • CI/CD • ArgoCD • Infrastructure as Code</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-reliability-green flex-shrink-0" size={24} />
              <h3 className="text-lg sm:text-xl font-semibold">Production Operations</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400">Capacity Planning • Disaster Recovery • Change Management</p>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl mx-auto bg-gray-900/30">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Technical Skills Matrix</h2>
        <p className="text-center text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Production experience with these technologies in high-scale, mission-critical environments
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Cloud Platforms */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-cloud-blue mb-4">Cloud Platforms & Services</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">AWS (EKS, EC2, RDS, Lambda, S3)</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Terraform / Infrastructure as Code</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Kubernetes / EKS</span>
                  <span className="text-xs sm:text-sm text-reliability-green">3+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-cloud-blue h-2 rounded-full transition-all" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Docker / Containerization</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-cloud-blue h-2 rounded-full transition-all" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* CI/CD & GitOps */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-cloud-blue mb-4">CI/CD & Automation</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">GitLab CI / GitHub Actions</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">ArgoCD / GitOps</span>
                  <span className="text-xs sm:text-sm text-reliability-green">3+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-cloud-blue h-2 rounded-full transition-all" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Helm / Kubernetes Packaging</span>
                  <span className="text-xs sm:text-sm text-reliability-green">3+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '80%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Bash Scripting</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-cloud-blue h-2 rounded-full transition-all" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Observability */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-cloud-blue mb-4">Monitoring & Observability</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Grafana / Prometheus</span>
                  <span className="text-xs sm:text-sm text-reliability-green">3+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Dynatrace / APM</span>
                  <span className="text-xs sm:text-sm text-reliability-green">2+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-cloud-blue h-2 rounded-full transition-all" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">AWS CloudWatch</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Databases & Storage */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-cloud-blue mb-4">Databases & Storage</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">AWS RDS (MySQL, PostgreSQL)</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">Redis / Caching</span>
                  <span className="text-xs sm:text-sm text-reliability-green">3+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-cloud-blue h-2 rounded-full transition-all" style={{width: '80%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">S3 / Object Storage</span>
                  <span className="text-xs sm:text-sm text-reliability-green">4+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-reliability-green h-2 rounded-full transition-all" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-xs sm:text-sm text-gray-300">DynamoDB / NoSQL</span>
                  <span className="text-xs sm:text-sm text-reliability-green">2+ years</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-cloud-blue h-2 rounded-full transition-all" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & SRE Systems */}
      <section id="projects" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">Cloud & SRE Systems</h2>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition-all text-xs sm:text-sm touch-manipulation active:scale-95 ${
                activeFilter === filter.id
                  ? 'bg-cloud-blue text-white shadow-lg'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Filter Results Info */}
        {activeFilter !== 'all' && (
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} with <span className="text-cloud-blue font-semibold">{filters.find(f => f.id === activeFilter)?.label}</span>
            </p>
          </div>
        )}

        {/* Featured Projects (Top 3) */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-cloud-blue">Featured Projects</h3>
          <div className="grid lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Project 1: Deployment Reliability — Ecobank Mobile App */}
            <div className="case-study-card p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-cloud-blue hover:shadow-xl transition-all">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-cloud-blue">Deployment Reliability — Ecobank Mobile App</h4>
                  <p className="text-sm sm:text-base lg:text-lg text-reliability-green mb-4 sm:mb-6 font-medium">
                    Eliminated deployment failures and reduced release risk for fintech platform serving 33+ countries
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div>
                      <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Context</h5>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Critical mobile banking application serving millions of users across Africa, requiring zero-downtime 
                        deployments and consistent environments from UAT through production.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Challenge</h5>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        Manual Kubernetes deployments caused frequent rollback incidents, environment drift, 
                        and 4-hour release windows that blocked critical payment system updates.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Engineering Decisions</h5>
                      <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-relaxed">
                        <li>• Chose GitOps pattern for declarative, auditable deployments</li>
                        <li>• Implemented ArgoCD for automated reconciliation and rollback capability</li>
                        <li>• Used Helm for templated, environment-specific configurations</li>
                        <li>• Applied Terraform for consistent EKS cluster provisioning</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Outcome</h5>
                      <ul className="text-gray-300 text-xs sm:text-sm space-y-1 leading-relaxed">
                        <li>• 85% reduction in deployment failures</li>
                        <li>• 15-minute automated releases (from 4 hours)</li>
                        <li>• Zero-downtime deployments with automatic rollback</li>
                        <li>• Improved developer confidence and system reliability</li>
                      </ul>
                    </div>
                    
                    <div className="pt-3 sm:pt-4 border-t border-gray-700">
                      <div className="text-xs sm:text-sm text-gray-400 mb-2">Tooling Used:</div>
                      <div className="text-xs sm:text-sm text-cloud-blue flex-wrap">AWS EKS • ArgoCD • Helm • GitLab CI • Terraform</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center mt-4 lg:mt-0">
                  <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-700">
                    <h6 className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4">Cloud Architecture Overview</h6>
                    <div className="bg-gray-800 h-48 sm:h-56 md:h-64 lg:h-48 rounded flex items-center justify-center overflow-hidden">
                      <img 
                        src="/TitusQuayson/ecobank-gitops-architecture.png" 
                        alt="AWS GitOps Architecture for Fintech Mobile Application"
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full flex-col items-center justify-center text-gray-500 text-center text-xs sm:text-sm px-2">
                        [GitOps Deployment Architecture]<br/>
                        Git → CI Pipeline → ArgoCD → EKS<br/>
                        Automated Rollback & Monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: AWS EKS Platform — Production Cloud Infrastructure */}
            <div className="case-study-card p-8 rounded-xl border-2 border-cloud-blue">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-cloud-blue">AWS EKS Platform — Production Cloud Infrastructure</h4>
                  <p className="text-lg text-reliability-green mb-6 font-medium">
                    Built scalable Kubernetes platform reducing infrastructure provisioning from weeks to hours
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Context</h5>
                      <p className="text-gray-300 text-sm">
                        Growing fintech platform requiring consistent, secure Kubernetes environments across 
                        multiple regions for payment processing applications.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Challenge</h5>
                      <p className="text-gray-300 text-sm">
                        Manual AWS infrastructure setup created inconsistent environments, security gaps, and 
                        3-week lead times for new application deployments.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Engineering Decisions</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Selected EKS for managed Kubernetes with AWS integration</li>
                        <li>• Designed modular Terraform for reusable infrastructure patterns</li>
                        <li>• Implemented auto-scaling policies for cost and performance optimization</li>
                        <li>• Integrated CloudWatch and Grafana for comprehensive monitoring</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Outcome</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• 95% faster infrastructure provisioning (3 weeks → 4 hours)</li>
                        <li>• Consistent, reproducible environments across regions</li>
                        <li>• Enhanced security posture with automated compliance</li>
                        <li>• Reduced operational overhead by 60%</li>
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-400 mb-2">Tooling Used:</div>
                      <div className="text-sm text-cloud-blue">AWS EKS • Terraform • VPC • IAM • CloudWatch • Auto Scaling</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                    <h6 className="text-sm font-semibold text-gray-400 mb-4">Cloud Architecture Overview</h6>
                    <div className="bg-gray-800 h-48 rounded flex items-center justify-center">
                      <img 
                        src="/TitusQuayson/aws-eks-platform-architecture.png" 
                        alt="AWS EKS Platform Production Cloud Infrastructure"
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full flex-col items-center justify-center text-gray-500 text-center text-sm">
                        [EKS Platform Architecture]<br/>
                        Multi-AZ VPC → EKS Cluster<br/>
                        Auto-Scaling & Monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Terraform-Based Database Migration */}
            <div className="case-study-card p-8 rounded-xl border-2 border-cloud-blue">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-cloud-blue">Terraform-Based Database Migration — On-Prem to AWS RDS</h4>
                  <p className="text-lg text-reliability-green mb-6 font-medium">
                    Zero-downtime migration achieving 99.99% uptime and 50% performance improvement
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Context</h5>
                      <p className="text-gray-300 text-sm">
                        Critical payment database running on legacy on-premises infrastructure with limited scalability, 
                        manual backup processes, and increasing maintenance overhead.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Challenge</h5>
                      <p className="text-gray-300 text-sm">
                        Legacy database infrastructure limiting scalability and reliability. Manual backup processes 
                        creating risk. No disaster recovery plan. Performance degradation during peak loads.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Engineering Decisions</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Selected AWS RDS Multi-AZ for high availability and automated failover</li>
                        <li>• Used Terraform for reproducible infrastructure provisioning</li>
                        <li>• Implemented AWS Database Migration Service for zero-downtime cutover</li>
                        <li>• Configured automated backups with point-in-time recovery</li>
                        <li>• Set up CloudWatch monitoring and automated alerting</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-2">Outcome</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Zero downtime during migration cutover</li>
                        <li>• 99.99% uptime achieved with Multi-AZ deployment</li>
                        <li>• 50% improvement in query performance</li>
                        <li>• Automated backups with 35-day retention</li>
                        <li>• Reduced operational overhead by 60%</li>
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-400 mb-2">Tooling Used:</div>
                      <div className="text-sm text-cloud-blue">Terraform • AWS RDS • DMS • CloudWatch • MySQL</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                    <h6 className="text-sm font-semibold text-gray-400 mb-4">Architecture Overview</h6>
                    <div className="bg-gray-800 h-48 rounded flex items-center justify-center">
                      <img 
                        src="/TitusQuayson/Create_a_cloud_202601271327.jpeg" 
                        alt="Database Migration Architecture - On-Prem to AWS RDS"
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full flex-col items-center justify-center text-gray-500 text-center text-sm">
                        [Database Migration Architecture]<br/>
                        On-Prem MySQL → DMS → RDS Multi-AZ<br/>
                        Zero-Downtime Migration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">Additional Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 4: USSD Payment Platform */}
            <div className="case-study-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3 text-cloud-blue">USSD Payment Platform — High Availability</h4>
              <p className="text-sm text-reliability-green mb-4 font-medium">
                99.9%+ uptime for payment systems processing millions of transactions
              </p>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h5 className="font-semibold text-white mb-1">Challenge</h5>
                  <p className="text-gray-300">Legacy infrastructure with frequent outages and manual scaling bottlenecks</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1">Solution</h5>
                  <p className="text-gray-300">Terraform-provisioned AWS infrastructure with Kubernetes and GitOps automation</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1">Impact</h5>
                  <p className="text-gray-300">99.9%+ uptime, 10x transaction capacity, 70% faster incident response</p>
                </div>
                
                <div className="pt-3 border-t border-gray-700">
                  <div className="text-xs text-cloud-blue">Terraform • AWS • Kubernetes • ArgoCD • Grafana</div>
                </div>
              </div>
            </div>

            {/* Project 5: Secure CI/CD Pipeline */}
            <div className="case-study-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3 text-cloud-blue">Secure CI/CD Pipeline — Kubernetes Application</h4>
              <p className="text-sm text-reliability-green mb-4 font-medium">
                Implemented security-first deployment pipeline with vulnerability scanning
              </p>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h5 className="font-semibold text-white mb-1">Challenge</h5>
                  <p className="text-gray-300">Manual deployments with security vulnerabilities and inconsistent releases</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1">Solution</h5>
                  <p className="text-gray-300">GitLab CI with Trivy scanning, Helm packaging, ArgoCD delivery</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1">Impact</h5>
                  <p className="text-gray-300">Zero security incidents, 80% faster deployments</p>
                </div>
                
                <div className="pt-3 border-t border-gray-700">
                  <div className="text-xs text-cloud-blue">GitLab CI • Trivy • Helm • ArgoCD • EKS</div>
                </div>
              </div>
            </div>

            {/* Project 6: EC2 + CI/CD */}
            <div className="case-study-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3 text-cloud-blue">Terraform-Provisioned EC2 + CI/CD Deployment</h4>
              <p className="text-sm text-reliability-green mb-4 font-medium">
                Automated infrastructure provisioning and application deployment
              </p>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h5 className="font-semibold text-white mb-1">Challenge</h5>
                  <p className="text-gray-300">Manual server provisioning and deployment processes</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1">Solution</h5>
                  <p className="text-gray-300">Terraform-managed EC2 instances with automated CI/CD integration</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1">Impact</h5>
                  <p className="text-gray-300">Consistent environments, reduced provisioning time by 90%</p>
                </div>
                
                <div className="pt-3 border-t border-gray-700">
                  <div className="text-xs text-cloud-blue">Terraform • AWS EC2 • GitLab CI • Auto Scaling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & SRE Engineering Insights */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cloud & SRE Engineering Insights</h2>
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg text-gray-300 text-center">
            Real-world insights from building cloud platforms and ensuring production reliability, 
            covering cloud architecture, SRE practices, and operational excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="case-study-card p-6 rounded-xl">
            <div className="text-xs text-cloud-blue mb-2 font-semibold">CLOUD ARCHITECTURE</div>
            <h3 className="text-lg font-semibold mb-2 text-white">Upgrading AWS EKS with Terraform</h3>
            <p className="text-gray-400 text-sm mb-3">Platform reliability during major Kubernetes version changes</p>
          </div>
          
          <div className="case-study-card p-6 rounded-xl">
            <div className="text-xs text-reliability-green mb-2 font-semibold">SRE PRACTICES</div>
            <h3 className="text-lg font-semibold mb-2 text-white">GitLab CI/CD to AWS EC2</h3>
            <p className="text-gray-400 text-sm mb-3">Building reliable deployment pipelines with SRE principles</p>
          </div>
          
          <div className="case-study-card p-6 rounded-xl">
            <div className="text-xs text-cloud-blue mb-2 font-semibold">CLOUD RELIABILITY</div>
            <h3 className="text-lg font-semibold mb-2 text-white">AWS ECS deployments with Terraform</h3>
            <p className="text-gray-400 text-sm mb-3">Container orchestration patterns for financial services</p>
          </div>
          
          <div className="case-study-card p-6 rounded-xl">
            <div className="text-xs text-reliability-green mb-2 font-semibold">SRE OPERATIONS</div>
            <h3 className="text-lg font-semibold mb-2 text-white">MySQL migration to AWS RDS</h3>
            <p className="text-gray-400 text-sm mb-3">Zero-downtime database migrations with SRE methodology</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="https://medium.com/@quaysontitus" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 text-cloud-blue hover:text-blue-400 transition-colors text-lg font-medium">
            Read cloud & SRE insights on Medium
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 case-study-card rounded-xl">
            <div className="text-cloud-blue font-semibold">AWS Certified</div>
            <div className="text-gray-400 text-sm">Cloud Practitioner</div>
          </div>
          <div className="text-center p-6 case-study-card rounded-xl">
            <div className="text-reliability-green font-semibold">GitLab</div>
            <div className="text-gray-400 text-sm">CI/CD</div>
          </div>
          <div className="text-center p-6 case-study-card rounded-xl">
            <div className="text-cloud-blue font-semibold">GitOps</div>
            <div className="text-gray-400 text-sm">with ArgoCD</div>
          </div>
          <div className="text-center p-6 case-study-card rounded-xl">
            <div className="text-reliability-green font-semibold">Terraform</div>
            <div className="text-gray-400 text-sm">Infrastructure as Code</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Looking for a Cloud / SRE engineer who can own production systems?</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="mailto:quaysontitus@gmail.com" 
             className="flex items-center gap-2 bg-cloud-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            <Mail size={20} />
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/titus-quayson" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            <ExternalLink size={20} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-400">
        <p>&copy; 2024 Titus Quayson. Cloud & Site Reliability Engineer.</p>
      </footer>
    </main>
  )
}