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
			<Link href="/class">
				<a style={linkStyle} className='text'>DGST Project</a>
			</Link>
			<Link href="/other">
				<a style={linkStyle} className='text'>Other Stuff</a>
			</Link>
			<Link href="/browserTest">
				<a style={linkStyle} className='text'>Testing</a>
			</Link>
		</div>
	)
}
