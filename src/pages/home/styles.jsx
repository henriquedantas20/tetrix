import { styled } from 'styled-components'
import arrowDown from '../../assets/img/arrow-down.png'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 180px;
`;

const Logo = styled.img`
    width: 180px;
    height: auto;
    cursor: pointer;
`

const Nav = styled.nav`
    display: flex;    
    justify-content: center;
    align-items: center;

    &:last-child span {
        margin-right: 60px;
    }
`

const NavLabel = styled.span`
    position: relative;
    font-size: 18px;
    padding: 0px 50px;
    color: #fff;
    font-family: 'Geneva', sans-serif;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:after {
        content: url(${arrowDown});
        margin-left: 10px;
        position: absolute;
        top: -2px;
        right: 25px        
    }
`;

const Button = styled.button`
    background-color: #EB007F;
    outline: none;
    border: none;
    width: 230px;
    height: 56px;
    border-radius: 30px;
    color: #FFF;
    margin-left: 200px;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Geneva', sans-serif;

    &:hover {
        opacity: 0.7;
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: ${props => props.position === "right" ? "end" : "start"};
    width: 80%;
    height: auto;
    min-height: ${props => props.minHeight};
    margin-top: ${props => props.marginTop};   
    padding: 100px 0px;
    position: relative;
    z-index: 2;
`;

const SectionTitle = styled.span` 
    font-size: ${props => props.size || "72px"};
    font-weight: 500;
    max-width: ${props => props.maxWidth};
    color: ${props => props.color};
    margin-left: ${props => props.ml};
    margin-top: ${props => props.mt};
    font-family: 'Ubuntu', sans-serif;
    text-align: ${props => props.textAlign};
    z-index: 2;
`;

const SectionSubtitle = styled.span` 
    font-size: 27px;
    font-weight: 400;
    max-width: ${props => props.maxWidth};
    color: ${props => props.color};
    margin-left: ${props => props.ml};
    margin-top: ${props => props.mt};
    font-family: 'Ubuntu', sans-serif;
`;

const SectionDescription = styled.span`
    font-size: 30px;
    font-weight: 100;
    max-width: ${props => props.maxWidth};
    color: ${props => props.color};
    margin-top: 50px;
    font-family: 'Ubuntu', sans-serif;
`;

const SectionButton = styled.button`
    background-color: ${props => {
        switch(props.variant) {
        case "primary":
            return "#EB007F"            
        case "secondary":
            return "#FFFFFF"            
        case "dark":
            return "#280843"            
        default:
            return "#FFFFFF"            
        }        
    }};
    color: ${props => props.variant === "primary" || props.variant === "dark" ? "#FFFFFF" : ""};
    outline: none;
    border: none;
    width: 200px;
    height: 52px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    margin-top: ${props => props.mt || "50px"};
    margin-right: ${props => props.mr};
    margin-left: ${props => props.ml};
    font-size: 16px;
    z-index: 2;
    justify-self: ${props => props.justify};

    &:hover {
        opacity: 0.7;
    }
`

const Footer = styled.footer`
    width: 120%;
    margin-left: -350px;
    min-height: 900px;
    padding-left: 150px;
    justify-content: center;
    padding-top: 200px;
    background-color: #280843;
    display: grid;
    grid-template-columns: 15% 15% 15% 15% 15%;
`;

const FooterColumn = styled.div`    
    width: 80%;
    height: 500px;
`;

const FooterColumnTitle = styled.div`
    font-size: 28px;
    color: #fff;
    margin-bottom: 10px;
`

const FooterColumnText = styled.div`
    font-size: 22px;
    color: #fff;
    margin-bottom: 10px;
    font-weight: 100;
`

const S = {
    Header,
    Logo,
    Nav,
    NavLabel,
    Button,
    Section,
    SectionTitle,
    SectionDescription,
    SectionButton,
    SectionSubtitle,
    Footer,
    FooterColumn,
    FooterColumnTitle,
    FooterColumnText
}

export default S