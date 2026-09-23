import * as React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  practice?: string
  name?: string
  email?: string
  phone?: string
  specialty?: string
  software?: string
  needs?: string
}

function QuoteRequestEmail({ practice = '-', name = '-', email = '-', phone = '-', specialty = '-', software = '-', needs = '-' }: Props) {
  const rows: Array<[string, string]> = [
    ['Practice', practice], ['Name', name], ['Email', email], ['Phone', phone],
    ['Specialty', specialty], ['EHR / software', software || '-'],
  ]
  return (
    <Html>
      <Head />
      <Preview>New consultation request from {practice}</Preview>
      <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '24px', maxWidth: '560px' }}>
          <Heading style={{ color: '#12305c', fontSize: '22px' }}>New consultation request</Heading>
          <Section>
            {rows.map(([k, v]) => (
              <Text key={k} style={{ margin: '4px 0', color: '#1f2937', fontSize: '14px' }}><strong>{k}:</strong> {v}</Text>
            ))}
          </Section>
          <Text style={{ marginTop: '16px', color: '#12305c', fontSize: '14px' }}><strong>What they want to improve:</strong></Text>
          <Text style={{ color: '#1f2937', fontSize: '14px', whiteSpace: 'pre-wrap' }}>{needs || '-'}</Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: QuoteRequestEmail,
  subject: (d: Record<string, any>) => `New consultation request: ${d.practice ?? 'Practice'}`,
  displayName: 'Consultation request (to Sales)',
  to: 'contact@medpaymenttech.com',
  previewData: { practice: 'Sunrise Family Medicine', name: 'Jane Doe', email: 'jane@example.com', phone: '(555) 123-4567', specialty: 'Primary care', software: 'Athena', needs: 'Faster copay collection.' },
} satisfies TemplateEntry
