// 为每个城市生成3张AI插画
// 使用Hugging Face Stable Diffusion API

const cities = {
  maldives: {
    name: "Maldives",
    prompts: [
      "Luxury overwater bungalow resort with crystal turquoise lagoon and white sand in Maldives, watercolor illustration",
      "Fresh tropical seafood platter with mango and coconut on white sand beach in Maldives, food art",
      "Maldivian sunset with wooden sailboat dhoni and palm trees, golden hour, watercolor"
    ]
  },
  lisbon: {
    name: "Lisbon",
    prompts: [
      "Famous yellow tram on cobblestone street with blue azulejo tiles in Lisbon, watercolor illustration",
      "Portuguese grilled sardine and wine in traditional Alfama restaurant, food art illustration",
      "Tagus river golden sunset from Miradouro viewpoint terrace in Lisbon, watercolor"
    ]
  },
  amalfi: {
    name: "Amalfi Coast",
    prompts: [
      "Colorful houses clinging to cliffs in Positano Amalfi Coast Italy, pastel watercolor",
      "Fresh handmade pasta with fresh lemon and seafood, Amalfi inspired, food art",
      "Dramatic rocky coastline with turquoise Mediterranean water, Amalfi cliffs, watercolor"
    ]
  },
  bali: {
    name: "Bali",
    prompts: [
      "Terraced rice paddies in Ubud Bali with lush green vegetation and farmer, watercolor",
      "Ornate golden Balinese temple architecture with intricate carvings, watercolor",
      "Tropical Bali beach with coconut palms and sunset over Indian Ocean, warm illustration"
    ]
  },
  singapore: {
    name: "Singapore",
    prompts: [
      "Marina Bay Sands hotel reflecting in water with Singapore skyline night, watercolor",
      "Crowded hawker food court with noodles and satay in Singapore, food art",
      "Gardens by the Bay supertrees glowing at night with Ferris wheel, watercolor"
    ]
  },
  chiangmai: {
    name: "Chiang Mai",
    prompts: [
      "Wat Chedi Luang golden temple with ornate Thai architecture in Chiang Mai, watercolor",
      "Traditional Thai curry bowl and street food at Chiang Mai night market, food art",
      "Yi Peng lantern festival with thousands of floating lights in night sky, magical watercolor"
    ]
  },
  santorini: {
    name: "Santorini",
    prompts: [
      "White-washed domes and blue doors of churches in Oia Santorini Greece, iconic watercolor",
      "Fresh Greek salad with feta and Greek wine on table Santorini, Mediterranean food art",
      "Santorini sunset over Aegean caldera with white buildings silhouette, romantic watercolor"
    ]
  },
  copenhagen: {
    name: "Copenhagen",
    prompts: [
      "Nyhavn colorful historic buildings reflected in canal Copenhagen, watercolor",
      "Danish pastry and espresso in cozy hygge cafe Copenhagen, food illustration",
      "Tivoli gardens carousel and lights at night Copenhagen magical, watercolor"
    ]
  },
  kyoto: {
    name: "Kyoto",
    prompts: [
      "Thousands of red torii gates at Fushimi Inari shrine pathway Kyoto, watercolor",
      "Elegant Japanese kaiseki meal with seasonal ingredients and presentation, food art",
      "Serene bamboo forest path in Arashiyama Kyoto with dappled light, watercolor"
    ]
  },
  sydney: {
    name: "Sydney",
    prompts: [
      "Sydney Opera House white sails and Harbour Bridge reflected in water, watercolor",
      "Fresh seafood platter at outdoor restaurant Sydney Harbour, food illustration",
      "Bondi Beach surfers riding waves with golden sand and lifeguard tower, watercolor"
    ]
  },
  barcelona: {
    name: "Barcelona",
    prompts: [
      "Sagrada Familia basilica with colorful stained glass and spires Barcelona, watercolor",
      "Spanish tapas and red wine on rustic table in Barcelona restaurant, food art",
      "Park Güell colorful mosaic tiles and Barcelona city view from terrace, watercolor"
    ]
  },
  queenstown: {
    name: "Queenstown",
    prompts: [
      "Lake Wakatipu surrounded by snow-capped Remarkables mountains Queenstown, landscape watercolor",
      "Skydiving adventure over lakes and mountains New Zealand, action illustration",
      "Queenstown autumn with golden foliage reflected in lake water, nature watercolor"
    ]
  },
  rio: {
    name: "Rio de Janeiro",
    prompts: [
      "Christ the Redeemer statue arms outstretched overlooking Rio, iconic watercolor",
      "Copacabana beach with colorful beach umbrellas and lifeguard tower, tropical illustration",
      "Rio Carnival parade with vibrant feathered costumes and samba dancers, celebration watercolor"
    ]
  },
  tokyo: {
    name: "Tokyo",
    prompts: [
      "Shibuya crossing at night with neon signs and crowds of people Tokyo, watercolor",
      "Bowl of fresh ramen with egg and tempura vegetables Tokyo street food, food art",
      "Senso-ji temple red lantern with cherry blossoms Tokyo, traditional watercolor"
    ]
  },
  taipei: {
    name: "Taipei",
    prompts: [
      "Taipei 101 skyscraper illuminated at sunset with night sky, modern watercolor",
      "Taiwan night market crowded with street food stalls and red lanterns, vibrant",
      "Chiang Kai-shek Memorial guards in ceremony with traditional architecture, cultural watercolor"
    ]
  },
  miami: {
    name: "Miami",
    prompts: [
      "Art Deco buildings with pink and turquoise colors in Miami Beach, architectural",
      "Miami South Beach with colorful lifeguard stand and turquoise ocean, tropical watercolor",
      "Miami sunset with palm trees silhouette and neon city lights, vibrant watercolor"
    ]
  },
  newyork: {
    name: "New York",
    prompts: [
      "Times Square covered with bright digital billboards and crowds at night, watercolor",
      "Classic New York deli pastrami sandwich and street hot dog vendor, food art",
      "Brooklyn Bridge at golden sunset with Manhattan skyline reflected, iconic watercolor"
    ]
  },
  vancouver: {
    name: "Vancouver",
    prompts: [
      "Vancouver city skyline with North Shore mountains and ocean in background, landscape watercolor",
      "Fresh grilled Pacific salmon with lemon on white plate, food illustration",
      "Stanley Park totem poles with redwood forest and city view, nature watercolor"
    ]
  },
  dubrovnik: {
    name: "Dubrovnik",
    prompts: [
      "Dubrovnik old town medieval walls with orange roofs and Adriatic sea, watercolor",
      "Fresh grilled Croatian octopus with olive oil and wine, Mediterranean food art",
      "Dubrovnik sunset over Adriatic Sea with city walls glowing golden, watercolor"
    ]
  },
  istanbul: {
    name: "Istanbul",
    prompts: [
      "Blue Mosque with turquoise domes and Hagia Sophia Istanbul across water, watercolor",
      "Turkish coffee in ornate cup with baklava pastry, traditional food art",
      "Bosphorus strait with ferry boats and sunset over Golden Horn, watercolor"
    ]
  },
  bergen: {
    name: "Bergen",
    prompts: [
      "Bryggen colorful wooden buildings reflected in harbor Bergen Norway, historic watercolor",
      "Bergen fish market with fresh salmon and seafood stalls, food illustration",
      "Sognefjord with dramatic waterfalls and snow-capped mountains, landscape watercolor"
    ]
  },
  havana: {
    name: "Havana",
    prompts: [
      "Colorful vintage 1950s American cars parked in Havana street, nostalgic watercolor",
      "Cuban premium cigars and aged rum bottle on wooden table, cultural art",
      "Havana Malecon sunset over Caribbean Sea with colonial buildings, watercolor"
    ]
  },
  seoul: {
    name: "Seoul",
    prompts: [
      "N Seoul Tower glowing at night overlooking Han River and cityscape, modern watercolor",
      "Korean BBQ grilling meat on table with banchan side dishes, vibrant food art",
      "Gyeongbokgung Palace traditional architecture with crimson gates and gardens, cultural watercolor"
    ]
  },
  luangprabang: {
    name: "Luang Prabang",
    prompts: [
      "Golden Luang Prabang temple with saffron-robed monks in courtyard, spiritual watercolor",
      "Mekong river at golden sunset with traditional long-tail wooden boats, serene watercolor",
      "Luang Prabang morning alms with monks receiving food from locals, cultural watercolor"
    ]
  },
  nice: {
    name: "Nice",
    prompts: [
      "Nice Promenade des Anglais palm-lined waterfront with Mediterranean sea, coastal watercolor",
      "French Riviera Cote d'Azur beach with colorful umbrellas and sunbathers, tropical watercolor",
      "Provençal market stall with fresh vegetables and lavender flowers, food illustration"
    ]
  },
  vienna: {
    name: "Vienna",
    prompts: [
      "St Stephen's Cathedral with soaring spires and Vienna buildings lit at night, architectural watercolor",
      "Vienna coffee house Melange cup with sachertorte cake and elegant decor, cultural watercolor",
      "Schönbrunn Palace baroque gardens with fountains and classical architecture, watercolor"
    ]
  },
  salzburg: {
    name: "Salzburg",
    prompts: [
      "Hohensalzburg fortress on hilltop overlooking Salzburg with Alps in distance, landscape watercolor",
      "Austrian apple strudel with coffee on cafe table, traditional food art",
      "Salzburg Old Town with Salzach river and Mozart's birthplace on street, historic watercolor"
    ]
  }
};

// 生成图片的提示词总数
const totalImages = Object.keys(cities).length * 3;
console.log(`Total images to generate: ${totalImages}`);
console.log('Each city has 3 image prompts ready for generation');

// 导出供HTML使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cities;
}
