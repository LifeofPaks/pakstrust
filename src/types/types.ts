export type CurrencyToolType = {
    id: number,
    title: string,
    desc: string,
    action: string,
    icon: string,
}


export type ExchangeDataType = {
    id:  number,
    flag:  string,
    title:  string,
    amount:  string,
    change:  string,
    chart:  string,
    send:  string,
    loss:  boolean,
}

export type BenefitsDataType ={
    id: number,
    title: string,
    image: string,
    animation?: string,
    delay?: string
    duration?: string
}



export type CurrecnyProfileDataType = {
    id:  number,
    flag:  string,
    title:  string,
}

export type reviewDataType ={
    id: number,
    avatar: string,
    name: string,
    office: string,
    desc: string,
  }

  export type BlogDataType = {
    id: number,
    title: string
    image: string,
    type: string
    date: string
    link : string
    animation: string
    delay: string
  }

  export type SupportDataType = {
    id: number,
    title: string,
    desc: string,
    img: string,
  }

