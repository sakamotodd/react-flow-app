import { FC, ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const LayoutStyle = {
	height: '100vh',
}

export const Layout: FC<Props> = ({ children }) => {
	return <div style={LayoutStyle}>{children}</div>
}
