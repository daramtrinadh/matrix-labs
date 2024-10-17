import Image from 'next/image'
import './styles/About.css'
const About=()=>{
    return(
        <div className='about-section'>
            <h1 className='about-head'>About EthAI</h1>
            <p className='about-para'>At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
            <button className='read-more-about' type="button">Read More</button>
            <div className='about-card'>
                <div className='about-card-first'>
                    <div className='card-about'>
                        <Image src='/graph.png' width={30} height={30} alt='graph'/>
                        <h1 className='about-card-head'>Stay Ahead</h1>
                        <p className='about-card-para'>No more guesswork—get clear, trustable insights.</p>

                    </div>
                    <div className='card-about'>
                        <Image src='/wallet.png' width={30} height={30} alt='graph'/>
                        <h1 className='about-card-head'>Know Your Assets Ahead</h1>
                        <p className='about-card-para'>Always stay on top of how your investments are performing.</p>

                    </div>
                </div>
                <div className='about-card-first'>
                    <div className='card-about'>
                        <Image src='/trade.png' width={30} height={30} alt='graph'/>
                        <h1 className='about-card-head'>Simple, Not Overwhelming </h1>
                        <p className='about-card-para'>Our tools are designed to make complex market analysis easy to understand and act on.</p>

                    </div>
                    <div className='card-about'>
                        <Image src='/Tools.png' width={30} height={30} alt='graph'/>
                        <h1 className='about-card-head'>Future Proof </h1>
                        <p className='about-card-para'>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>

                    </div>
                </div>
                

            </div>
        </div>
    )
}
export default About