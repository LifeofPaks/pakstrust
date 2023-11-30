import {
  BenefitsDataType,
  BlogDataType,
  CurrecnyProfileDataType,
  CurrencyToolType,
  ExchangeDataType,
  SupportDataType,
  reviewDataType,
} from "@/types/types";

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
    title: " Global Coverage",
    image: "/globe.png",
    animation: 'slide-up',
    delay :'100',
    duration:"1000"
  },

  {
    id: 2,
    title: "Easy Transfer Method",
    image: "/moneybag.png",
    animation: 'slide-up',
    delay :'110',
    duration:"1000"
  },

  {
    id: 3,
    title: "Global 24 / 7 Support",
    image: "/alert.png",
    animation: 'slide-up',
    delay :'120',
    duration:"1000"
  },

  {
    id: 4,
    title: "Lowest Fee",
    image: "/circulate.png",
    animation: 'slide-up',
    delay :'130',
    duration:"1000"
  },

  {
    id: 5,
    title: "Instant Processing",
    image: "/process.png",
    animation: 'slide-up',
    delay :'140',
    duration:"1000"
  },

  {
    id: 6,
    title: "Bank Level Security",
    image: "/protect.png",
    animation: 'slide-up',
    delay :'150',
    duration:"1000"
  },
];

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

export const reviewData: reviewDataType[] = [
  {
    id: 1,
    avatar: "/aw3.jpeg",
    name: "Alex Cruise",
    office: "CEO, IBAC",
    desc: "I opened a savings and checking account at Rivero Trust Bank in Oregon, The Teller who helped me was a pleasure to work with, she made my day a pleasant day. Thank you for the terrific customer service.",
  },

  {
    id: 2,
    avatar: "/avm1.jpeg",
    name: "Tom Haris",
    office: "Engineer, Olleo",
    desc: " Rivero Trust Bank has an awesome team and a dedicated staff. I am very impressed by their vision, hard work, outstanding performance, and wonferful team-mates. Their reputation is well-earned.",
  },

  {
    id: 4,
    avatar: "/aw2.jpeg",
    name: "Claire Santos",
    office: "Director, BAT",
    desc: "Have been using Rivero Trust Bank  sense I was 16 years old. Wonderful staff and fast technology with them. If I had a problem, they fix it right away. I’m loving (BN) and I plan on sticking with them for life. Good Job guys.👍🏼 ",
  },

  {
    id: 5,
    avatar: "/avm2.jpeg",
    name: "Matt Donovan",
    office: "MD, Itec",
    desc: "The sweetest, most accommodating, professional, proficient bank in these United States. I have never encountered a bank that totally helps as well as understands their customers. The manager at Rivero Trust Bank is ABSOLUTELY the best ever.",
  },

  {
    id: 6,
    avatar: "/avm3.jpeg",
    name: "Harry Jackson",
    office: "Enterprenuer",
    desc: ". It’s a rare thing to discover a bank that genuinely cares about the people it serves and Rivero Trust Bank  is that kind of bank. They’ve always shown me kindness, respect, and a friendly smile. I can’t recommend them enough for all your banking needs – you won’t be disappointed!",
  },
];

export const blogData: BlogDataType[] = [
  {
    id: 1,
    title : '5 Things You Need To Know Before Starting Business',
    image: '/bl1.jpeg',
    type: 'corporate',
    date: 'Oct 22, 2023',
    link: 'https://manychat.com/blog/how-to-start-a-successful-business/?utm_source=google&utm_medium=search&utm_campaign=dynamic-search&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn8FapjHK96m-eSDps8Fg-v_CPEv5V30YAmUZ3oZI3MPlFxhDXlvfbBoCwK8QAvD_BwE',
    animation: 'slide-up',
    delay :'100',
  },

  {
    id: 2,
    title : 'Effect Of Inflation On Our Daily Expenditure',
    image: '/bl2.jpeg',
    type: 'Consumer',
    date: 'Oct 15, 2023',
    link: 'https://www.investopedia.com/articles/insights/122016/9-common-effects-inflation.asp',
    animation: 'slide-up',
    delay :'200',
  },
  {
    id: 3,
    title : '7 Tips To Get Best Exchange Rate In Currency',
    image: '/bl3.jpeg',
    type: 'Finance',
    date: 'Sept 04, 2023',
    link: 'https://grey.co/blog/best-currency-exchange-rates',
    animation: 'slide-up',
    delay :'300',
  },

]

export const applistData: BenefitsDataType[] = [
  {
    id: 1,
    title: " Apple ios",
    image: "/appleL.png",
  },

  {
    id: 2,
    title: "Google Android",
    image: "/androidL.png",
  },

  {
    id: 3,
    title: "Alexa",
    image: "/alexaL.png",
  },

  {
    id: 4,
    title: "Slack",
    image: "/slackL.png",
  },

  {
    id: 5,
    title: "Google Assistant",
    image: "/gaL.png",
  },

  {
    id: 6,
    title: "Facebook",
    image: "/fbL.png",
  },
];

export const supportData: SupportDataType[] = [

  {
    id: 2,
    title: 'Our Location',
    desc: '301 East Water Street, Charlottesville, VA 22904 Virginia',
    img: '/locationc.png',
  },

  {
    id: 2,
    title: 'Email us',
    desc: 'support@riverotrust.com',
    img: '/emailc.png',
  },


  {
    id: 3,
    title: 'Phone',
    desc: '+123456789',
    img: '/phonec.png',
  },


]