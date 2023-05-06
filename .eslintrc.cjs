module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['/node_modules/', '/dist/'],
	plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'no-unused-vars': 'off',
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
				'newlines-between': 'always', // import groups の間 1行あける
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: { order: 'asc', caseInsensitive: true }, // 大文字小文字関係なくアルファベット順にしたい
				pathGroups: [
					{ pattern: 'src/types/**', group: 'internal', position: 'before' },
					{ pattern: 'src/repositories/**', group: 'internal', position: 'before' },
				],
			},
		],
	},
}
