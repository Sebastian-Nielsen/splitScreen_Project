const chalk = require('chalk');
const ctx = new chalk.constructor({level: 3});


const lst = [
	{method: 'warn',  oldMethod: true,  fg: ctx.rgb(222, 24, 5)    },
	{method: 'info',  oldMethod: true,  fg: ctx.rgb(102,255,255)   },
	{method: 'init',  oldMethod: false, fg: ctx.rgb(71, 15, 163)   },
	{method: 'route', oldMethod: false, fg: ctx.yellowBright       },
	{method: 'time',  oldMethod: false, fg: ctx.rgb(157, 253, 3)   },
	{method: 'debug', oldMethod: false, fg: ctx.bold.whiteBright   },
	{method: 'user',  oldMethod: false, fg: ctx.rgb(255,100,0) }
	// {method: 'costum',msg: '',oldMethod: false,  fg: ctx.bold.whiteBright   }
];


lst.forEach(x => {
	const a = x.oldMethod ? console[x.method] : console['log'];

	const color = x.bg ? x.bg : x.fg;

	console[x.method] = function () {
		a.apply(
				console,
			  [color(Object.values(arguments))]
		);
	};
});

module.exports = console;

