import Link from 'next/link';

const linkStyle = {
	marginRight: 15
}

export default function Header() {
	return (
		<div align='center'>
			<Link href="/">
				<a style={linkStyle}>Home</a>
			</Link>
			<Link href="/guide">
				<a style={linkStyle}>The Beginners Method</a>
			</Link>
		</div>
	)
}