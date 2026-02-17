export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manish Jha',
    url: 'https://www.manishjha.org',
    image: 'https://www.manishjha.org/images/photo-1-press.jpg',
    description: 'Award-winning war correspondent and Executive Editor at TV9 Bharatvarsh',
    jobTitle: 'Executive Editor & War Correspondent',
    email: 'contact@manishjha.org',
    telephone: '+91-9871889081',
    sameAs: [
      'https://www.tv9hindi.com/author/manish',
      'https://www.news9live.com/author/manish-jha-2',
    ],
    knowsAbout: [
      'War Reporting',
      'International Journalism',
      'Conflict Analysis',
      'Geopolitics',
      'Global Affairs',
      'Defense Journalism',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'TV9 Bharatvarsh',
      url: 'https://www.tv9hindi.com',
    },
    award: [
      {
        '@type': 'Award',
        name: 'Honest View Award 2025',
        description: 'Prestigious award from Russian Ministry of Foreign Affairs for unbiased journalism',
        awardDate: '2025',
        awarder: {
          '@type': 'Organization',
          name: 'Russian Ministry of Foreign Affairs',
        },
      },
      {
        '@type': 'Award',
        name: 'Russian Federation Medal for Friendship and Cooperation',
        description: 'International cooperation and journalism excellence',
        awardDate: '2025',
        awarder: {
          '@type': 'Organization',
          name: 'Russian Federation',
        },
      },
    ],
    workLocation: [
      {
        '@type': 'Place',
        name: 'Ukraine - Donbass',
        description: 'War zone reporting and conflict coverage (2022-2025)',
      },
      {
        '@type': 'Place',
        name: 'China & Taiwan',
        description: 'Geopolitical analysis and cross-strait relations coverage',
      },
      {
        '@type': 'Place',
        name: 'United States',
        description: 'Presidential election, UNGA, and diplomatic coverage (2019-2025)',
      },
      {
        '@type': 'Place',
        name: 'South Asia',
        description: 'Regional affairs and security analysis in Bangladesh, Nepal, Sri Lanka',
      },
    ],
    seeks: {
      '@type': 'Thing',
      name: 'Speaking Engagements',
      description: 'Available for conferences, panel discussions, and journalism workshops',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
