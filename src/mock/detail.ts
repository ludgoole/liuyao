export default {
  八卦: {
    乾: [
      {
        key: '类象',
        value: '阳 天 圆 金 寒 尊 贵 精 古 正 高大上 富 变 傲 首 头',
      },
      {
        key: '自然',
        value: '天',
      },
      {
        key: '属性',
        value: '刚',
      },
      {
        key: '五行',
        value: '金',
        ext: '阳',
      },
      {
        key: '颜色',
        value: '赤色',
      },
      {
        key: '天象',
        value: '晴 冰',
      },
      {
        key: '时辰',
        value: '戌时 亥时',
        ext: '19:00 - 23:00',
      },
      {
        key: '数目',
        value: '1',
      },
      {
        key: '方位',
        value: '西北',
      },
      {
        key: '场所',
        value: '圣地 宫殿 博物馆 教堂 寺院 体育馆 大学 办公室 五金店 机关政府 车站 广场 郊外 古迹',
      },
      {
        key: '静物',
        value: '玉器 珠宝 古董 文物 神物 帽子 钟表 首饰 木果 瓜 腊肉 飞机 火车 门',
      },
      {
        key: '动物',
        value: '马 龙 狮 虎 象 天鹅',
      },
      {
        key: '人物',
        value: '老人',
        ext: '超过64岁',
      },
      {
        key: '身体',
        value: '头 胸部 大肠 肺 左足',
      },
      {
        key: '疾病',
        value: '头部之疾 肺疾 肠疾 筋骨疾 腿疾',
      },
      {
        key: '性格',
        value: '积极向上 正直 威严 自尊 冷酷无情 轻视 任性 独裁',
      },
      {
        key: '职业',
        value: '统治者 总经理 厂长 专家 名人 圣人 官吏 富人 银行家',
      },
      {
        key: '感受',
        value: '强大的',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
    兑: [
      {
        key: '类象',
        value: '泽 云 雾 露 口舌 巫 决策 悦 笑 和 惠 柔 艳 缺 毁 穴 金 刚卤 妾 朋',
      },
      {
        key: '自然',
        value: '泽',
      },
      {
        key: '属性',
        value: '悦',
      },
      {
        key: '五行',
        value: '金',
        ext: '阴',
      },
      {
        key: '颜色',
        value: '白色',
      },
      {
        key: '天象',
        value: '小雨 潮湿 露水',
      },
      {
        key: '时辰',
        value: '酉时',
        ext: '17:00 - 19:00',
      },
      {
        key: '数目',
        value: '2',
      },
      {
        key: '方位',
        value: '西',
      },
      {
        key: '场所',
        value: '沼泽地 水井 湖泊 冰场 破旧房屋 门口 山洞 信访办 公园 音乐厅 歌舞厅 饭店',
      },
      {
        key: '静物',
        value: '刀剑玩具 开口瓶罐 破损物 修理品 垃圾箱 乐器 玻璃 食品 饮食用具 裂口坚果',
      },
      {
        key: '动物',
        value: '羊 豹 猴 兔',
      },
      {
        key: '人物',
        value: '少女',
        ext: '0-14岁',
      },
      {
        key: '身体',
        value: '舌 口 咽喉 牙齿 口角 气管 肛门',
      },
      {
        key: '疾病',
        value: '口舌牙之疾 咽喉气管疾病 外伤 贫血 破相',
      },
      {
        key: '性格',
        value: '温和 欢快 撒娇 可爱 好强 雄辩 伪善 狭小',
      },
      {
        key: '职业',
        value: '讲师 解说员 相声演员 歌唱家 音乐家 杂技演员 小丑 歌女 娼妓 情人 媒人 秘书 副手 服务员 垃圾工 失败者 破坏者 牙医',
      },
      {
        key: '感受',
        value: '喜悦的',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
    离: [
      {
        key: '类象',
        value: '火 热情 盛大 光明 干燥 电 日 丽 美丽 文 文明 文书 合同 房产 账目 票据 饰 装饰 饰品 目 中虚 大腹 甲胄 网 内柔 旋涡',
      },
      {
        key: '自然',
        value: '火',
      },
      {
        key: '属性',
        value: '丽',
      },
      {
        key: '五行',
        value: '火',
      },
      {
        key: '颜色',
        value: '红色',
      },
      {
        key: '天象',
        value: '干燥 炎热 闪电 彩虹',
      },
      {
        key: '时辰',
        value: '午时',
        ext: '11:00 -13:00',
      },
      {
        key: '数目',
        value: '3',
      },
      {
        key: '方位',
        value: '南',
      },
      {
        key: '场所',
        value: '圣地 教堂 学校 博物馆 图书馆 印刷厂 艺术馆 画展 电视台 电影院 证券交易所 银行 医院 厨房 电厂 冶炼厂 立交桥 派出所 法院',
      },
      {
        key: '静物',
        value: '化妆品 花瓶 花衣服 相机 电视 电话 字画 连环画 广告 奖状 合同 印章 信件 书报 杂志\n          火柴 打火机 煤气灶 火炉 烤箱 灯具 红路灯 霓虹灯 窗户 玻璃 干肉 微波炉 电车 兵戈',
      },
      {
        key: '动物',
        value: '雉 孔雀 凤凰 金鱼 虾 蟹 龟 萤火虫',
      },
      {
        key: '人物',
        value: '美女',
        ext: '14-28岁',
      },
      {
        key: '身体',
        value: '目 眼睛 心脏 血液 乳房 小肠',
      },
      {
        key: '疾病',
        value: '眼疾 心脏病 烫伤 发烧 炎症 高血压 乳腺疾病',
      },
      {
        key: '性格',
        value: '自信 聪明 文明 礼貌 虚荣 轻浮 撒谎 依附',
      },
      {
        key: '职业',
        value: '艺术家 画家 演员 明星 化妆师 记者 文人 学者 博士 中层干部 监察人员 纪检人员 侦查员 分析员 警卫 战士',
      },
      {
        key: '感受',
        value: '好看的',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
    震: [
      {
        key: '类象',
        value: '雷 动 疾 进 新 惧 闹 鼓 躁 大 扁木 竹 筐 藩 乐器 舟 足 飞 走 逐 盂 大笑 妻',
      },
      {
        key: '自然',
        value: '雷',
      },
      {
        key: '属性',
        value: '动',
      },
      {
        key: '五行',
        value: '木',
        ext: '阴',
      },
      {
        key: '颜色',
        value: '绿色',
      },
      {
        key: '天象',
        value: '地震 雷雨',
      },
      {
        key: '时辰',
        value: '卯时',
        ext: '5:00 - 7:00',
      },
      {
        key: '数目',
        value: '4',
      },
      {
        key: '方位',
        value: '东',
      },
      {
        key: '场所',
        value: '山林 花店 音乐厅 游乐场 公园 庭院 田园 菜地 菜场 邮电局 剧院 机场 车站 停车场 军队 军营 公安局',
      },
      {
        key: '静物',
        value: '树木 柴火 竹子 筐 鲜花 蔬菜 嫩芽 鞭炮 音响 鼓 电话 闹钟 火箭 大炮 汽车 大道 裙子 裤子 筋 蹄',
      },
      {
        key: '动物',
        value: '龙 蛇 鹰 鸟 蜂 蜈蚣',
      },
      {
        key: '人物',
        value: '中年',
        ext: '40-64岁',
      },
      {
        key: '身体',
        value: '足 腿部 肝脏 神经 左肋 右肩膀',
      },
      {
        key: '疾病',
        value: '足疾 肝病 精神病 狂躁病 多动症 咳嗽',
      },
      {
        key: '性格',
        value: '积极 活泼 主动 勇敢 霸道 急躁 无礼 粗糙',
      },
      {
        key: '职业',
        value: '运动员 驾驶员 邮递员 快递员 大忙人 捣蛋鬼 多动症 名人 军人 大将 指挥官 音乐家 舞蹈演员 足球爱好者 吹牛之人',
      },
      {
        key: '感受',
        value: '激动的 言笑',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
    巽: [
      {
        key: '类象',
        value: '风 进退 出入 轻 抚 疾 迷 虚幻 齐 顺 命 伏 婢女 长 高 草木 林 绳 腰带 丝 羽毛 利 富 商旅 号啕 股',
      },
      {
        key: '自然',
        value: '风',
      },
      {
        key: '属性',
        value: '入',
      },
      {
        key: '五行',
        value: '木',
        ext: '阳',
      },
      {
        key: '颜色',
        value: '蓝色',
      },
      {
        key: '天象',
        value: '刮风 多云',
      },
      {
        key: '时辰',
        value: '辰时 巳时',
        ext: '7:00 - 11:00',
      },
      {
        key: '数目',
        value: '5',
      },
      {
        key: '方位',
        value: '东南',
      },
      {
        key: '场所',
        value: '通风口 管道 长廊 索道 传送带 码头 港口 机场 商店 工厂 设计院 竹林 草原 邮局 寺庙',
      },
      {
        key: '静物',
        value: '风车 扇子 气球 羽毛 飞机 旗杆 帆船 救生圈 草药 木材 建材 床 桌子 绳子 管道 皮带 标枪 杨柳 索道 传送带 海带 邮件 账本 录像',
      },
      {
        key: '动物',
        value: '鸡 鸭 鹅 蝴蝶 蜻蜓 带鱼 猫 虎 斑马',
      },
      {
        key: '人物',
        value: '夫人',
        ext: '28-49岁',
      },
      {
        key: '身体',
        value: '股 头发 气管 肠道 血管 腰腿 左肩',
      },
      {
        key: '疾病',
        value: '伤风感冒 支气管炎 中风 抽筋 血管疾病 淋巴疾病 妇科病',
      },
      {
        key: '性格',
        value: '风流 轻佻 忧虑 烦躁 直爽 魄力 细心 谋略',
      },
      {
        key: '职业',
        value: '商人 教师 指挥官 设计师 作家 造谣者 技术员 营业员 僧尼 宗教家',
      },
      {
        key: '感受',
        value: '舒畅的 号啕',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
    坎: [
      {
        key: '类象',
        value: '水 雨 雪 霜 月 血 酒 污 浊 厕 淫 恶 暗 险 陷 律法 刑法 寇盗 败 核 耳 肾 腰 曲 弓 曳 轮 心 思想 忧虑 困',
      },
      {
        key: '自然',
        value: '水',
      },
      {
        key: '属性',
        value: '险',
      },
      {
        key: '五行',
        value: '水',
      },
      {
        key: '颜色',
        value: '黑色',
      },
      {
        key: '天象',
        value: '雨 雪 霜 阴天 寒冷 水灾',
      },
      {
        key: '时辰',
        value: '子时',
        ext: '23:00 - 1:00',
      },
      {
        key: '数目',
        value: '6',
      },
      {
        key: '方位',
        value: '北',
      },
      {
        key: '场所',
        value: '湖海 大川 河流 瀑布 温泉 洼地 冷饮店 酒吧 浴池 妓院 牢狱 消防队 鱼塘 水厂 海洋馆 酒厂 酒窖 车库 暗室 煤场 车站',
      },
      {
        key: '静物',
        value: '潜水艇 饮料 油盐 酒 酱 醋 汤 海味 带核之物 梅子 桃子 冷藏设备 冷饮 排水设备 潜艇 水车 轮子 弓箭 刑具 药品 计算器 录像带 光盘',
      },
      {
        key: '动物',
        value: '猪 鼠 鱼',
      },
      {
        key: '人物',
        value: '青年',
        ext: '16-40岁',
      },
      {
        key: '身体',
        value: '耳 背 腰 肾脏 膀胱 泌尿系统 免疫系统',
      },
      {
        key: '疾病',
        value: '耳痛 腰背疾病 泌尿系统疾病 肾寒 尿毒症 性病',
      },
      {
        key: '性格',
        value: '聪明 智慧 仁慈 义气 狡猾 奸诈 阴险 算计',
      },
      {
        key: '职业',
        value: '水厂工人 船工 酒鬼 诈骗 盗贼 黑社会 亡命之徒 安全人员 劳务人员 思想家 发明家 数学家',
      },
      {
        key: '感受',
        value: '危险的',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
    艮: [
      {
        key: '类象',
        value: '山 鼓 凸 孤 石 土 冥 门阙 城 墙 巷 瓦器 伞 止 阻 退 星 童仆 闲人 足 趾 鼻 腓 皮肤',
      },
      {
        key: '自然',
        value: '山',
      },
      {
        key: '属性',
        value: '止',
      },
      {
        key: '五行',
        value: '土',
        ext: '阳',
      },
      {
        key: '颜色',
        value: '棕色',
      },
      {
        key: '天象',
        value: '地震 雷雨',
      },
      {
        key: '时辰',
        value: '丑时 寅时',
        ext: '1:00 - 5:00',
      },
      {
        key: '数目',
        value: '7',
      },
      {
        key: '方位',
        value: '东北',
      },
      {
        key: '场所',
        value: '矿山 丘陵 堤坝 小路 坟场 高地 高楼 房屋 祠堂 围墙 帐篷 休息室 仓库 车站 派出所 宗庙 祠堂 银行',
      },
      {
        key: '静物',
        value: '岩石 土坑 假山 山坡 墙壁 土堆 石碑 坟墓 矿山 山路 公墓 监狱 仓库 停车场 门 门闩 门槛 台阶 凳子 床 桌子 座位 柜子 手套 列车',
      },
      {
        key: '动物',
        value: '狗 熊 狼',
      },
      {
        key: '人物',
        value: '中年',
        ext: '40-64岁',
      },
      {
        key: '身体',
        value: '手 鼻 脾胃 关节 右足 乳房',
      },
      {
        key: '疾病',
        value: '鼻炎 气血不通症 便秘 结石 消化不良 癌症',
      },
      {
        key: '性格',
        value: '冷静 独立 自律 憨厚 顽固 保守 孤僻 隐藏',
      },
      {
        key: '职业',
        value: '矿工 土建 警卫 守门员 法官 独裁者 官僚 继承人 闲人 粉丝 奴仆 犯人 僧尼',
      },
      {
        key: '感受',
        value: '害羞的',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
    坤: [
      {
        key: '类象',
        value: '地 厚 承载 滋养 包 藏 静 缓 迟钝 丑 贞节 操劳 卑 众 多 配 柔 方 帛 布 裳 土 田 邑 宫阙 城 壁 阴 寡妇 奴婢 肉 迷 囊 ',
      },
      {
        key: '自然',
        value: '地',
      },
      {
        key: '属性',
        value: '柔',
      },
      {
        key: '五行',
        value: '土',
        ext: '阴',
      },
      {
        key: '颜色',
        value: '黄色',
      },
      {
        key: '天象',
        value: '阴云 雾气 露水 潮湿',
      },
      {
        key: '时辰',
        value: '未时 申时',
        ext: '13:00 - 17:00',
      },
      {
        key: '数目',
        value: '8',
      },
      {
        key: '方位',
        value: '西南',
      },
      {
        key: '场所',
        value: '平原 牧场 农贸市场 粮仓 储藏室 地窖 场院 郊外 故乡 农村 田埂 田野 广场 平房 售楼部',
      },
      {
        key: '静物',
        value: '方物 柔物 纸张 文章 书 纸箱 布帛 丝绵 衣服 箱包 袋子 五谷 米面 日用品 瓦器 瓷器 石灰 水泥 砖沙 粉状物 糖 野味 火车',
      },
      {
        key: '动物',
        value: '牛 母马 猫 爬虫',
      },
      {
        key: '人物',
        value: '老妇',
        ext: '超过49',
      },
      {
        key: '身体',
        value: '腹 胃 肉 女性生殖器',
      },
      {
        key: '疾病',
        value: '肚子痛 劳累过度 慢性病 皮肤病 妇科病 湿疹',
      },
      {
        key: '性格',
        value: '勤劳 忍耐 正直 谦让 实诚 懦弱 迟钝 狭隘 阴险',
      },
      {
        key: '职业',
        value: '农民 泥瓦匠 村干部 助手 顾问 地产商 税务人员',
      },
      {
        key: '感受',
        value: '懦弱的',
      },
    ].reduce((a, c) => `${a + c.value}；`, ''),
  },
  爻位: {
    初爻: '子孙、足部、地基、水井、足部、地铁、乡村、丧门、职工、心事',
    二爻: '母亲、腿股、厨房、屋内、身体、轮船、县城、吊客、组长、伙计',
    三爻: '兄妹、腰肾、卧室、过厅、卧室、汽车、地级、哭声、部长、基业',
    四爻: '妻子、脾胃、客厅、院门、客厅、门户、火车、省级、福德、经理、店面',
    五爻: '父亲、心肺、楼梯、过道、楼梯、车路、高铁、首都、棺材、老板、老板',
    上爻: '祖父、头部、屋顶、围墙、屋顶、飞机、国外、黄泉、股东、财路',
    用神: '所问的事情',
    世爻: '自己 出生地 单位 城市 喜好',
    应爻: '他人 对手 情敌',
    间爻: '事件的过程、中间介入、阻碍、意外、事外',
    夹世: '主观取舍、左右决策、可能选择、矛盾心态',
    夹应: '事态的取舍、具体表现、左右趋势、矛盾',
  },
  地支: {
    子: '富贵、高贵、尖端、运滞、欠运气',
    丑: '厄难、危机、困难、静止、安静',
    寅: '权力、权贵、控制、团队、群体',
    卯: '破损、颠覆、改革、柔软、妥协',
    辰: '机巧、色情、睡眠、专研、专一',
    巳: '文采、文笔、才华、能力、短暂',
    午: '福报、福利、享福、好运、平民',
    未: '奔走、起伏、周折、过关、跨越',
    申: '孤独、独立、单独、无援、无权',
    酉: '强硬、刚强、坚硬、补漏、补救',
    戌: '广博、才艺、才能、多样化、失眠',
    亥: '先难后易、漫长、长寿、愚钝',
  },
  五行: {
    金: `
      代表皮毛与呼吸道系统；
      方位西、时令秋、主义、善收获；
      代表硬朗、粗扩、政策、权威、义气与服从；
      比喻行政、公检法、军事、财务、金融、金属类等行业；
    `,
    木: `
      代表筋爪与神经肝胆系统；
      方位东、时令春、主仁、善培育；
      代表逻辑、条理、细致、慈悲与奉献；
      比喻教育、培训、管理、书籍、服装、办公、木质类行业；
    `,
    水: `
      代表骨发与内分泌系统；
      方位北、时令冬、主智、善收藏；
      代表长期、藏匿、隐瞒、创意、智慧与忍耐；
      比喻水利、运输、物流、贸易、旅游、美容、水类行业；
    `,
    火: `
      代表血脉心脑系统；
      方位南、时令夏、主礼、善发扬；
      代表短期、热点、社交与潮流；
      比喻商业、传媒、服务、IT、供电、电信、网络、公关、营销、酒店行业；
    `,
    土: `
      代表肌腱与消化系统；
      方位居中、时令长夏、主信、善转化；
      代表时间地域、领域、信用与应变；
      比喻农业、历史、地理、建筑、土地、房地产、土特产行业；
    `,
  },
  六亲: {
    父母: {
      天: '雨',
      地: '房、建筑、工程、学校、商店、车库、仓库、坟墓',
      人: '父母、长辈、老师、老板、司机、劳务',
      事: '劳动、工作、学业、交通、调动、信息',
      物: '衣物、衣柜、雨具、行李、证件、合同、文书、书籍、奖状',
    },
    兄弟: {
      天: '风云',
      地: '门户、赌场、会议室、出租屋',
      人: '兄弟、同辈、合伙、对手',
      事: '投资、赌博、消费、争斗、打架、破费、损耗、受制',
      物: '手足、筹码',
    },
    子孙: {
      天: '日月、星斗、晴空',
      地: '道路、走廊、电玩城、商店、仓库、学校',
      人: '小孩、晚辈、学员、顾客、医生、公安、士兵、僧道',
      事: '喜事、解忧、娱乐',
      物: '医药、平安福、商品、设备、植物、家禽',
    },
    妻财: {
      天: '晴天',
      地: '粮食、厨房、餐厅、银行',
      人: '妻子、女友、情人、下属、保姆',
      事: '财运、金融、资本、生意、买卖、套现',
      物: '黄金、首饰、珠宝、食物、钱包、存折',
    },
    官鬼: {
      天: '雷电、风暴、大雾',
      地: '坟墓、凶宅、阴暗之地、办公室',
      人: '丈夫、男友、上司、官员、法官、盗贼、骗子、祖父',
      事: '官讼、工作、忧愁、虚假、是非、淫邪、疾病、冷门',
      物: '符咒、毒药、暗器',
    },
  },
  六神: {
    青龙: '文官、左、正直、乐观、喜庆、崭新、酒色',
    朱雀: '谏官、前、冲动、吵闹、繁华、通信、手机',
    勾陈: '史官、上、木讷、陈旧、田产、牢狱、牵连、勾引',
    螣蛇: '命官、下、虚伪、投机、怪异、惊恐、阴暗、曲折',
    白虎: '武官、右、粗鲁、强硬、凶灾、疾病、死丧、破旧',
    玄武: '贪官、后、奸诈、风流、暧昧、藏匿、偷盗、阴暗',
  },
  因缘: {
    长生: '渊远流长、长存、稳定、固有、不变、持久',
    沐浴: '伤风败俗、浪漫、潇洒、淫乱、动情、洗澡',
    冠带: '穿衣打扮、礼仪、仪式、应酬、社交、包装',
    临官: '事业有成、荣誉、出任、受聘、升职、出仕',
    帝旺: '意气风发、兴旺、鼎盛、极端、极限、高潮',
    衰: '衰退败落、下坡、拐点、转弱、难继、颓势',
    病: '遭受损失、疾病、缺陷、短板、弊端、不足',
    死: '无可挽回、灭亡、生硬、固执、强硬、僵化',
    墓: '收聚隐藏、迷茫、被困、兴趣、拘禁、约束',
    绝: '陷入绝境、绝决、失踪、绝望、绝迹、远离',
    胎: '牵扯产生、酝酿、蕴育、相关、怀胎、前期',
    养: '怀疑狐惑、扶持、停顿、休息、培养、维系',
  },
  神煞: {
    贵人: '个人、社交、人际',
    禄神: '财禄、待遇、饮食、生活、收益、回报、非专业',
    羊刃: '工作、单位、物件、器质、利器、项目、维护、专业性',
    文昌: '技能、能力、水平、聪明、策划、难度、技术性',
    驿马: '奔波、远近、流动性、动静',
    桃花: '女性、孩子、感情、装潢、广告、条文、门面、学历、荣耀',
    将星: '核心、重要性、程度、幅度、效率',
    劫煞: '难关、阻碍、祸患、劫数、问题、烦恼',
    华盖: '被动、无奈、聪明、迥异、怪僻、个性',
    谋星: '主动性的计划、谋划、策划、打算、预期',
    天医: '疾病、医药、医学、医生、保养',
    天喜: '喜事、喜庆、好事、商业、铺面、热闹、节假、旅游、玩乐',
    灾煞: '难关、阻碍、劫数、问题、麻烦',
  },
  入墓: {
    入墓: '约束、昏迷、住院、稀缺、堵塞、便秘',
    父墓: '衣柜、书架、学校、车库',
    兄墓: '赌场、会议室',
    财墓: '钱包、银行、饭盒、粮食局、血库、果园',
    孙墓: '幼儿园、游乐园、动物园、警察局、寺庙',
    鬼墓: '国务院、法院、会所、坟地',
  },
  空亡: {
    空亡: '没有、假、虚、空',
    父空: '赶不上车、没有雨、考试不通过',
    兄空: '独生子、孤独',
    财空: '没钱、没食物、饿肚子、离异',
    孙空: '不高兴、无药可治',
    鬼空: '安全、裁员',
  },
}
