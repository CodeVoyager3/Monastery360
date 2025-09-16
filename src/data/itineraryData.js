// src/data/itineraryData.js

// This data corresponds to the IDs in your 'savedItineraries' array
export const itineraryData = [
  {
    id: 1,
    title: "Sikkim's Spiritual Circuit",
    duration: "2 Days / 1 Night",
    description: "An immersive journey into the heart of Sikkim's Buddhist heritage, connecting the most significant monasteries in the region. This tour is a perfect blend of spiritual solace and breathtaking mountain scenery.",
    heroImage: "/rumtek.jpg", // From your existing sample data
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d190955.4896764364!2d88.26565629260195!3d27.212464101057705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39e6a56a5805eafb%3A0x73d6132c501c8f20!2sGangtok%2C%20Sikkim!3m2!1d27.3313512!2d88.6138113!4m5!1s0x39e6842d294c8d71%3A0x5ff926244a424543!2sPemayangtse%20Monastery%2C%20Sikkim!3m2!1d27.303354!2d88.253716!5e0!3m2!1sen!2sin!4v1758043565096!5m2!1sen!2sin",
    bookingLinks: {
      flights: "https://www.airindia.com/in/en/flights.html?bookingPath=search&searchType=return&from=DEL&to=PYG&tripType=return&journeyDate=2025-10-10&returnDate=2025-10-12",
      hotels: "https://www.makemytrip.com/hotels/gangtok-hotels-p-1.html"
    },
    roadmap: [
      {
        day: 1,
        title: "Arrival in Gangtok & Rumtek",
        details: "Arrive at Pakyong Airport (PYG) or Bagdogra (IXB) and transfer to your hotel in Gangtok. After check-in, drive to Rumtek Monastery, the seat of the Kagyu lineage. Spend the afternoon exploring its vast complex. In the evening, visit Enchey Monastery, perched on a hilltop overlooking the city.",
        attractions: [
          { name: "Rumtek Monastery", image: "/rumtek.jpg", desc: "The largest and most significant monastery in Sikkim." },
          { name: "Enchey Monastery", image: "/enchy.jpg", desc: "A 200-year-old monastery known for its vibrant Cham dances." }
        ]
      },
      {
        day: 2,
        title: "Journey to Pemayangtse",
        details: "Enjoy a scenic morning drive to West Sikkim. Visit Pemayangtse Monastery, one of the oldest in the state. This monastery offers breathtaking, direct views of Mount Kanchenjunga on a clear day. Afterward, begin your journey back to your departure point.",
        attractions: [
          { name: "Pemayangtse Monastery", image: "/pemayangatse.jpeg", desc: "Built in 1705, this monastery houses rare sculptures and thangkas." }
        ]
      }
    ],
    foodGuide: [
      { name: "Momos (Dumplings)", image: "/momos.jpeg", desc: "Try the local steamed dumplings, available with vegetable or meat fillings, served with a spicy dip." },
      { name: "Thukpa (Noodle Soup)", image: "/thukpa.jpeg", desc: "A hearty and warming Tibetan noodle soup, perfect for the cool mountain climate." },
      { name: "Phagshapa (Pork Stew)", image: "/phagshapa.jpeg", desc: "A traditional pork dish cooked with radishes and dried chilies, offering a burst of flavor." }
    ]
  },
  {
    id: 2,
    title: "Himalayan Foothills Tour",
    duration: "1 Day",
    description: "A quick yet profound journey to two of Sikkim's important monasteries, Phodong and Tashiding, nestled in the stunning Himalayan foothills.",
    heroImage: "/phodong.jpg",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d160471.77581089854!2d88.34874613490467!3d27.28316704907808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39e6bba53187e157%3A0xefa19c90b60b6591!2sPhodong%20Monastery!3m2!1d27.413034!2d88.5837578!4m5!1s0x39e685fca06dc171%3A0x92150f5f129db887!2sTashiding%20Monastery%2C%20Sikkim!3m2!1d27.308933699999997!2d88.297822!5e0!3m2!1sen!2sin!4v1758043850327!5m2!1sen!2sin",
    bookingLinks: {
      flights: "https://www.airindia.com/in/en/flights.html?bookingPath=search&searchType=return&from=DEL&to=PYG&tripType=return&journeyDate=2025-10-10&returnDate=2025-10-12",
      hotels: "https://www.makemytrip.com/hotels/gangtok-hotels-p-1.html"
    },
    roadmap: [
      {
        day: 1,
        title: "Phodong & Tashiding Exploration",
        details: "Start your day early from Gangtok and head north to Phodong Monastery, a significant monastery of the Kagyupa sect. After exploring its ancient murals, continue your scenic drive to West Sikkim to visit the highly venerated Tashiding Monastery, perched on a conical hill between two rivers.",
        attractions: [
          { name: "Phodong Monastery", image: "/phodong.jpg", desc: "Houses beautiful murals and is one of the 6 major monasteries in Sikkim." },
          { name: "Tashiding Monastery", image: "/tashiding.jpg", desc: "Famous for the holy 'Thongwa Rangdol' chorten, said to cleanse sins." }
        ]
      }
    ],
    foodGuide: [
      { name: "Sael Roti", image: "/saelroti.png", desc: "A traditional, lightly sweet, ring-shaped bread, often served during festivals." },
      { name: "Gundruk", image: "/gundruk.jpeg", desc: "A fermented leafy green vegetable, often served as a side dish or in a soup, with a tangy flavor." }
    ]
  },
  {
    id: 3,
    title: "Ancient Capitals Trail",
    duration: "1 Day",
    description: "Step back in time by visiting the first capital of Sikkim at Yuksom and the ruins of the second capital at Rabdentse, alongside Sikkim's first monastery.",
    heroImage: "/dubdi.jpg",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14180.172046612795!2d88.23527350966549!3d27.311842443927002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39e686717bf955cb%3A0x30eff5bdf9697aa1!2sPelling%2C%20Sikkim!3m2!1d27.3197716!2d88.2400333!4m5!1s0x39e6843288dae1d5%3A0x4ef81485da89197d!2sRabdentse%20Ruins%2C%20Gyalshing%2C%20Sikkim!3m2!1d27.301403!2d88.25662229999999!5e0!3m2!1sen!2sin!4v1758043107711!5m2!1sen!2sin",
    bookingLinks: {
      flights: "https://www.airindia.com/in/en/flights.html?bookingPath=search&searchType=return&from=DEL&to=PYG&tripType=return&journeyDate=2025-10-10&returnDate=2025-10-12",
      hotels: "https://www.makemytrip.com/hotels/pelling-hotels-p-1.html"
    },
    roadmap: [
      {
        day: 1,
        title: "Yuksom & Rabdentse",
        details: "Your journey starts from Pelling. First, hike to Dubdi Monastery, the oldest monastery in Sikkim, established in 1701. After returning, drive to the Rabdentse Ruins, the archaeological site of the second capital of Sikkim. The ruins offer a fascinating glimpse into the past and spectacular views.",
        attractions: [
          { name: "Dubdi Monastery", image: "/dubdi.jpg", desc: "Known as the 'Hermit's Cell', accessible via a steep 1-hour hike." },
          { name: "Rabdentse Ruins", image: "/rabdentse-ruins.jpg", desc: "The hauntingly beautiful ruins of the former royal palace." }
        ]
      }
    ],
    foodGuide: [
      { name: "Chhurpi Soup", image: "/chhurpi.jpeg", desc: "A traditional soup made from fermented yak or cow's milk cheese." },
      { name: "Sikkimese Chang", image: "/chhang.jpeg", desc: "A local millet beer, served in a bamboo container, which is a significant part of local hospitality." }
    ]
  }
];