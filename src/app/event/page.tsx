// pages/event.tsx

import Head from 'next/head'
import Image from 'next/image'

export default function EventPage() {
  const data = {
    title: "Festivāls FĀZE'25",
    shortDescription: "A two-day showcase of emerging Latvian music talent at the historic Zentenes Castle, featuring live performances, workshops, and immersive art installations.",
    fullUrl: "https://your-domain.com/event",
    image: "https://static.wixstatic.com/media/0da768_880a3209e3744cd0a96b66835a01b8c5.png/v1/crop/x_0,y_0,w_256,h_256,q_85,enc_auto/0da768_880a3209e3744cd0a96b66835a01b8c5.png",
    startDate: "2025-07-18T15:00",
    endDate: "2025-07-19T23:00",
    location: {
      name: "Zentenes pils",
      address: {
        streetAddress: "Zentenes pils 1",
        addressLocality: "Zentene",
        addressRegion: "Tukuma novads",
        postalCode: "3124",
        addressCountry: "LV"
      }
    },
    schedule: [
      {
        date: "2025-07-18",
        events: [
          { time: "15:00", title: "Gates Open" },
          { time: "16:00", stage: "Main Stage", title: "Lokāli DJ Set" },
          { time: "17:30", stage: "Castle Lawn", title: "Spēlētājs Trio" },
          { time: "19:00", stage: "Main Stage", title: "Indie Folk Collective" },
          { time: "21:00", stage: "Castle Ruins", title: "Midnight Soundscape" }
        ]
      },
      {
        date: "2025-07-19",
        events: [
          { time: "12:00", title: "Workshops: Beatmaking & DIY Synth" },
          { time: "14:00", stage: "Workshop Tent", title: "Panel: Music Production Tips" },
          { time: "16:00", stage: "Main Stage", title: "Indie Rock Showcase" },
          { time: "18:30", stage: "Castle Lawn", title: "Electronic Live Act" },
          { time: "20:00", stage: "Main Stage", title: "Headliner: Alt-Rock Sensation" },
          { time: "22:00", title: "Closing DJ Ceremony" }
        ]
      }
    ],
    offers: [
      {
        name: "Day 1 Ticket",
        url: "https://www.fazeevents.lv/tickets/faze25-day1",
        price: "20.00",
        currency: "EUR",
        availability: "InStock"
      },
      {
        name: "Day 2 Ticket",
        url: "https://www.fazeevents.lv/tickets/faze25-day2",
        price: "20.00",
        currency: "EUR",
        availability: "InStock"
      },
      {
        name: "Two-Day Pass",
        url: "https://www.fazeevents.lv/tickets/faze25-pass",
        price: "35.00",
        currency: "EUR",
        availability: "InStock"
      }
    ],
    organizer: {
      name: "Biedrība FĀZE events",
      url: "https://www.fazeevents.lv"
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": data.title,
    "startDate": data.startDate,
    "endDate": data.endDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": data.location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.location.address.streetAddress,
        "addressLocality": data.location.address.addressLocality,
        "addressRegion": data.location.address.addressRegion,
        "postalCode": data.location.address.postalCode,
        "addressCountry": data.location.address.addressCountry
      }
    },
    "image": [ data.image ],
    "description": data.shortDescription,
    "workFeatured": data.schedule.flatMap(day => day.events.map(evt => evt.title)),
    "offers": data.offers.map(offer => ({
      "@type": "Offer",
      "name": offer.name,
      "url": offer.url,
      "price": offer.price,
      "priceCurrency": offer.currency,
      "availability": `https://schema.org/${offer.availability}`
    })),
    "organizer": {
      "@type": "Organization",
      "name": data.organizer.name,
      "url": data.organizer.url
    }
  }

  return (
    <>
      <Head>
        <title>{data.title} – My Test Site</title>
        <meta name="description" content={data.shortDescription} />
        <link rel="canonical" href={data.fullUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
        <h1>{data.title}</h1>
        <Image src="https://video.wixstatic.com/video/c29b80_c835d8898c9644639c32a8861f54048b/720p/mp4/file.mp4" alt="Festivāls FĀZE'25 banner" width={800} height={400} style={{ width: '100%', borderRadius: 8 }} />
        {/* <Image src={data.image} alt="Festivāls FĀZE'25 banner" width={800} height={400} style={{ width: '100%', borderRadius: 8 }} /> */}
        <p><em>{data.shortDescription}</em></p>

        <h2>Pasākuma Vieta un Laiks</h2>
        <p>
          <strong>Datums:</strong> {new Date(data.startDate).toLocaleDateString()} – {new Date(data.endDate).toLocaleDateString()}<br />
          <strong>Vieta:</strong> {data.location.name}, {data.location.address.streetAddress}, {data.location.address.addressLocality}, {data.location.address.addressRegion}
        </p>

        <h2>Grafiks</h2>
        {data.schedule.map((day, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3>{new Date(day.date).toLocaleDateString()}</h3>
            <ul>
              {day.events.map((evt, j) => (
                <li key={j}><strong>{evt.time}</strong> {evt.stage ? `(${evt.stage}) ` : ''}- {evt.title}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Biļetes un Cenas</h2>
        <ul>
          {data.offers.map((offer, i) => (
            <li key={i}>
              <a href={offer.url}>{offer.name}</a> – {offer.price} {offer.currency} ({offer.availability === 'InStock' ? 'Pieejams' : 'Izpārdots'})
            </li>
          ))}
        </ul>

        <h2>Par Festivālu</h2>
        <p>
          Festivāls FĀZE katru gadu pulcē labākos jaunos Latvijas mūziķus un māksliniekus vēsturiskajā Zentenes pilī. Mērķis ir radīt intīmu, radošu vidi, kurā mūzika, māksla un tehnoloģijas saplūst vienotā pieredzē. Piedāvājam gan koncertus, gan interaktīvas darbnīcas, gan izstādes instalācijas.
        </p>
        <p>
          Pirmā Festivāla FĀZE notika 2021. gadā un guva lielu atsaucību, piesaistot ap 500 apmeklētāju. Kopš tā laika festivāls ir izaudzis gan pēc apmeklētāju skaita, gan programmas daudzveidības.
        </p>

        <h2>Organizators</h2>
        <p>
          <a href={data.organizer.url}>{data.organizer.name}</a> ir kultūras biedrība, kas jau vairāk nekā piecus gadus veido pasākumus, kuros centrālā loma ir jaunajiem talantiem.
        </p>
      </main>
    </>
  )
}
