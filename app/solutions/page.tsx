'use client'

import { useState } from 'react'
import { ExternalLink, GitBranch, ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Solutions() {
  const [activeSolutionFilter, setActiveSolutionFilter] = useState('all')

  const solutions = [
    {
      id: 'zero-downtime-api-deployments',
      title: 'Zero-Downtime API Deployments (Non-Kubernetes)',
      tags: ['backend', 'ci-cd', 'reliability'],
      context: 'Payment API serving 500+ requests/second with strict uptime requirements. Traditional blue-green deployments required load balancer reconfiguration and introduced brief connection drops during cutover.',
      problem: 'Deployment windows caused measurable revenue loss. Business required ability to deploy multiple times daily without customer impact. Existing deployment process took 15 minutes with 30-second traffic interruption.',
      solution: 'Implemented connection draining with health check coordination. New instances register with load balancer before old instances begin shutdown sequence. Added deployment state machine to handle rollback scenarios. Used feature flags for gradual traffic migration.',
      outcome: 'Eliminated deployment-related downtime. Reduced deployment time to 8 minutes. Enabled 3-5 daily deployments without customer impact. Deployment rollback time reduced from 15 minutes to 2 minutes.',
      skills: 'Load balancer orchestration • Connection lifecycle management • Deployment automation • Feature flag architecture',
      repoUrl: 'https://github.com/yourusername/zero-downtime-deployments'
    },
    {
      id: 'serverless-webhook-processing',
      title: 'Resilient Serverless Payment Webhook Processing',
      tags: ['backend', 'cloud-architecture', 'reliability'],
      context: 'Payment provider webhooks arriving at 2000+ events/hour with strict ordering and delivery guarantees. Webhook failures resulted in payment reconciliation issues and manual intervention.',
      problem: 'Lambda cold starts caused timeout failures during traffic spikes. No retry mechanism for transient failures. Webhook ordering not guaranteed. Manual reconciliation required for failed webhooks costing 10+ engineering hours weekly.',
      solution: 'Designed SQS-based buffering with FIFO queues for ordering guarantees. Implemented exponential backoff with dead letter queue for poison messages. Added idempotency layer using DynamoDB. Provisioned concurrency for critical Lambda functions.',
      outcome: 'Webhook processing reliability increased from 94% to 99.8%. Eliminated manual reconciliation work. Reduced P99 processing latency from 8 seconds to 1.2 seconds. Saved 40+ engineering hours monthly.',
      skills: 'Event-driven architecture • Idempotency design • Queue-based systems • Serverless optimization',
      repoUrl: 'https://github.com/yourusername/serverless-webhook-processing'
    },
    {
      id: 'authentication-token-rotation',
      title: 'Authentication System with Token Rotation and Revocation',
      tags: ['backend', 'security'],
      context: 'Multi-tenant SaaS platform with 50,000+ active users. Security audit identified long-lived tokens and lack of revocation mechanism as critical vulnerabilities. Compliance requirements mandated token rotation.',
      problem: 'Existing JWT implementation used 30-day expiration with no refresh mechanism. Token revocation required database lookup on every request. No mechanism to invalidate compromised tokens without forcing global logout.',
      solution: 'Implemented refresh token rotation with sliding window expiration. Added Redis-based token revocation list with TTL matching token lifetime. Designed token family tracking to detect replay attacks. Built admin interface for emergency token revocation.',
      outcome: 'Passed security audit with zero critical findings. Reduced token lifetime to 15 minutes without impacting user experience. Token revocation latency under 100ms. Detected and blocked 3 token replay attempts in first month.',
      skills: 'Authentication architecture • Security token design • Cache invalidation • Threat modeling',
      repoUrl: 'https://github.com/yourusername/auth-token-rotation'
    },
    {
      id: 'cicd-failure-containment',
      title: 'CI/CD with Automated Failure Containment',
      tags: ['ci-cd', 'reliability'],
      context: 'Microservices platform with 15+ services deploying 20-30 times daily. Failed deployments propagated to production, requiring manual rollback and causing customer-facing incidents.',
      problem: 'No automated validation between deployment stages. Smoke tests ran after production deployment. Failed deployments averaged 25-minute recovery time. On-call engineers interrupted for preventable deployment failures.',
      solution: 'Built progressive deployment pipeline with automated validation gates. Implemented canary analysis using error rate and latency metrics. Added automatic rollback triggers based on SLO violations. Created deployment health dashboard with real-time metrics.',
      outcome: 'Reduced failed production deployments by 85%. Automated rollback reduced MTTR from 25 minutes to 3 minutes. Eliminated 60% of deployment-related pages. Deployment confidence enabled increased release frequency.',
      skills: 'Progressive delivery • Automated testing • Metrics-driven decisions • Deployment orchestration',
      repoUrl: 'https://github.com/yourusername/cicd-failure-containment'
    },
    {
      id: 'database-failover-validation',
      title: 'Database Failover Validation as a First-Class Practice',
      tags: ['cloud-architecture', 'reliability'],
      context: 'Multi-AZ RDS instances supporting payment processing. Disaster recovery plan existed on paper but never tested in production. Unknown application behavior during database failover created operational risk.',
      problem: 'RDS failover never validated under production load. Connection pool behavior during failover unknown. No confidence in stated RTO/RPO metrics. Previous unplanned failover caused 8-minute outage.',
      solution: 'Built automated failover testing framework integrated into quarterly DR drills. Implemented connection pool validation and query performance testing post-failover. Added application-level health checks for database connectivity. Created runbook automation for failover scenarios.',
      outcome: 'Discovered and fixed 3 critical connection pool bugs before production impact. Validated actual RTO of 2 minutes vs. assumed 5 minutes. Reduced unplanned failover recovery time by 75%. Established quarterly testing cadence.',
      skills: 'Chaos engineering • Database reliability • Connection pool tuning • Disaster recovery planning',
      repoUrl: 'https://github.com/yourusername/database-failover-validation'
    },
    {
      id: 'automated-environment-scaling',
      title: 'Cost Control Through Automated Environment Scaling',
      tags: ['cloud-architecture', 'cost-optimization'],
      context: 'Development and staging environments running 24/7 with production-equivalent resources. Monthly cloud spend of $18K for non-production environments with utilization under 20% outside business hours.',
      problem: 'Non-production environments over-provisioned for peak load testing. Resources idle 16+ hours daily and full weekends. Manual scaling required coordination across teams. Previous cost reduction attempts broke CI/CD pipelines.',
      solution: 'Implemented time-based auto-scaling with business hours detection. Built environment hibernation system preserving state during shutdown. Added on-demand scaling triggers for load testing. Created cost allocation tags and budget alerts.',
      outcome: 'Reduced non-production cloud costs by 62% ($11K monthly savings). Maintained CI/CD pipeline reliability. Environment startup time under 5 minutes. Automated scaling eliminated manual coordination overhead.',
      skills: 'Cloud cost optimization • Infrastructure automation • Resource scheduling • Budget management',
      repoUrl: 'https://github.com/yourusername/automated-environment-scaling'
    },
    {
      id: 'slo-based-alerting',
      title: 'SLO-Based Alerting and Error Budgeting',
      tags: ['reliability', 'cloud-architecture'],
      context: 'Payment platform with 99.9% uptime SLA generating 200+ alerts weekly. Alert fatigue caused missed critical incidents. Customers reported issues before engineering team awareness.',
      problem: 'Metric-based alerts produced high false positive rate. No clear signal for SLA violations. On-call engineers overwhelmed with non-actionable alerts. Mean time to detection (MTTD) averaged 12 minutes.',
      solution: 'Defined SLIs for availability, latency, and error rate aligned with customer experience. Implemented error budget tracking with burn rate alerts. Created tiered alerting based on SLO violation severity. Integrated with PagerDuty for intelligent escalation.',
      outcome: 'Alert volume reduced by 78% while improving detection accuracy. MTTD improved to 3 minutes. Error budget visibility enabled data-driven deployment decisions. On-call satisfaction scores increased 40%.',
      skills: 'SRE practices • Observability design • Alert engineering • Error budget management',
      repoUrl: 'https://github.com/yourusername/slo-based-alerting'
    },
    {
      id: 'async-file-processing',
      title: 'Asynchronous File Processing Pipeline',
      tags: ['backend', 'cloud-architecture'],
      context: 'Document processing system handling 10,000+ file uploads daily. Synchronous processing blocked API responses and caused timeout failures during peak load.',
      problem: 'File processing in request/response cycle caused 30-second API timeouts. No visibility into processing status. Failed uploads required manual reprocessing. System could not scale beyond 50 concurrent uploads.',
      solution: 'Designed asynchronous pipeline using S3 events and SQS. Implemented job status tracking with WebSocket notifications. Added retry logic with exponential backoff. Built processing worker auto-scaling based on queue depth.',
      outcome: 'API response time reduced from 30 seconds to 200ms. System scaled to 500+ concurrent uploads. Processing reliability improved from 92% to 99.5%. Eliminated manual reprocessing work.',
      skills: 'Asynchronous architecture • Event-driven design • Queue-based systems • Worker orchestration',
      repoUrl: 'https://github.com/yourusername/async-file-processing'
    },
    {
      id: 'infrastructure-drift-detection',
      title: 'Infrastructure Drift Detection and Governance',
      tags: ['cloud-architecture', 'ci-cd'],
      context: 'AWS infrastructure managed by Terraform with 200+ resources. Manual console changes causing drift between code and actual state. Production incidents traced to undocumented infrastructure modifications.',
      problem: 'Infrastructure drift between Terraform state and AWS resources. No visibility into manual changes. Terraform applies failing due to unexpected modifications. Compliance audit identified governance gaps.',
      solution: 'Built automated drift detection using Terraform Cloud and AWS Config. Implemented daily drift reports with Slack notifications. Added AWS Config rules preventing manual modifications of critical resources. Created approval workflow for emergency changes.',
      outcome: 'Infrastructure drift detected within 24 hours vs. weeks previously. Manual changes blocked on production resources. Terraform state accuracy restored. Passed compliance audit with zero infrastructure findings.',
      skills: 'Infrastructure as Code • Compliance automation • Change management • Governance frameworks',
      repoUrl: 'https://github.com/yourusername/infrastructure-drift-detection'
    },
    {
      id: 'api-rate-limiting',
      title: 'API Abuse Protection and Rate Limiting',
      tags: ['backend', 'security'],
      context: 'Public API experiencing abuse from automated scrapers consuming 40% of infrastructure capacity. Legitimate customer requests experiencing degraded performance during abuse periods.',
      problem: 'No rate limiting on public endpoints. Single abusive client could impact all customers. API costs increased 60% due to abuse traffic. Customer complaints about API performance during peak abuse.',
      solution: 'Implemented tiered rate limiting using Redis with sliding window algorithm. Added API key authentication with usage quotas. Built abuse detection using request pattern analysis. Created customer-facing rate limit dashboard.',
      outcome: 'Reduced abusive traffic by 95%. API infrastructure costs decreased 45%. Legitimate customer API performance improved 3x. Zero customer complaints about rate limiting implementation.',
      skills: 'Rate limiting algorithms • API security • Redis optimization • Abuse detection',
      repoUrl: 'https://github.com/yourusername/api-rate-limiting'
    },
    {
      id: 'eks-cluster-upgrade',
      title: 'Zero-Downtime EKS Cluster Upgrade in Production',
      tags: ['kubernetes', 'cloud-architecture', 'reliability'],
      context: 'Production EKS cluster running critical payment services across 33+ countries. Cluster required upgrade from v1.24 to v1.27 without service interruption or SLA violation.',
      problem: 'Major version upgrades risked API compatibility breaks and service disruption. Manual upgrade attempts previously caused 2-hour outages. No tested rollback procedure for failed upgrades.',
      solution: 'Implemented blue-green cluster strategy with Terraform-managed infrastructure. Created parallel v1.27 cluster and migrated workloads using weighted DNS traffic shifting. Validated payment flows before decommissioning old cluster. Built automated rollback procedure.',
      outcome: 'Zero downtime achieved during upgrade. All payment services maintained 99.9%+ uptime. Established repeatable upgrade pattern for future versions. Reduced upgrade risk and planning overhead.',
      skills: 'Kubernetes operations • Blue-green deployments • Traffic management • Risk mitigation',
      repoUrl: 'https://github.com/yourusername/eks-cluster-upgrade'
    },
    {
      id: 'automated-deployment-rollback',
      title: 'Automated Rollback System for Failed Deployments',
      tags: ['ci-cd', 'kubernetes', 'reliability'],
      context: 'Microservices platform with 20+ services deploying multiple times daily. Failed deployments left services in degraded state requiring manual intervention and extending incident duration.',
      problem: 'Deployment failures from bad configs or failing health checks required manual rollback. Mean time to recovery (MTTR) averaged 25 minutes. No automated validation of deployment health.',
      solution: 'Built automated rollback pipeline using health checks and deployment metrics. Implemented progressive delivery with canary analysis. Failed deployments trigger automatic revert to last known good state with team notifications.',
      outcome: 'MTTR reduced from 25 minutes to 3 minutes. 90% of failed deployments auto-recovered without human intervention. Deployment confidence increased enabling more frequent releases. Reduced on-call burden significantly.',
      skills: 'Deployment automation • Health check design • Rollback strategies • Progressive delivery',
      repoUrl: 'https://github.com/yourusername/automated-deployment-rollback'
    },
    {
      id: 'rds-failover-testing',
      title: 'Automated RDS Failover Testing and Validation',
      tags: ['cloud-architecture', 'reliability'],
      context: 'Multi-AZ RDS instances supporting payment platform with strict uptime requirements. Disaster recovery procedures documented but never validated under production conditions.',
      problem: 'RDS failover never tested in production environment. Unknown application behavior during database failover. No confidence in documented RTO/RPO metrics. Previous unplanned failover caused extended outage.',
      solution: 'Created Terraform-based chaos engineering framework for controlled RDS failovers during maintenance windows. Automated connection pool validation, query performance testing, and application health verification post-failover.',
      outcome: 'Discovered and fixed 3 critical application bugs before production impact. Validated actual 2-minute RTO vs. documented 5 minutes. Established quarterly failover testing schedule. Reduced unplanned failover recovery time by 70%.',
      skills: 'Chaos engineering • Database operations • Automated testing • Disaster recovery',
      repoUrl: 'https://github.com/yourusername/rds-failover-testing'
    }
  ]

  const solutionFilters = [
    { id: 'all', label: 'All' },
    { id: 'backend', label: 'Backend' },
    { id: 'cloud-architecture', label: 'Cloud Architecture' },
    { id: 'kubernetes', label: 'Kubernetes' },
    { id: 'ci-cd', label: 'CI/CD' },
    { id: 'reliability', label: 'Reliability' },
    { id: 'security', label: 'Security' },
    { id: 'cost-optimization', label: 'Cost Optimization' }
  ]

  const filteredSolutions = activeSolutionFilter === 'all'
    ? solutions
    : solutions.filter(solution => solution.tags.includes(activeSolutionFilter))

  return (
    <main className="min-h-screen bg-near-black text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl mx-auto border-b border-gray-800">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white active:text-gray-200 transition-colors mb-4 sm:mb-6 text-sm sm:text-base touch-manipulation"
        >
          <ArrowLeft size={16} className="sm:hidden" />
          <ArrowLeft size={20} className="hidden sm:block" />
          Back to Home
        </Link>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          <span className="gradient-text">Production Engineering Case Studies</span>
        </h1>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl space-y-3 sm:space-y-4">
          <p className="leading-relaxed">
            I own production systems end-to-end—from initial architecture through deployment, monitoring, and incident response. 
            My work spans backend services, cloud infrastructure, CI/CD pipelines, reliability engineering, and security.
          </p>
          <p className="text-gray-400 leading-relaxed">
            These case studies document real production problems I've solved. Each includes business context, 
            engineering decisions, implementation approach, and measurable outcomes. No tutorials, no theory—just 
            production experience with working code.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl font-bold text-reliability-green mb-1 sm:mb-2">{solutions.length}</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">Case Studies</div>
          </div>
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl font-bold text-cloud-blue mb-1 sm:mb-2">Production</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">Validated</div>
          </div>
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl font-bold text-reliability-green mb-1 sm:mb-2">Open</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">Source</div>
          </div>
          <div className="stat-card p-4 sm:p-5 md:p-6 rounded-xl text-center hover:scale-105 transition-transform touch-manipulation">
            <div className="text-2xl sm:text-3xl font-bold text-cloud-blue mb-1 sm:mb-2">IaC</div>
            <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">Included</div>
          </div>
        </div>
      </section>

      {/* Filters and Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl mx-auto">
        {/* Solution Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12">
          {solutionFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveSolutionFilter(filter.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium transition-all text-xs sm:text-sm touch-manipulation active:scale-95 ${
                activeSolutionFilter === filter.id
                  ? 'bg-reliability-green text-white shadow-lg'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Filter Results Info */}
        {activeSolutionFilter !== 'all' && (
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-400">
              Showing {filteredSolutions.length} case stud{filteredSolutions.length !== 1 ? 'ies' : 'y'} for <span className="text-reliability-green font-semibold">{solutionFilters.find(f => f.id === activeSolutionFilter)?.label}</span>
            </p>
          </div>
        )}

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {filteredSolutions.map(solution => (
            <div key={solution.id} className="case-study-card p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700 hover:border-reliability-green hover:shadow-lg transition-all touch-manipulation">
              <div className="flex flex-wrap gap-2 mb-3">
                {solution.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-reliability-green rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-white leading-tight">{solution.title}</h3>
              
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-gray-400 mb-1">Business Context</h4>
                  <p className="text-gray-300 leading-relaxed">{solution.context}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-400 mb-1">Engineering Problem</h4>
                  <p className="text-gray-300 leading-relaxed">{solution.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-400 mb-1">Solution</h4>
                  <p className="text-gray-300 leading-relaxed">{solution.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-400 mb-1">Measurable Outcomes</h4>
                  <p className="text-gray-300 leading-relaxed">{solution.outcome}</p>
                </div>
                
                <div className="pt-2 sm:pt-3 border-t border-gray-700">
                  <div className="text-xs text-gray-400 mb-2">Skills Demonstrated:</div>
                  <div className="text-xs text-cloud-blue mb-2 sm:mb-3 leading-relaxed">{solution.skills}</div>
                  
                  <a 
                    href={`mailto:quaysontitus@gmail.com?subject=Source Code Request: ${solution.title}&body=Hi Titus,%0D%0A%0D%0AI'm interested in reviewing the source code for "${solution.title}".%0D%0A%0D%0AThank you!`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-reliability-green hover:text-green-400 active:text-green-300 font-semibold transition-colors touch-manipulation"
                  >
                    <Mail size={14} className="sm:hidden" />
                    <Mail size={16} className="hidden sm:block" />
                    Request Source Code
                    <ExternalLink size={12} className="sm:hidden" />
                    <ExternalLink size={14} className="hidden sm:block" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl mx-auto">
        <div className="text-center p-6 sm:p-8 bg-gray-800/50 rounded-xl border border-gray-700">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">Production-Ready Engineering</h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            All case studies include working source code, infrastructure as code, comprehensive documentation, 
            and validation procedures. Built for production, tested in production.
          </p>
          <a 
            href="mailto:quaysontitus@gmail.com?subject=Source Code Access Request&body=Hi Titus,%0D%0A%0D%0AI'm interested in reviewing your production engineering case studies and source code.%0D%0A%0D%0AThank you!"
            className="inline-flex items-center gap-2 bg-reliability-green hover:bg-green-600 active:bg-green-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base touch-manipulation"
          >
            <Mail size={16} className="sm:hidden" />
            <Mail size={20} className="hidden sm:block" />
            Request Source Code Access
            <ExternalLink size={14} className="sm:hidden" />
            <ExternalLink size={18} className="hidden sm:block" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 sm:px-6 py-6 sm:py-8 text-center text-gray-400 text-xs sm:text-sm">
        <p>&copy; 2024 Titus Quayson. Cloud & Site Reliability Engineer.</p>
      </footer>
    </main>
  )
}
