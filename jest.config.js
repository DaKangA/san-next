module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  roots: ['<rootDir>'],
  testRegex: '(.+)\\.test\\.(js?|ts?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.ts': 'ts-jest',
    '^.+\\.tsx': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
