import js from "@eslint/js";
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		ignores: ['dist', 'node_modules'],
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'off',
		},
	},
];
