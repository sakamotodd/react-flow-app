import { useCallback, useState } from 'react'
import ReactFlow, {
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	Connection,
	Edge,
	EdgeChange,
	Node,
	NodeChange,
} from 'reactflow'

import { TextUpdaterNode } from '@/components/Editer/TextUpdaterNode'
import { Layout } from '@/components/Layout'
import 'reactflow/dist/base.css'
import './editer.css'

export default function Editer() {
	const nodeTypes = { textUpdater: TextUpdaterNode }
	const initialNodes = [
		{ id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
	]
	const [nodes, setNodes] = useState<Node[]>(initialNodes)
	const [edges, setEdges] = useState<Edge[]>([])

	// ノード
	const onNodesChange = useCallback(
		(changes: NodeChange[]) => setNodes(nds => applyNodeChanges(changes, nds)),
		[setNodes]
	)

	// エッジ
	const onEdgesChange = useCallback(
		(changes: EdgeChange[]) => setEdges(eds => applyEdgeChanges(changes, eds)),
		[setEdges]
	)

	// コネクト
	const onConnect = useCallback(
		(connection: Connection) => setEdges(eds => addEdge(connection, eds)),
		[setEdges]
	)
	return (
		<Layout>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				fitView
				style={{ backgroundColor: '#B8CEFF' }}
			/>
		</Layout>
	)
}
