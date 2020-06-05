import { STORE_RECOMMENDATION } from "../actions/index";

const fakeRecommendations = [
  {
    user: "Pierre",
    text:
      "I love how Jon Krakauer shows all the different perspectives about the perilous year in Everest. Full of adventure but also heartbreak.",
    id: "gt7EQgH8-b4C",
    tags: ["Adventure"],
    image:
      "http://books.google.com/books/content?id=gt7EQgH8-b4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71FlAzmtWlR5GIQjhtDo2yUI-ddcJe0PJj3y0DejhpIU5S1HyH1tPzLdYYFZzHYBLwH8qauwqguJk0v_G5wMQHtC0T_MBQCg_H01qY4Nnank7DUB4OfJptD0t2nBgb91imQrjXd&source=gbs_api",
  },
  {
    user: "Pierre",
    text:
      "This book is a heartwrenching look at how racism was institutionalized at a real alternative school for boys in Florida.",
    id: "aDdyDwAAQBAJ",
    tags: ["Black Lives Matter", "Cruelty"],
    image:
      "http://books.google.com/books/content?id=aDdyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71vgZ-6NgyiqenGIPM2mE5GPjPGoiCFxKYod1Hs4G8UybJ5keEP_6L4firJEbSaGtVOQ4sO-JcN29A5IkIFFVl6GQAL8ok1P_2cGNO6k6ldoo7vgT-Q5SMTEaOMJMSYlXuCm5df&source=gbs_api",
  },
  {
    user: "Pierre",
    text:
      "Despite not normally being a fan of fantasy, I loved the friendship between Harry, Ron, and Hermione.",
    id: "5iTebBW-w7QC",
    tags: ["Friendship"],
    image:
      "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    user: "Pierre",
    text:
      "George Saunders is a master of experimentation. All these stories differ widly, but every character faces decisions that affect their future in major ways.",
    id: "T8HCsVVqcHcC",
    tags: ["Decisions"],
    image:
      "http://books.google.com/books/content?id=T8HCsVVqcHcC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73IXWwXqJd1WCiML542yhFQ5I38fiL_soSG3HL0xxTK9dbUag0GtRocW5iWoZ8LfynN2xZ78ppgbbx1I5monszJ2MLdeRhAJAPaaK6zPscWnLWe9Ka9iZGsg4MCWMUsNQhc4GNo&source=gbs_api",
  },
  {
    user: "Pierre",
    text:
      "The friendships in this book are so true to life that I couldn't put it down..",
    id: "NF5BDwAAQBAJ",
    tags: ["Friendship", "Isolation"],
    image:
      "http://books.google.com/books/content?id=NF5BDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE714OWevtf_wEwoUj0b4ck4oCwO8Ey0G4uyRYpBovuLEQ_ZRXh4LVgiqu8QJFryzOFIdKzYfeyZ51pW0rgSCl9qsIa6hDsJVu10Zut2-L5a9Fb2d7a5KA0x2H-_8U7iKlmiuI0za&source=gbs_api",
  },
  {
    user: "Pierre",
    text: "I've never thought about the Vietnam War the same way",
    id: "dYYVBgAAQBAJ",
    tags: ["Cruelty"],
    image:
      "http://books.google.com/books/content?id=dYYVBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73FqJf8oB13BtXIe9Lrn_5fO383qoBRKtY56NljTGXqRF53mBNyzpLrKSBuyq410prNbiyrFg1qfK7QczY0apInvp9BLQccbOxt_xtVG3Y_Q0QnL_F9vluHOIQsT1vWNatvzM2x&source=gbs_api",
  },
  {
    user: "Pierre",
    text: "This book has amazing ways to connect with people.",
    id: "K1fRBAAAQBAJ",
    tags: ["Empathy", "The Bonds of Family", "Love"],
    image:
      "http://books.google.com/books/content?id=K1fRBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70mmeoB0VcluBypUqqk7vZ_jRdBILgBUjn_ezzh2EGg3kquhIKlQ_M3owyru8h2PojrxfIvWoWkO6KfcQLrLV6Umt6kKSfOKaNZ9B36os8h0_9BN1uNIy2WDY3F3KJQbIJ1JeLI&source=gbs_api",
  },
  {
    user: "Pierre",
    text: "I attribute so much of my success to this book!.",
    id: "4QTzCAAAQBAJ",
    tags: ["Hope"],
    image:
      "http://books.google.com/books/content?id=4QTzCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72SLZwmjWqN3X_I3uEWgRFe3u8b2uUEaciR9AZE0wvSu2oxX5xkxteS7xJ1fgDoqIV6WRfENUfiz6-E0Lr_78hKZ2QvqLXJAdperld3vs9A3nMNaX_c-nHjwBwPtrVzVh8IX4eg&source=gbs_api",
  },
];

export const tagsReducer = () => {
  return [
    "Adventure",
    "Belief",
    "Forgiveness",
    "Decisions",
    "Death & Dying",
    "Love",
    "Acceptance",
    "Courage",
    "Change",
    "Empathy",
    "Overcoming Adversity",
    "Pressure",
    "Friendship",
    "Sacrifice",
    "The Bonds of Family",
    "Suffering",
    "Conflict",
    "Abandonment",
    "Alienation",
    "Ambition",
    "Coming of Age",
    "Freedom",
    "Gender",
    "Justice",
    "Isolation",
    "Cruelty",
    "Fate",
    "Hope",
    "Guilt",
    "Black Lives Matter",
    "LGBTQ Pride",
  ];
};

export const recommendations = (state = fakeRecommendations, action) => {
  switch (action.type) {
    case STORE_RECOMMENDATION:
      return [action.payload, ...state];
    default:
      return state;
  }
};
