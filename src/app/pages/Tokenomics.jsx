import Image from 'next/image'
import './styles/Tokenomics.css'
const Tokenomics=()=>{
    return(
        <div>
            <h1 className='tokenomics-head'>Tokenomics</h1>
            <div className="tokenomics-section">
                
                <Image src='/Donut.png' height={60} width={60} alt='Donut' className='donut-image'/>
                <div className='tokenomics-details'>
                    <p>Name : EthAi</p>
                    <p>Token Name :$EthAi</p>
                    <p>Token Standard:ERC20</p>
                    <p>Blockchain:Etherium</p>
                    <p>Total Supply:100 Million</p>
                    <p>Tax:5%/5%</p>

                </div>
            </div>
        </div>

    )
}
export default Tokenomics