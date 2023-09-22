import { SectionTile } from '../sectionTitle/section-title'
import Image from 'next/image'
import './experience.scss'
export function Experience() {
    return (
        <div className='experience'>
            <SectionTile text="About" />
            <p>2 years as a development intern at the company Telecall</p>
            <div className='experience-time'>
                <div className='experience-language'>
                    <Image

                        src="/React-icon.png"
                        alt="React Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-mesure mesure-1">
                            <span>1 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image

                        src="/javaScript2.png"
                        alt="JavaScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-mesure mesure-1">
                        <span>1 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image

                        src="/html5.png"
                        alt="HTML Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-mesure mesure-3">
                        <span>3 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image

                        src="/C.png"
                        alt="C# Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-mesure mesure-2">
                        <span>2 years</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}