import Link from 'next/link' ;

const about = () => {
	return (
		<div>
			<h1>about</h1>
			<p>This is an about page</p>
			<ul>
				<li>
					<Link href="/">
					工事中
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default about;