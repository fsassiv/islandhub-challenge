module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'chore', name: 'chore:    Build process or helper' },
    { value: 'docs', name: 'docs:     Documentation' },
    { value: 'style', name: 'style:    Formatting' },
    { value: 'refactor', name: 'refactor: Code improvement' },
    { value: 'perf', name: 'perf:     Performance' },
    { value: 'test', name: 'test:     Tests' },
    { value: 'revert', name: 'revert:   Revert' },
    { value: 'note', name: 'note:     General annotation' },
  ],
  // scopes: [
  //   { name: 'Button' },
  //   { name: 'Header' },
  //   { name: 'LoginForm' },
  //   { name: 'Dashboard' },
  //   { name: 'Auth' },
  //   { name: 'API' },
  //   { name: 'Utils' },
  // ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  subjectLimit: 100,
  messages: {
    type: "Select the type of change you're committing:",
    // scope: 'Specify the component(s) updated (optional):',
    subject: 'Write a short, imperative description of the change:',
    breaking: 'List any breaking changes (if applicable):',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
};
