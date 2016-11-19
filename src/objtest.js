// clear terminal
process.stdout.write('\x1B[2J\x1B[0f')

const cat = {
  // convention used somewhat like OOP constructors
  init: function (sound) {
    this.sound = sound
    return this // returning this enables function chaining
  },

  makeSound: function () {
    console.log(this.sound)
  }
}

// rough example of how Object.create works
function objectCreate (proto) {
  const obj = {}
  Object.setPrototypeOf(obj, proto) // don't do this, terrible for performance!
  return obj
}

const waffles = Object.create(cat)
waffles.init('meow')
waffles.makeSound()

console.log('----')

waffles.init('arfff').makeSound()
