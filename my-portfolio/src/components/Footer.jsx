import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<h3>Ahmed Kotb</h3>
				<p>Front-End Developer | React.js</p>

				<ul className="socials">
					<li>
						<a
							href="https://github.com/Ahmed-2kotb"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/ahmed-kotb-8b6056308"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a href="kotba805@gmail.com">Email</a>
					</li>
				</ul>
			</div>

			<div className="footer-bottom">
				<p>© {new Date().getFullYear()} Ahmed Kotb. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
