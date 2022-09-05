import dollargreen from '../../assets/dollargreen.png'
import bitcoinbg from '../../assets/Bitcoinbg.png'
import bitcoinlogo from '../../assets/Bitcoinlogo.png'
import bitcointxt from '../../assets/Bitcointxt.png'
import dollar1 from '../../assets/dollar1.png'
import dollar2 from '../../assets/dollar2.png'
import price from '../../assets/Price.png'
import tvl from '../../assets/tvl.png'
import solana from '../../assets/solana/Solana.png'
import solana1 from '../../assets/solana/Solana(1).png'
import solana2 from '../../assets/solana/Solana(2).png'
import solana3 from '../../assets/solana/Solana(3).png'
import eth from '../../assets/eth/Ethereum.png'
import eth1 from '../../assets/eth/Ethereum(1).png'
import eth2 from '../../assets/eth/Ethereum(2).png'
import eth3 from '../../assets/eth/Ethereum(3).png'
import eth4 from '../../assets/eth/Ethereum(4).png'
import eth5 from '../../assets/eth/Ethereum(5).png'
import eth6 from '../../assets/eth/Ethereum(6).png'
import binance2 from '../../assets/binance/BinanceCoinB.png'
import binance from '../../assets/binance/BinanceCoin.png'
import binance1 from '../../assets/binance/BinanceCoin(1).png'
import pp from '../../assets/popularpairs.png'
import './Cards.css'
// 2nd card
import solanabigbg from '../../assets/2nd card/Solana (SOL).png'
import solana4 from '../../assets/2nd card/Solana (SOL) (1).png'
import solana5 from '../../assets/2nd card/Solana (SOL) (2).png'
import solana6 from '../../assets/2nd card/Solana (SOL) (3).png'
import solanatxt from '../../assets/2nd card/Solanatxt.png'
import solanadollar from '../../assets/2nd card/solanadollar.png'
import solanared from '../../assets/2nd card/solanared.png'
import bitcoinsmallbg from '../../assets/2nd card/Bitcoinsmallbg.png'
import bitcoinsmall from '../../assets/2nd card/Bitcoinsmall.png'
// 3rd card
import ethbigbg from '../../assets/3rd card/Ethereum (ETH).png'
import ethbig1 from '../../assets/3rd card/Ethereum (ETH) (1).png'
import ethbig2 from '../../assets/3rd card/Ethereum (ETH) (2).png'
import ethbig3 from '../../assets/3rd card/Ethereum (ETH) (3).png'
import ethbig4 from '../../assets/3rd card/Ethereum (ETH) (4).png'
import ethbig5 from '../../assets/3rd card/Ethereum (ETH) (5).png'
import ethbig6 from '../../assets/3rd card/Ethereum (ETH) (6).png'
import ethtxt from '../../assets/3rd card/Ethtxt.png'
import ethdollar from '../../assets/3rd card/ethdollar.png'
import ethred from '../../assets/3rd card/ethred.png'
// 4th card
import binancebigbg from '../../assets/4th card/Binance Coin (BNB) (2).png'
import binancebig1 from '../../assets/4th card/Binance Coin (BNB).png'
import binancebig2 from '../../assets/4th card/Binance Coin (BNB) (1).png'
import binancetxt from '../../assets/4th card/Binancetxt.png'
import binancedollar from '../../assets/4th card/binancedollar.png'
import binancegreen from '../../assets/4th card/binancegreen.png'
// 5th card
import shibabg from '../../assets/5th card/SHIBA INU (SHIB).png'
import shiba1 from '../../assets/5th card/SHIBA INU (SHIB) (1).png'
import shiba2 from '../../assets/5th card/SHIBA INU (SHIB) (2).png'
import shiba3 from '../../assets/5th card/SHIBA INU (SHIB) (3).png'
import shiba4 from '../../assets/5th card/SHIBA INU (SHIB) (4).png'
import shiba5 from '../../assets/5th card/SHIBA INU (SHIB) (5).png'
import shiba6 from '../../assets/5th card/SHIBA INU (SHIB) (6).png'
import shiba7 from '../../assets/5th card/SHIBA INU (SHIB) (7).png'
import shibatxt from '../../assets/5th card/Shibatxt.png'
import shibadollar from '../../assets/5th card/shibadollar.png'
import shibared from '../../assets/5th card/shibared.png'

const Cards = () => {
  return (
    <div className='pad'>
      <div className='card'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={bitcointxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={dollar1} /><img className='dollargreen' src={dollargreen} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle">
        <div className='mid-bitcoin'>
          <img className='mid-bitcoin-bg' src={bitcoinbg} />
          <img className='mid-bitcoin-logo' src={bitcoinlogo} />
        </div>
      </div>

      {/* 2nd card */}
      <div className='card'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={solanatxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={solanadollar} /><img className='dollargreen' src={solanared} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={bitcoinsmallbg} />
          <img className='bitcoinsmall' src={bitcoinsmall} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle2">
        <div className='mid-solana'>
          <img className='solanabigbg' src={solanabigbg} />
          <img className='solana4' src={solana4} />
          <img className='solana5' src={solana5} />
          <img className='solana6' src={solana6} />
        </div>
      </div>
      {/* 2nd card */}

      {/* 3rd card */}
      <div className='card'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={ethtxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={ethdollar} /><img className='dollargreen' src={ethred} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='bitcoinsmallbg' src={bitcoinsmallbg} />
          <img className='bitcoinsmall3' src={bitcoinsmall} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle3">
        <div className='mid-eth'>
          <img className='ethbigbg' src={ethbigbg} />
          <img className='ethbig1' src={ethbig1} />
          <img className='ethbig2' src={ethbig2} />
          <img className='ethbig3' src={ethbig3} />
          <img className='ethbig4' src={ethbig4} />
          <img className='ethbig5' src={ethbig5} />
          <img className='ethbig6' src={ethbig6} />
        </div>
      </div>
      {/* 3rd card */}

      {/* 4th card */}
      <div className='card'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={binancetxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={binancedollar} /><img className='dollargreen' src={binancegreen} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle4">
        <div className='mid-binance'>
          <img className='binancebigbg' src={binancebigbg} />
          <img className='binancebig1' src={binancebig1} />
          <img className='binancebig2' src={binancebig2} />
        </div>
      </div>
      {/* 4th card */}
      
      {/* 5th card */}
      <div className='card'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={shibatxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={shibadollar} /><img className='dollargreen' src={shibared} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle5">
        <div className='mid-shiba'>
          <img className='shibabg' src={shibabg} />
          <img className='shiba1' src={shiba1} />
          <img className='shiba2' src={shiba2} />
          <img className='shiba3' src={shiba3} />
          <img className='shiba4' src={shiba4} />
          <img className='shiba5' src={shiba5} />
          <img className='shiba6' src={shiba6} />
          <img className='shiba7' src={shiba7} />
        </div>
      </div>
      {/* 5th card */}
    </div>
  )
}

export default Cards