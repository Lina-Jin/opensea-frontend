import styled from "@emotion/styled";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import React, { useContext } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import { WalletContext } from "../../contexts";


export const TopHeader = ()=>{
  const {login}=useContext(WalletContext)
  return <TopHeaderView>
    <Image src="/opensea_logo.svg" width={30} height={30}/>
    <Title>OpenSea</Title>

    <SearchView>
      <Autocomplete renderInput={(params) => (<TextField {...params} label={"Search items, collections, and accounts"}/>)} options={[]}/>
    </SearchView>

    <MenuView>
      <Menu>Explore</Menu>
      <Menu>Creat</Menu>
    </MenuView>

    <IconView onClick={login}>
      <WalletIcon/>
    </IconView>
    </TopHeaderView>
}
const TopHeaderView =styled.div`
  padding:  16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Title =styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left:  8px;
`
const SearchView =styled.div`
  margin-left:  64px;
  flex: 1;
`
const MenuView =styled.div`
  display: flex;
  margin-left:  64px;
`
const Menu =styled.div`
  padding: 0 16px;
  font-weight: 700;
`
const IconView =styled.div`
  margin-left:  32px;

`