import './styles/OurFeatures.css'
import Image from 'next/image'
const OurFeatures=()=>{
    return(
        <div className="our-features">
            <div className='our-features-first-part'>
                <div className='trade-card'>
                    <Image src='/trade.png' height={100} width={100} alt="trade" className='trade-image'/>
                    <h1 className='trade-head'>Trade Optimise</h1>
                    <p className='trade-para'>Find the right moments to buy or sell, 
                        with personalized trade suggestions designed to help you make the most of every opportunity.</p>
                </div>
                <div className='market-insight'>
                    <div className='market-insight-one'>
                        <div className='market-insight-details'>
                            <h1 className='trade-head'>Market Insight</h1>
                            <p className='trade-para'>Find the right moments to buy or sell, 
                                with personalized trade suggestions designed to help you make
                                 the most of every opportunity.
                            </p>
                        </div>
                        <div className='market-insight-inside-two'>
                            <p className='market-para'>egu</p>
                        </div>
                    </div>
                    <div className='market-insight-two'>
                        <h1 className="our-features-head">OUR FEATURES</h1>
                    </div>       
                </div>
                <div className='risk-guard-card'>
                    <Image src='/risk-guard.png' height={100} width={100} alt="trade" className='trade-image'/>
                    <h1 className='trade-head'>Risk Guard</h1>
                    <p className='trade-para'>Get alerts on market swings and potential risks before they impact your portfolio.
                         This agent helps you navigate volatility and stay prepared for anything.

                    </p>
                </div>


            </div>
            <div className="our-features-second-part">
                <div className="portfolio-sync-card">
                    <div className='portfolio-details'>
                        <h1 className='trade-head'>Portfolio Sync</h1>
                        <p className='trade-para'>Easily manage your portfolio. 
                            You'll always know what you own, how it's performing, 
                            and where it’s headed.
                        </p>
                    </div>
                    <Image src="/portfolio.png" width={130} height={150} className='portfolio-image'/>
                </div>
                <div className="oppurtunity-socout-card">
                    <div className='portfolio-details'>
                        <h1 className="trade-head">Oppurtunity Socout Card</h1>
                        <p className='trade-para'>Find exciting new projects, events and tokens that others might be missing.
                             Identifying promising opportunities early, so you never miss out on the next big thing.
                        </p>
                    </div>
                    <Image src="/oppurtunity-image.png" width={130} height={150} className='oppurtunity-image'/>

                </div>


            </div>

            
        </div>
    )
}
export default OurFeatures