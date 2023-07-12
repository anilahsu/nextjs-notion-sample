import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const caseStudyDatabaseId = "3d91f31b346e42b287fdbb881dfb3f26";

export const getStaticProps = async () => {
  console.log("domain", domain)
  try {
    const props = await resolveNotionPage(domain,caseStudyDatabaseId)
    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  console.log("NotionDomainPage props",props)
  return <NotionPage {...props} />
}
