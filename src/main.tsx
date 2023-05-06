import { Routes } from 'generouted/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Routes />
	</StrictMode>
)
