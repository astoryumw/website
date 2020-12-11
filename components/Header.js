import Link from 'next/link';

const linkStyle = {
	marginRight: 15
}

export default function Header() {
	return (
		<div align='center'>
			<Link href="/timer">
				<a style={linkStyle}>Timer</a>
			</Link>
		</div>
	)
}