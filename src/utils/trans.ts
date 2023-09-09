export function cn2en(guali: DATABASE.Guali_EN) {
  return Object.keys(guali).reduce((a: DATABASE.Guali_EN, c, i) => {
    a[10 + i] = guali[c]
    return a
  }, {})
}
export function en2cn(gualiList: DATABASE.Guali_EN[]) {
  const cnKeys = ['占问', '占类', '卦主', '卦象', '年建', '月建', '日辰', '时建', '旬空', '用神', '吉凶', '应期', '细节', '启示']

  return gualiList.map((gualiEn) => {
    return Object.keys(gualiEn).reduce((a: DATABASE.Guali_EN, key) => {
      if (Number(key) >= 10)
        a[cnKeys[Number(key) - 10]] = gualiEn[key]
      return a
    }, {})
  }) as any as DATABASE.Guali[]
}
