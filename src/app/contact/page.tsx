import Link from 'next/link' ;

const contact = () => {
	return (
		<div>
			<h1>contact</h1>
			<p>This is an contact page</p>
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

export default contact;