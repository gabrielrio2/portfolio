import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkIcon } from "../icons/link-icon";
import { TwtIcon } from "../icons/twt-icon";

import './social-btns.scss'

export function SocialBtns() {
    return (
        <div className="social">
            <a href="">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-nobre-a28064129/"><LinkIcon/>
            </a>
            
            <a href="https://github.com/gabrielrio2"><GitIcon/>
            </a>
            
            <a href=""><TwtIcon/>
            </a>
            
        </div>
    )
}