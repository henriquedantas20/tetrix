import { styled, css } from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: ${props => props.alignItems || "start"};
    flex-direction: column;
    padding-left: ${props => props.noPadding ? "" : "70px"};
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.gradient ? "linear-gradient(70deg, rgba(122,52,107,1) 0%, rgba(83,42,88,1) 100%)" : "#FFFFFF"};
    border-radius: 28px;
    box-shadow: ${props => props.noShadow ? "" : "-10px 40px 100px 0px #ccc"};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    opacity: ${props => props.opacity};
    z-index: 2;
    border: ${props => props.border};
`;

export const CardTitle = styled.span`
    font-size: 56px;
    font-weight: 600;
    max-width: ${props => props.maxWidth};
    color: ${props => props.color};
    margin-top: -30px;
    line-height: 56px;
`;

export const CardInfo = styled.span`
    font-size: 24px;
    font-weight: 300;
    max-width: ${props => props.maxWidth};
    color: ${props => props.color};
    margin-top: 50px;
`;

export const CardAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background-color: #EB007F;
    position: absolute;
    top: -75px;
    left: 35%;
`;

export const CardText = styled.span`
    font-size: ${props => props.size};
    color: ${props => props.color};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.weight};  
    text-align: center;
    margin-top: ${props => props.mt};
`;

export default Card;