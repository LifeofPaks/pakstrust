import { BenefitsDataType, CurrecnyProfileDataType, CurrencyToolType, ExchangeDataType } from "@/types/types";

export const currencyToolsData: CurrencyToolType[] = [
  {
    id: 1,
    title: "Money Transfer",
    desc: "With our digital platform, you may send money to relatives and friends all over the world",
    action: "send money",
    icon: "/mt.png",
  },

  {
    id: 2,
    title: "Currency Charts",
    desc: "You can always watch the market's movement and make trading decisions with our currency charts",
    action: "view chart",
    icon: "/chart.png",
  },

  {
    id: 3,
    title: "Rate Alerts",
    desc: " To enable our clients to convert, we provide the finest currency rate in the market",
    action: "create alert",
    icon: "/alert.png",
  },

  {
    id: 4,
    title: "Create account",
    desc: "create a free digital bank account with ud today to send money all around the world",
    action: "get started",
    icon: "/user.png",
  },
];

export const exchangeData: ExchangeDataType[] = [
  {
    id: 1,
    flag: "/us.png",
    title: "Us Dollar",
    amount: "120.54",
    change: "+0.50%",
    chart: "/g1.svg",
    send: "Send",
    loss: false,
  },

  {
    id: 2,
    flag: "/japan.png",
    title: "Japanese Yen",
    amount: "107.54",
    change: "+0.62 %",
    chart: "/g2.svg",
    send: "Send",
    loss: false,
  },

  {
    id: 3,
    flag: "/britain.png",
    title: "British Pound",
    amount: "230.88.54",
    change: "-0.12%",
    chart: "/r1.svg",
    send: "Send",
    loss: true,
  },

  {
    id: 4,
    flag: "/nz.png",
    title: "Newzland Dollar",
    amount: "177.09.54",
    change: "-0.27 %",
    chart: "/r2.svg",
    send: "Send",
    loss: true,
  },

  {
    id: 5,
    flag: "/canada.png",
    title: "Canadian Dollar",
    amount: "227.84",
    change: "-0.56%",
    chart: "/r3.svg",
    send: "Send",
    loss: true,
  },

  {
    id: 6,
    flag: "/france.png",
    title: "Swiss Franc",
    amount: "182.62",
    change: "+0.49 %",
    chart: "/g3.svg",
    send: "Send",
    loss: false,
  },
];

export const benefitsData: BenefitsDataType[] = [
  {
    id: 1,
    title : ' Global Coverage',
    image: '/globe.png'
  },

  {
    id: 2,
    title : 'Easy Transfer Method',
    image: '/moneybag.png'
  },

  {
    id: 3,
    title : 'Global 24 / 7 Support',
    image: '/alert.png'
  },

  {
    id: 4,
    title : 'Lowest Fee',
    image: '/circulate.png'
  },

  {
    id: 5,
    title : 'Instant Processing',
    image: '/process.png'
  },

  {
    id: 6,
    title : 'Bank Level Security',
    image: '/protect.png'
  },
]


export const currecnyProfileData: CurrecnyProfileDataType[] = [
  {
    id: 1,
    flag: "/us.png",
    title: "USD - US Dollar",
  },

  {
    id: 2,
    flag: "/japan.png",
    title: "JPY - Japaneese Yen",
  },

  {
    id: 3,
    flag: "/britain.png",
    title: "GBP - British Pound",
  },

  {
    id: 4,
    flag: "/nz.png",
    title: "NZD - NZ Dollar",
  },

  {
    id: 5,
    flag: "/canada.png",
    title: "CAD - Canadian Dollar",
  },

  {
    id: 6,
    flag: "/france.png",
    title: "CHF - Swiss Franc",
  },

  {
    id: 7,
    flag: "/china.png",
    title: "CNY - Chinese Yuan",
  },

  {
    id: 8,
    flag: "/korea.png",
    title: "KRW - South Korean won",
  },

  {
    id: 9,
    flag: "/euro.png",
    title: "EUR - Euro",
  },
];
