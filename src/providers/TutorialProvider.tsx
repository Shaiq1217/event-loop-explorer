import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface TutorialContextType {
	isTutorialOpen: boolean;
	openTutorial: () => void;
	closeTutorial: () => void;
}

// Define the props for the provider component
interface TutorialProviderProps {
	children: ReactNode;
}

// Create the context with an initial value of undefined, as it will be set by the provider
const TutorialContext = createContext<TutorialContextType | undefined>(
	undefined
);

// Hook to use the tutorial context
export const useTutorial = () => {
	const context = useContext(TutorialContext);
	if (!context) {
		throw new Error('useTutorial must be used within a TutorialProvider');
	}
	return context;
};

// TutorialProvider component
export const TutorialProvider = ({ children }: TutorialProviderProps) => {
	const [isTutorialOpen, setIsTutorialOpen] = useState(false);
	const openTutorial = () => setIsTutorialOpen(true);
	const closeTutorial = () => setIsTutorialOpen(false);

	return (
		<TutorialContext.Provider
			value={{ isTutorialOpen, openTutorial, closeTutorial }}
		>
			{children}
		</TutorialContext.Provider>
	);
};

export default TutorialProvider;
