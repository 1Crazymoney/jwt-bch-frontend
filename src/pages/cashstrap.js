import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import bitcoinAbc from '../assets/images/bitcoinabc-368x240.jpg'
import trezor from '../assets/images/trezor-368x240.jpg'
import slp from '../assets/images/slp-368x240.jpg'
import fulcrum from '../assets/images/fulcrum.png'
import bchn from '../assets/images/bchn.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Cashstrap - Build Your Own Full Stack'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h1>Cashstrap - Bootstrap the Cash Stack</h1>
              </header>
              <p>
                If you prefer the sovereignty of running your own infrastructure,
                and you're willing to accept the cost of managing your own{' '}
                <a
                  href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer"
                  target="_blank"
                >
                  full stack of software
                </a>
                , then the files below will help you bootstrap it.
              </p>
              <p>
                You do not need to download all the files unless you want to run
                the full stack of software for both <i>mainnet</i> and{' '}
                <i>testnet</i>. Because the files are so large, they are shared via
                the <a href="https://www.qbittorrent.org/" target="_blank">BitTorrent</a> file-sharing
                protocol. They are not available for direct download.
              </p>
              <p>
                Please help the Bitcoin Cash developer community by seeding the
                files below!
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{ border: 'solid 1px black' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={bitcoinAbc} alt="" />
                <h3>Full Node Blockchain</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-abc"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> abc-mainnet-658958-v0.22.4-10-27-2020.zip
                </li>
                <li>
                  <b>File size:</b> 137GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:de4df604efefe16e7bc4efd8f33f73de7ac539a5&dn=abc-mainnet-658958-v0.22.4-10-27-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> abc-testnet-1417941-v0.22.5-10-27-2020.zip
                </li>
                <li>
                  <b>File size:</b> 23GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:b8bf1d4c663d97c0ecc1c6ef2a5089b3ec5585e2&dn=abc-testnet-1417941-v0.22.5-10-27-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={trezor} alt="" />
                <h3>Blockbook Indexer</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-ubuntu-blockbook"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> blockbook-bch-mainnet-v0.3.2-10-28-2020.zip
                </li>
                <li>
                  <b>File size:</b> 108GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:ca760753e556781bc531957af6693cf221ab45da&dn=blockbook-bch-mainnet-v0.3.2-10-28-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> blockbook-bch-testnet-v0.3.2-10-28-2020.zip
                </li>
                <li>
                  <b>File size:</b> 24GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:64d895e5a02cacbd81c74f7750c71adc326c04e3&dn=blockbook-bch-testnet-v0.3.2-10-28-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <center><img src={fulcrum} alt="fulcrum" style={{width: '50%'}} /></center>
                <h3>Fulcrum ElectrumX Indexer</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-fulcrum"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> fulcrum-mainnet-10-28-2020.zip
                </li>
                <li>
                  <b>File size:</b> 27GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:7d563f88de6c29948362ac4c226756b5cc631067&dn=fulcrum-mainnet-10-28-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> fulcrum-testnet-10-29-2020.zip
                </li>
                <li>
                  <b>File size:</b> 4.6GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:2014c560e4550d9306f9f8dc54e3c3c2fba350b1&dn=fulcrum-testnet-10-29-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={slp} alt="" />
                <h3>SLP Token Indexer</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-slpdb"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>

              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b>{' '}
                  slpdb-mainnet-08-06-2020-647202-2f23af5122f11c24fb86026bea2b198a024c8f9b.zip
                </li>
                <li>
                  <b>File size:</b> 1.9GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:7fde5fd132282d94910a1ec5bbae9d6327fa9746&dn=slpdb-mainnet-08-06-2020-647202-2f23af5122f11c24fb86026bea2b198a024c8f9b.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
              <li>
                <b>Filename:</b>{' '}
                slpdb-testnet-08-06-2020-1399300-2f23af5122f11c24fb86026bea2b198a024c8f9b.zip
              </li>
              <li>
                <b>File size:</b> 0.02GB
              </li>
              <li>
                <a href="magnet:?xt=urn:btih:8856712e0809c6d4d5d89ad03ad10379a1d7ccd9&dn=slpdb-testnet-08-06-2020-1399300-2f23af5122f11c24fb86026bea2b198a024c8f9b.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                  Torrent magnet link
                </a>
              </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h1>BCHN</h1>
              </header>
              <p>
                FullStack.cash also maintains infrastructure on the BCHN chain.
                More infrastructure links will appear here after the chain split
                on November 15th, 2020.
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{ border: 'solid 1px black' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={bchn} alt="" />
                <h3>Full Node Blockchain</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-bchn"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> bchn-mainnet-655089-09-30-2020.zip
                </li>
                <li>
                  <b>File size:</b> 137GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:4b1a95bf1c765e4c5050883cae051e35076c8205&dn=bchn-mainnet-655089-09-30-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Want us to do the heavy lifting?</h2>
            </header>
            <p>
              FullStack.cash runs the above software so that you don't have to.
            </p>
            <ul className="actions uniform">
              <li>
                <a href="/login" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/pricing" className="button">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Homepage
