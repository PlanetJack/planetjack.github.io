'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 150,
}) // 'an enthusiastic Coder'

.move(null, {to: 'END'})
.delete()
.type('열정적인 개발자') // 열정적인 개발자
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('Back-end Engineer') //Back-end Engineer
.pause(1000)
.delete()
.go(); 
