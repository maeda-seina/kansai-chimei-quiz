#!/usr/bin/env node

'use strict'

const data = require('./data')
const { Quiz } = require('enquirer')
// 0~10の間で得たい場合は、11を指定
const randomNumber = Math.floor(Math.random() * 10)
const readline = require('readline')

class SetQuiz {
  constructor (point) {
    this.point_ = point
  }

  explain () {
    console.log('関西の難読地名クイズを行います。\n始めるには何かクリックしてください。')
  }

  wait () {
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)
    process.stdin.resume()
  }

  async select (question) {
    this.point_ = 0
    const prompt = new Quiz(question)
    await prompt.run().then(answer => {
      if (answer.correct) {
        console.log('正解!')
        this.point_ += 20
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
      for (const question of data.questions[randomNumber]) {
        await this.select(question)
        point += this.point_
      }
      if (point >= 80) {
        console.log(`おめでとうございます、合格です！！点数は${point}点でした。\nお疲れ様でした。`)
      } else {
        console.log(`不合格です。復習してもう一度挑んでください。点数は${point}点でした\nお疲れ様でした。`)
      }
    })
  }
}
const quiz = new SetQuiz()
quiz.start()
