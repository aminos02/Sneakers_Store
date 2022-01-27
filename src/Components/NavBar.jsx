import React from 'react';
import styled from 'styled-components';


const NavBar = ({setStyleWrapper}) => {
    return (
        <Nav>
            <NavTop >
                    <img src="images/sneakers.png" alt="" />
                    <Search> 
                        <SearchInput/>
                        <img width={20} height={20}  placeholder='Search...' src='images/search.png'/>
                    </Search>
                    <LimitedOffer>
                        Limited Offer!
                    </LimitedOffer>
            </NavTop>    
            <NavBottom>
                <MenuItem onClick={()=>{setStyleWrapper('0')}}>AIR FORCE</MenuItem>
                <MenuItem onClick={()=>{setStyleWrapper('-100')}}>JORDAN</MenuItem>
                <MenuItem onClick={()=>{setStyleWrapper('-200')}}>BLAZER</MenuItem>
                <MenuItem onClick={()=>{setStyleWrapper('-300')}}>CRATER</MenuItem>
                <MenuItem onClick={()=>{setStyleWrapper('-400')}}>HIPPIE</MenuItem>
            </NavBottom>        
        </Nav>
    );
};

const Nav=styled.nav`
    background-color: #111;
    color: white;
    padding: 20px 50px;
    
`
const NavTop=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Search=styled.div`
display: flex;
align-items: center;
background-color: gray;
padding: 10px 20px;
border-radius: 10px;
`
const SearchInput=styled.input`
    border:none;
    font-size: 1rem;
    background-color: transparent;
    color: white;
    &:focus{
        outline:none;
    }
    &::placeholder{
        color:lightgray;

    }
`

const LimitedOffer=styled.span`
font-size: 20px;
border-bottom: 2px solid green;
cursor: pointer;
`
const NavBottom=styled.ul`
display:flex;
list-style: none;
justify-content: center;
margin-bottom: 0;
`
const MenuItem=styled.li`
margin: 0 1rem;
cursor: pointer;
color: lightgray;
font-weight: 400;
font-size: larger;
position: relative;
transition: all 1s;
&:before{
    position: absolute;
    content: "";
    right:0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background-color: white;
    transition: all 1s;
    transform-origin: left;
}
&:hover::before{
    width: 100%;
    
}
&:hover{
    color: white;
}
`











export default NavBar;
