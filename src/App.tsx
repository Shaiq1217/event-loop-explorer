import * as Styled from './App.styled.ts';
import CallStack from './components/Callstack/Callstack.tsx';
import Console from './components/Console/Console.tsx';
import Editor from './components/Editor/Editor.tsx';
import EventLoop from './components/EventLoop/EventLoop.tsx';
import MicroTasksQueue from './components/MicroTasksQueue/MicroTasksQueue.tsx';
import RequestAnimationFrameQueue from './components/RenderCallbacksQueue/RequestAnimationFrameQueue.tsx';
import TasksQueue from './components/TasksQueue/TasksQueue.tsx';
import Tour from './components/Tour/Tour.tsx';
import WebApiQueue from './components/WebApiQueue/WebApiQueue.tsx';
import StylesProvider from './providers/StylesProvider.tsx';
import TutorialProvider from './providers/TutorialProvider.tsx';

function App() {
	return (
		<StylesProvider>
			<TutorialProvider>
				<Styled.Layout>
					<Styled.Info>
						<Tour />
						<h2>Event Loop Explorer</h2>
						<p>
							If you enjoy this project, please ⭐ it on{' '}
							<a
								href="https://github.com/vault-developer/event-loop-explorer"
								target="_blank"
							>
								GitHub
							</a>
							!
						</p>
					</Styled.Info>
					<WelcomeModal />
					<Styled.Editor>
						<Editor />
					</Styled.Editor>
					<Styled.WebApi>
						<span id={'webApi'}>Web api</span>
						<WebApiQueue />
					</Styled.WebApi>
					<Styled.RenderCallbacks>
						<span>RequestAnimationFrame callbacks</span>
						<RequestAnimationFrameQueue />
					</Styled.RenderCallbacks>
					<Styled.CallStack>
						<span id={'callStack'}>CallStack</span>
						<CallStack />
					</Styled.CallStack>
					<Styled.Console>
						<span id={'console'}>Console</span>
						<Console />
					</Styled.Console>
					<Styled.Tasks>
						<span id={'tasks'}>Tasks Queue</span>
						<TasksQueue />
					</Styled.Tasks>
					<Styled.Microtasks>
						<span id={'microtasks'}>Microtasks Queue</span>
						<MicroTasksQueue />
					</Styled.Microtasks>
					<Styled.EventLoop>
						<p id={'eventLoop'}>Event Loop</p>
						<Styled.EventLoopBody>
							<EventLoop />
						</Styled.EventLoopBody>
					</Styled.EventLoop>
				</Styled.Layout>
			</TutorialProvider>
		</StylesProvider>
	);
}

export default App;
