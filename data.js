const questions = [
  // 一問目
  [
    {
      name: 'name',
      message: '「枚方」の読み方を教えて',
      choices: ['まいかた', 'まかた', 'まいほう', 'ひらかた'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「放出」の読み方を教えて',
      choices: ['はなた', 'はなてん', 'ほうしゅつ', 'ほうで'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「住道」の読み方を教えて',
      choices: ['じゅうどう', 'すみみち', 'すみのみち', 'すみのどう'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「私市」の読み方を教えて',
      choices: ['きさいち', 'わたくし', 'きさし', 'わいち'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「喜連瓜破」の読み方を教えて',
      choices: ['きれんうりは', 'きれうりわり', 'きれんうりわり', 'きれうりは'],
      correctChoice: 1
    }
  ],
  // 二問目
  [
    {
      name: 'name',
      message: '「住道矢田」の読み方を教えて',
      choices: ['じゅうどうやた', 'すみみちやた', 'すんじやた', 'すみのどうやた'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「杭全」の読み方を教えて',
      choices: ['くまた', 'くいまた', 'くいぜん', 'くぜん'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「中百舌鳥」の読み方を教えて',
      choices: ['なかひゃくしたとり', 'ちゅうもぜんちょう', 'なかもず', 'ちゅうもず'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「喜連瓜破」の読み方を教えて',
      choices: ['きれんうりは', 'きれうりわり', 'きれんうりわり', 'きれうりは'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「十三」の読み方を教えて',
      choices: ['とみ', 'じゅうそう', 'とさん', 'しゅうそう'],
      correctChoice: 1
    }
  ],
  // 三問目
  [
    {
      name: 'name',
      message: '「野江内代」の読み方を教えて',
      choices: ['のえうちよ', 'のえないだい', 'やえうちだい', 'のえうちんだい'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「雲雀丘花屋敷」の読み方を教えて',
      choices: ['しょうじゃく', 'ひばりがおかはなやしき', 'ひゃくがしき', 'しょうじゃくはなやしき'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「柴島」の読み方を教えて',
      choices: ['しばじま', 'しばしま', 'くにじま', 'しばとう'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「河堀口」の読み方を教えて',
      choices: ['こぼれぐち', 'こうほりくち', 'かわほりくち', 'かほりくち'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「御幣島」の読み方を教えて',
      choices: ['おんへいしま', 'みてじま', 'おへいしま', 'みへいしま'],
      correctChoice: 1
    }
  ],
  // 四問目
  [
    {
      name: 'name',
      message: '「畝傍」の読み方を教えて',
      choices: ['うねかた', 'ねかた', 'ねび', 'うねび'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「帷子ノ辻」の読み方を教えて',
      choices: ['こしのつじ', 'かたびらのつじ', 'かしのつじ', 'ほしのつじ'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「膳所」の読み方を教えて',
      choices: ['ぜぜ', 'ぜんしょ', 'はまだ', 'じょじょ'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「京終」の読み方を教えて',
      choices: ['きょうばて', 'きょうし', 'けいし', 'けいしゅ'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「櫟本」の読み方を教えて',
      choices: ['ひつもと', 'ひもと', 'いちのもと', 'いちもと'],
      correctChoice: 2
    }
  ],
  // 五問目
  [
    {
      name: 'name',
      message: '「祝園」の読み方を教えて',
      choices: ['しゅくぞの', 'しゅくえん', 'ほうえん', 'ほうその'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「平城山」の読み方を教えて',
      choices: ['へじやま', 'ならやま', 'へいざん', 'ひらやま'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「夙川」の読み方を教えて',
      choices: ['しゅくがわ', 'とがわ', 'はがわ', 'はやかわ'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「売布神社」の読み方を教えて',
      choices: ['うりぬじんじゃ', 'ぬふじんじゃ', 'ばいふじんじゃ', 'うりぬのじんじゃ'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「朝熊」の読み方を教えて',
      choices: ['ちょうま', 'あさくま', 'ちょうの', 'あさま'],
      correctChoice: 3
    }
  ],
  // 六問目
  [
    {
      name: 'name',
      message: '「菖蒲池」の読み方を教えて',
      choices: ['しょうぶいけ', 'ちょうもいけ', 'あやめいけ', 'しょうらいけ'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「上牧」の読み方を教えて',
      choices: ['うえまき', 'かんまき', 'じょうぼく', 'かみまき'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「富野荘」の読み方を教えて',
      choices: ['とみのそう', 'ふのしょう', 'とんそう', 'とのしょう'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「清荒神」の読み方を教えて',
      choices: ['きよしこうじん', 'せいこうじん', 'きよあらがみ', 'しあらみ'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「前栽」の読み方を教えて',
      choices: ['さきだち', 'せんざい', 'まだち', 'ぜんさ'],
      correctChoice: 1
    }
  ],
  // 七問目
  [
    {
      name: 'name',
      message: '「耳成」の読み方を教えて',
      choices: ['みみなり', 'しな', 'じなり', 'みみなし'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「榛原」の読み方を教えて',
      choices: ['はいばら', 'はりはら', 'しんばら', 'はばら'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「平群」の読み方を教えて',
      choices: ['へいじょう', 'へいぐん', 'へぐり', 'へいぐ'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「前栽」の読み方を教えて',
      choices: ['さきだち', 'せんざい', 'まだち', 'ぜんさ'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「八戸ノ里」の読み方を教えて',
      choices: ['はちのへさと', 'やのさと', 'やとのさと', 'やえのさと'],
      correctChoice: 3
    }
  ],
  // 八問目
  [
    {
      name: 'name',
      message: '「西向日」の読み方を教えて',
      choices: ['さいこうび', 'にしなた', 'にしむこう', 'にしこうび'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「門戸厄神」の読み方を教えて',
      choices: ['もんどやくじん', 'かどやくのかみ', 'とどやくしん', 'かどのやくじん'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「安曇川」の読み方を教えて',
      choices: ['あずみがわ', 'あどがわ', 'あんもがわ', 'あじかわ'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「醒井」の読み方を教えて',
      choices: ['さい', 'さめがい', 'せいい', 'せい'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「紫香楽宮跡」の読み方を教えて',
      choices: ['しからくみやあと', 'しこうらくみやあと', 'しみやあと', 'しがらきぐうし'],
      correctChoice: 3
    }
  ],
  // 九問目
  [
    {
      name: 'name',
      message: '「長谷野」の読み方を教えて',
      choices: ['ながたにの', 'ながやの', 'はせの', 'はの'],
      correctChoice: 0
    },
    {
      name: 'name',
      message: '「愛知川」の読み方を教えて',
      choices: ['えがわ', 'えちがわ', 'あがわ', 'あいちがわ'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「穴太」の読み方を教えて',
      choices: ['けった', 'あなふと', 'あのお', 'あふと'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「粟生」の読み方を教えて',
      choices: ['くりお', 'あわお', 'りっしょう', 'あお'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「相生」の読み方を教えて',
      choices: ['あいおい', 'そうせい', 'あいしょう', 'そうぶ'],
      correctChoice: 1
    }
  ],
  // 十問目
  [
    {
      name: 'name',
      message: '「網引」の読み方を教えて',
      choices: ['もい', 'あびき', 'あみひき', 'もういん'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「鵯越」の読み方を教えて',
      choices: ['こうのどりごえ', 'ひっきょ', 'こうえつ', 'ひよどりごえ'],
      correctChoice: 3
    },
    {
      name: 'name',
      message: '「畦野」の読み方を教えて',
      choices: ['あぜの', 'あけの', 'うねの', 'かやの'],
      correctChoice: 2
    },
    {
      name: 'name',
      message: '「大物」の読み方を教えて',
      choices: ['だいぶつ', 'だいもつ', 'おおのもの', 'だぶつ'],
      correctChoice: 1
    },
    {
      name: 'name',
      message: '「英賀保」の読み方を教えて',
      choices: ['えいがほ', 'あかぼ', 'えがほ', 'あがほ'],
      correctChoice: 3
    }
  ]
]

module.exports = {
  questions
}
