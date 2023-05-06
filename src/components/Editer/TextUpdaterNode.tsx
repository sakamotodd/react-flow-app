import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Handle, Node, Position } from 'reactflow'

export type NodeData = {
	value: number
}

type Props = {
	data: Node<NodeData>
	isConnectable: boolean
}

/**
 * カスタムノード
 */
export const TextUpdaterNode: FC<Props> = ({ data, isConnectable }) => {
	console.log('🚀 ~ file: TextUpdaterNode.tsx:16 ~ isConnectable:', isConnectable)
	console.log('🚀 ~ file: TextUpdaterNode.tsx:16 ~ data:', data)

	return (
		<div className="text-updater-node">
			<Handle type="target" position={Position.Top} isConnectable={isConnectable} />
			<div>
				<label htmlFor="text">カスタムノード</label>
				<input
					id="text"
					name="text"
					onChange={e => console.log(e.target.value)}
					className="nodrag"
				/>
				<Link to="https://reactflow.dev/docs/api/nodes/node-types/">ドキュメント</Link>
			</div>
			<Handle
				type="source"
				position={Position.Bottom}
				id="a"
				style={{ left: 10 }}
				isConnectable={isConnectable}
			/>
			<Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
		</div>
	)
}
