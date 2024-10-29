import { Step } from 'react-joyride';

export const STEPS: Step[] = [
	{
		target: '#eventLoop',
		placement: 'top',
		content:
			'This is the event loop. It shows the order in which the code is executed. ' +
			'The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.',
	},
	{
		target: '#callStack',
		placement: 'bottom',
		content:
			'This is the call stack. It keeps track of the function calls in the code. ' +
			'When a function is called, it is added to the call stack. When the function completes, it is removed from the call stack.',
	},
	{
		target: '#webApi',
		placement: 'bottom',
		content:
			'This is the Web API. It provides asynchronous functionality to JavaScript. ' +
			'When an asynchronous operation is called, it is passed to the Web API for processing. Once the operation is complete, it is added to the task queue.',
	},
	{
		target: '#console',
		placement: 'bottom',
		content:
			'This is the console. It displays the output of the code as it is executed. ' +
			'You can use the console to log messages, errors, and other information during the execution of the code.',
	},
	{
		target: '#tasks',
		placement: 'bottom',
		content:
			'This is the tasks queue. It holds the tasks that are scheduled to be run by the event loop. ' +
			'Tasks are added to the queue when a new JavaScript program is executed, an event is dispatched, or a timeout or interval is fired.',
	},
	{
		target: '#microtasks',
		placement: 'bottom',
		content:
			'This is the microtasks queue. It holds the microtasks that are scheduled to be run by the event loop. ' +
			'Microtasks are executed after the current task completes, but before the next task is picked up from the task queue.',
	},
	{
		target: '#runButton',
		placement: 'bottom',
		content: 'Click here to run the code',
	},
];
