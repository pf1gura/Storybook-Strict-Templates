Reproduction repo for issues with Storybook and Angular using `strictTemplates` compiler options.

Link to issue in Storybook repo: https://github.com/storybookjs/storybook/issues/13748

# Getting started
* clone the repo
* `npm install`

# The issue
* `npm run start` will throw error that `template` property in `button.component` is possibly undefined
* `npm run storybook` will not throw that error (but it should)

# Additional context
* When source of the typing errors are in template files, both compilers behave in the way descibed above. 
* When the same property is is accessed directly in TS files, both Angular and Storybook correctly throw errors. You can see that by changing `button.component.ts` file. Remove `?` on line 11.
