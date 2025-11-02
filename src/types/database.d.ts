declare namespace DATABASE {
  interface Zhouyi {
    id: string
    bagua: {[key: string]: string}
    baguaziran: {[key: string]: string}
    yijing: Yijing[]
    tiangan: Tiangan
    dizhi: Dizhi
    wuxing: Wuxing
    yinyuan: Yinyuan
  }

  interface Yijing {
    '卦序': number;
    '卦名': string;
    '大象': string;
    '类象': string;
    '卦辞': string;
    '卦象': number[];
    '爻象': string[];
    '爻辞': string[];
    '八宫': string;
    '宫序': number;
    '归游': string;
    '五行': string;
    '纳甲': string[];
    '世应': Yijing_Shiying;
  }

  interface Yijing_Shiying {
    '6'?: string;
    '5'?: string;
    '4'?: string;
    '3'?: string;
    '2'?: string;
    '1'?: string;
  }

  interface Tiangan {
    '甲': Tiangan_Item
    '乙': Tiangan_Item
    '丙': Tiangan_Item
    '丁': Tiangan_Item
    '戊': Tiangan_Item
    '己': Tiangan_Item
    '庚': Tiangan_Item
    '辛': Tiangan_Item
    '壬': Tiangan_Item
    '癸': Tiangan_Item
  }

  interface Tiangan_Item {
    '六神': string[]
    '禄神': string
    '贵人': string
    '羊刃':string
    '文昌': string
  }

  interface Dizhi {
    '子': Dizhi_Item
    '丑': Dizhi_Item
    '寅': Dizhi_Item
    '卯': Dizhi_Item
    '辰': Dizhi_Item
    '巳': Dizhi_Item
    '午': Dizhi_Item
    '未': Dizhi_Item
    '申': Dizhi_Item
    '酉': Dizhi_Item
    '戌': Dizhi_Item
    '亥': Dizhi_Item
  }

  interface Dizhi_Item {
    '五行': string
    '六冲': string
    '六合': string
    '三合': string
    '三刑': string
    '驿马': string
    '桃花': string
    '将星': string
    '劫煞': string
    '华盖': string
    '谋星': string
    '灾煞': string
  }

  interface Wuxing {
    '金': Wuxing_Item
    '木': Wuxing_Item
    '水': Wuxing_Item
    '火': Wuxing_Item
    '土': Wuxing_Item
    [key: string]: Wuxing_Item
  }

  interface Wuxing_Item {
    '金': string
    '木': string
    '水': string
    '火': string
    '土': string
    '生': string
    '旺': string
    '墓': string
    '绝': string
    '元神': string
    '忌神': string
    [key: string]: string
  }
  interface Guali {
    'id': string;
    '占问': string;
    '占类': string;
    '卦主': string;
    '年建'?: string;
    '月建': string;
    '日建': string;
    '时建'?: string;
    '旬空': string;
    '卦象': string;
    '用神': string;
    '吉凶': string;
    '应期': string;
    '细节': string;
    '启示': string;
    '收藏'?: string;
  }

  interface Yinyuan {
    '金': Yinyuan_Item;
    '木': Yinyuan_Item;
    '水': Yinyuan_Item;
    '火': Yinyuan_Item;
    '土': Yinyuan_Item;
    [key: string]: Yinyuan_Item;
  }

  interface Yinyuan_Item {
    '子': string;
    '丑': string;
    '寅': string;
    '卯': string;
    '辰': string;
    '巳': string;
    '午': string;
    '未': string;
    '申': string;
    '酉': string;
    '戌': string;
    '亥': string;
    [key: string]: string
  }
  interface Guali_EN {
    [key: string]: string;
  }

  type Tiangan_Key = keyof Tiangan
  type Dizhi_Key = keyof Dizhi
  type Wuxing_Key = keyof Wuxing
  type Yijing_Shiying_Key = keyof Yijing_Shiying
  type Guali_Key = keyof Guali
}
