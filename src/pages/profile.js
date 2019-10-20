import React from 'react'
import Layout from '../components/layout'
var QRCode = require('qrcode.react');
import styled from 'styled-components'

const config = require("../../config")

import { getUser } from "../services/auth"

const SERVER = config.server;

const StyledButton = styled.a`
  margin: 10px;
  margin-bottom: 25px;
`

const OutMsg = styled.p`
  color: red;
  font-weight: bold;
  size: 18px;
`

let _this

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bchAddr: '',
      credit: 0,
      apiToken: '',
      username: '',
      message: '',
      id: '',
      userJwt: ''
    }

    _this = this
  }

  async componentDidMount() {
    const userData = await getUser()
    console.log(`userData: ${JSON.stringify(userData,null,2)}`)

    // this.data = userData

    let apiToken = ''
    if(userData.userdata.user.apiToken) apiToken = userData.userdata.user.apiToken
    //
    // this.data.credit = userData.userdata.user.credit
    // this.data.bchAddr = userData.userdata.user.bchAddr
    // console.log(`this.data: ${JSON.stringify(this.data,null,2)}`)

    // if(typeof window !== undefined) window.component = this
    this.setState(prevState => ({
      bchAddr: userData.userdata.user.bchAddr,
      credit: userData.userdata.user.credit,
      apiToken: apiToken,
      username: userData.username,
      message: '',
      id: userData.userdata.user._id,
      userJwt: userData.jwt
    }))
  }

  render() {
    return (
      <Layout>
        <div style={{padding: '50px'}}>
          <h1>Your Profile</h1>
          <ul>
            <li>Name: {this.state.username}</li>
            <li>API JWT Token: <br />{this.state.apiToken}</li>
            <li>Credit: ${this.round(this.state.credit)}</li>
            <li>BCH deposit: {this.state.bchAddr}</li>

          </ul>

          <QRCode value={this.state.bchAddr} />

          <br />
          <StyledButton href="#" className="button special" id="checkCreditBtn"
          onClick={this.getCredit}>
            Update Credit
          </StyledButton>
          <br />

          <OutMsg>{this.state.message}</OutMsg>
        </div>
      </Layout>
    )
  }

  // Round to two decimal places
  round(num) {
    let tmp = num*100
    tmp = Math.round(tmp)
    tmp = tmp / 100
    return tmp
  }

  // Button click handler. Asks server to check BCH address and update credit
  // if BCH is found.
  async getCredit(event) {
    try {
      event.preventDefault()

      // const id = thisUserData.userdata.user._id

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${_this.state.userJwt}`
        }
      };
      const data = await fetch(`${SERVER}/apitoken/update-credit/${_this.state.id}`, options);

      const credit = await data.json();
      console.log(`credit: ${credit}`)

      _this.setState(prevState => ({
        credit: credit
      }))

    } catch(err) {
      console.error(`Error in getCredit(): `, err)

      _this.setState(prevState => ({
        message: err.message
      }))
    }
  }
}



export default Profile
