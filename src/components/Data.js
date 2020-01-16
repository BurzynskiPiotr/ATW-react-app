import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataConsumer = DataContext.Consumer;
export const DataProvider = props => {
  const days = [
    {
      day: 1,
      country: "Portugal",
      city: "Lisbona",
      story:
        " There is no actual data about when the first peoples started to settle in the city but archaeological works done at Castelo São Jorge revealed the existence of Phoenicians in the city 1200 BC. Later, the Moors lived in the city and established a Caliphate. Thanks to this type of data and several studies, it was discovered that Lisbon is the oldest city of Western Europe. It existed long before Paris, London and even Rome."
    },
    {
      day: 2,
      country: "Germany",
      city: "Berlin",
      story:
        "Berlin has more bridges than Venice – around 1,700 of them. It is also said that Berlin has more waterways than Amsterdam, Stockholm and Venice COMBINED. The most famous and instagrammed bridge is the Oberbaumbrücke between Kreuzberg and Friedrichshain. Berlin is home to 3 world class and active Opera Houses, which can accommodate over 4,400 opera attendees. No other city in the world comes close to that. On top of that, Berlin has over 150 theaters and halls for every type of event."
    },
    {
      day: 3,
      country: "Russia",
      city: "Moscow",
      story:
        "Moscow is the capital and most heavily populated city in Russia, as well as being the largest city on the European continent. It is an iconic and global city and is the key political, economic, cultural and scientific centre of not only Russia but of Eastern Europe as well. It is a city renowned for the Red Square, the Kremlin and St. Basil’s cathedral and furthermore, should be on your travel bucket list."
    },
    {
      day: 4,
      country: "Japan",
      city: "Tokyo",
      story:
        "Tokyo is often referred to as a city, but is officially known and governed as a “metropolitan prefecture,” which is different from a city and combines elements of a city and a prefecture. The Tokyo metropolitan government administers the 23 Special Wards of Tokyo. These Special Wards contain the districts that have become world famous for their different characteristics. To make things even more confusing, Japanese people will refer to each district as a city. Good luck finding your way around the city…I mean district…I mean ward?"
    },
    {
      day: 5,
      country: "Australia",
      city: "Sydney",
      story:
        " It is the 12th most expensive city with property prices averaging USD8,717 per square metre. English, Arabic, Cantonese, Mandarin, Greek and Vietnamese are the main languages spoken in Sydney.The Sydney region has been inhabited by indigenous Australians for at least 30,000 years based on radio carbon dating.Operating since 1875, the Sydney Ferries carries over 14 million passengers each year in and around Sydney."
    },
    {
      day: 6,
      country: "Brasil",
      city: "Rio de Janeiro",
      story:
        "Rio was capital of Brazil from 1763 until 1960, when that role was transferred to Brasilia. But from 1808 to 1822, Rio also served as the center for the exiled royal court of Portugal, then fleeing Napoleon’s invasion. Prince Regent Dom João VI arrived with the rest of the royal family in 1808—the first time a European monarch set foot in the Americas—and began transforming the city, establishing a medical school, national museum, national library and botanical gardens. In December 1815, Dom João made Rio the official capital of the Portuguese empire, a role it served until Brazil declared independence from Portugal in September 1822."
    },
    {
      day: 7,
      country: "Canada",
      city: "Vancouver",
      story:
        "The city is named after British Naval Captain George Vancouver who was the first European to venture on Canadian's Pacific Coast in 1792.  Vancouver is the warmest city in Canada with only 11 days of snow per year. The winters are kept mild by being close to the Pacific Ocean. For those who love skiing, Vancouver should be your next holiday destination. It boasts 3 mountains where you can ski. They include; Grouse Mountain, Mount Seymour, and Cypress Mountain."
    }
  ];

  return (
    <div>
      <DataContext.Provider value={days}>{props.children}</DataContext.Provider>
    </div>
  );
};
