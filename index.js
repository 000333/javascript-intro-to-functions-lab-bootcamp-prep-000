function shout(string) {
  return string.toUpperCase()
}

shout('gross')

function whisper(string) {
  return string.toLowerCase()
}

whisper('EEEYYYYYYY')

function logShout(spy) {
  if (spy === 'hello doggy')
    console.log(spy.toUpperCase())
}

function logWhisper(spy) {
  if (spy === 'HELLO KITTY')
    console.log(spy.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string)
    return "I can\'t hear you!"
  if (string.toUpperCase() === string)
    return "YES INDEED!"
  if (string === 'I love you, Grandma.')
    return "I love you, too."
}

sayHiToGrandma('I love you, Grandma.')