import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Titus Quayson - Cloud & Site Reliability Engineer',
  description: 'Cloud & Site Reliability Engineer operating production-grade systems at continental scale. AWS • Kubernetes • Terraform • GitOps • CI/CD',
  keywords: 'Cloud Engineer, Site Reliability Engineer, SRE, DevOps, AWS, Kubernetes, Terraform, GitOps, CI/CD, Fintech',
  authors: [{ name: 'Titus Quayson' }],
  openGraph: {
    title: 'Titus Quayson - Cloud & Site Reliability Engineer',
    description: 'Cloud & Site Reliability Engineer operating production-grade systems at continental scale',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}