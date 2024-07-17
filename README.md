### How to reproduce (master branch)
1. Git clone this project
2. `yarn install`
3. `yarn dev`
4. Move to `http://localhost:3000/test` 
5. `layout.module.css` not working
`.pcContainer { border: 10px solid black; }`

### The cause I found (case 1)
You can checkout `test/case-1` branch or reproduce below steps.

1. Then, remove `/src/app/(group)/@mobile` folder.
2. Now, `layout.module.css` is working. (The black thick border is displayed.)

### The cause I found (case 2)
You can checkout `test/case-2` branch or reproduce below steps.

1. Undo remove `/src/app/(group)/@mobile` folder.
2. Then, edit `/src/app/(group)/layout.tsx` pc to mobile
3. Now, `layout.module.css` is working. (The red thick border is displayed.)
