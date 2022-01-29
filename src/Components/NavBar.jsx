import React from 'react';
import styled from 'styled-components';


const NavBar = ({setIndex}) => {
    return (
        <Nav id='nav'>
            <NavTop >
                    <img src="images/sneakers.png" alt="" />
                    <Search> 
                        <SearchInput/>
                        <img width={20} height={20} alt="search" placeholder='Search...' src='images/search.png'/>
                    </Search>
                    <LimitedOffer>
                        Limited Offer!
                    </LimitedOffer>
            </NavTop>    
            <NavBottom >
                <MenuItem onClick={()=>{setIndex('0')}}>AIR FORCE</MenuItem>
                <MenuItem onClick={()=>{setIndex('1')}}>JORDAN</MenuItem>
                <MenuItem onClick={()=>{setIndex('2')}}>BLAZER</MenuItem>
                <MenuItem onClick={()=>{setIndex('3')}}>CRATER</MenuItem>
                <MenuItem onClick={()=>{setIndex('4')}}>HIPPIE</MenuItem>
            </NavBottom>        
        </Nav>
    );
};

const Nav=styled.nav`
    background-color: #111;
    color: white;
    padding: 20px 50px;
    @media screen and (max-width:780px){
        padding: 20px;
    }
    
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
@media screen and (max-width:780px){
        display: none;
    }
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
padding: 0;
display:flex;
list-style: none;
justify-content: center;
margin-bottom: 0;
@media screen and (max-width:780px){
    flex-wrap: wrap;
}
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
@media screen and (max-width:780px){
    margin: 20px;
    font-weight: 700;
    font-size: 20px;
  }
`











export default NavBar;
