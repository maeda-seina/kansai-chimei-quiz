#!/usr/bin/env node

'use strict'

const data = require('./data')
const { Quiz } = require('enquirer')
// 0~10の間で得たい場合は、11を指定
const randomNumber = Math.floor(Math.random() * 10)
const readline = require('readline')

class SetQuiz {
  constructor (point) {
    this.point = point
  }

  explain () {
    console.log('関西の難読地名クイズを行います。\n始めるには何かキーを入力してください。')
  }

  wait () {
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)
    process.stdin.resume()
  }

  arrayShuffle (array) {
    for (let i = (array.length - 1); i > 0; i--) {
      const randomNumber = Math.floor(Math.random() * (i + 1))
      const temporaryNumber = array[i]
      array[i] = array[randomNumber]
      array[randomNumber] = temporaryNumber
    }
    return array
  }

  async select (question) {
    this.point = 0
    const prompt = new Quiz(question)
    await prompt.run().then(answer => {
      if (answer.correct) {
        console.log('正解!')
        this.point += 20
      } else {
        console.log(`残念、不正解。 答えは... 「${answer.correctAnswer}」`)
      }
    })
  }

  async start () {
    this.explain()
    this.wait()
    let point = 0
    process.stdin.once('data', async () => {
      for (const question of this.arrayShuffle(data.questions[randomNumber])) {
        await this.select(question)
        point += this.point
      }
      if (point >= 80) {
        console.log(`おめでとうございます、合格です！！点数は${point}点でした。\nお疲れ様でした。`)
      } else {
        console.log(`不合格です。点数は${point}点でした。復習してもう一度挑んでください。\nお疲れ様でした。`)
      }
    })
  }
}
const quiz = new SetQuiz()
quiz.start()
