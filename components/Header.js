import Link from 'next/link';
import "../styles.scss"

const linkStyle = {
	marginRight: 15,
}

export default function Header() {
	return (
		<div align='center'>
			<Link href="/">
				<a style={linkStyle} className='text'>Home</a>
			</Link>
			<Link href="/times">
				<a style={linkStyle} className='text'>Times</a>
			</Link>
			<Link href="/guide">
				<a style={linkStyle} className='text'>The Beginners Method</a>
			</Link>
			<Link href="/mystory">
				<a style={linkStyle} className='text'> My Story</a>
			</Link>
		</div>
	)
}