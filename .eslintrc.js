// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 禁止function定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的key
    "no-dupe-keys": 2,
    // 禁止出现重复的case标签
    "no-duplicate-case": 2,
    // 禁止对catch子句的参数重新赋值
    "no-ex-assign": 2,
    /**
     * 【================================================ Best Practices ================================================】
     * 这些规则是关于最佳实践的，帮助你避免一些问题。
     */
    // 要求使用 ===和 !==
    eqeqeq: [2, "allow-null"],
    // 禁止eval()
    "no-eval": 2,
    // 禁止对String，Number 和 Boolean 使用new操作符
    "no-new-wrappers": 2,
    // 禁止多次声明同一变量
    "no-redeclare": 2,
    // 禁止在return语句中使用赋值语句
    "no-return-assign": [2, "except-parens"],
    // 禁止自我赋值
    "no-self-assign": 2,
    // 禁止自我比较
    "no-self-compare": 2,
    // 禁用逗号操作符
    "no-sequences": 2,
    /**
     * 【================================================ ECMAScript 6 ================================================】
     * 这些规则只与ES6有关，即通常所说的ES2015。
     */
    // 强制箭头函数前后使用一致的空格
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 禁止修改const声明的变量
    "no-const-assign": 2,
    // 禁止类成员中出现重复的名称
    "no-dupe-class-members": 2,
    /**
     * 【================================================ Stylistic Issues ================================================】
     * 这些规则是关于代码风格的。
     */
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, "never"],
    // 禁止或强制在代码块中开括号前和闭括号后有空格  { return 11 }
    "block-spacing": [2, "always"],
    // 强制在代码块中使用一致的大括号风格
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: true
      }
    ],
    // 强制使用驼峰拼写法命名规定
    camelcase: [
      0,
      {
        properties: "always"
      }
    ],
    // 要求或禁止文件末尾存在空行
    "eol-last": 2,
    // 强制使用一致的缩进
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    // 禁止行尾空格
    "no-trailing-spaces": 2,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unneeded-ternary": [
      2,
      {
        // 允许表达式作为默认的赋值模式
        defaultAssignment: true
      }
    ],
    // 强制在块之前使用一致的空格
    "space-before-blocks": [2, "always"],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2, "never"],
    // 要求操作符周围有空格
    "space-infix-ops": 2,
    // 强制在注释// 或/*使用一致的空格
    "spaced-comment": [
      1,
      "always",
      {
        markers: [
          "global",
          "globals",
          "eslint",
          "eslint-disable",
          "*package",
          "!",
          ","
        ]
      }
    ],
    // 强制在大括号中使用一致的空格
    "object-curly-spacing": [
      2,
      "always",
      {
        objectsInObjects: false
      }
    ]
  }
};
