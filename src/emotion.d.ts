import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		custom: {
			widths: {
				eventLoopRadius: number;
				eventLoopDiameter: number;
				eventLoopWheelWidth: number;
				eventLoopPointerBorderWidth: number;
			};
			colors: {
				contrastWhiteColor: string;
				backgroundDark: string;
				backgroundNormal: string;
				listItemBackground: string;
				listItemBackgroundBorder: string;
				tooltip: {
					background: string;
					text: string;
					button: {
						background: string;
						text: string;
					};
				};
				wheel: {
					background: string;
					microtask: {
						disabled: string;
						enabled: string;
					};
					task: {
						disabled: string;
						enabled: string;
					};
					render: {
						disabled: string;
						enabled: string;
					};
				};
			};
		};
	}
}
