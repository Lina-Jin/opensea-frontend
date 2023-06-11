import styled from "@emotion/styled";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import React, { useContext } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import { WalletContext } from "../../contexts";
import Link from "next/link";
import { useRouter } from "next/router";

export const TopHeader = () => {
  const { login } = useContext(WalletContext);

  const router = useRouter();

  //엔터키를 누를시 리스트 페이지로 이동
  const onKeyDown = (e: any) => {
    if (
      //이더리움 주소일시 만 이동
      e.code === "Enter" &&
      /^(0x)?[\wa-zA-Z]{40}$/.test(e.target.value || "")
    ) {
      router.push(`/list/${e.target.value}`);
    }
  };

  return (
    <TopHeaderView>
      <Link href={"/"}>
        <Logo>
          <Image src="/opensea_logo.svg" width={30} height={30} />
          <Title>OpenSea</Title>
        </Logo>
      </Link>

      <SearchView>
        <Autocomplete
          renderInput={(params) => (
            <TextField
              {...params}
              label={"Search items, collections, and accounts"}
              onKeyDown={onKeyDown}
            />
          )}
          options={[]}
        />
      </SearchView>

      <MenuView>
        <Menu>Explore</Menu>
        <Link href="/create">
          <Menu>Creat</Menu>
        </Link>
      </MenuView>

      <IconView onClick={login}>
        <WalletIcon />
      </IconView>
    </TopHeaderView>
  );
};
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
const TopHeaderView = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 8px;
`;
const SearchView = styled.div`
  margin-left: 64px;
  flex: 1;
`;
const MenuView = styled.div`
  display: flex;
  margin-left: 64px;
`;
const Menu = styled.div`
  padding: 0 16px;
  font-weight: 700;
  cursor: pointer;
`;
const IconView = styled.div`
  margin-left: 32px;
`;
