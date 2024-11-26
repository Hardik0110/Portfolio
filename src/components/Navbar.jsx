import { FaGithub ,  FaInstagram,  FaLinkedin  } from "react-icons/fa"
import logo from "../assets/swordcrest.webp"
import { FaSquareXTwitter} from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={70} height={33} 
            alt="LOGO" />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/hardik0110/"
                target="_blank"
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
                <FaLinkedin />
            </a>
            <a href="https://github.com/Hardik0110"
            target="_blank"
            rel='noopener noreferrer'
            aria-label='GitHub'>
                <FaGithub />
            </a>
            <a href="https://leetcode.com/u/hardik0110/"
            target="_blank"
            rel='noopener noreferrer'
            aria-label='LeetCode'>
                <FaInstagram />
              </a>
            <a href="x.com"
            target="_blank"
            rel='noopener noreferrer'
            aria-label='LeetCode'>
                <FaSquareXTwitter />
            </a>
      </div>
    </nav>
  )
}

export default Navbar
