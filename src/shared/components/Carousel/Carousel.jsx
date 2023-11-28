import { useRef, useState } from 'react'
import { styled } from 'styled-components'
import right from '../../../assets/img/carousel-right.png'
import left from '../../../assets/img/carousel-left.png'

const CaroulselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
    z-index: 2;
    margin-top: 0px;
    overflow: hidden;
`

const CarouselContainer = styled.div` 
    display: flex;
    position: absolute;
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: scroll;
    max-width: 150%;
    margin-left: -200px;
    padding: 150px 100px;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
        display: none;
      }

    @media (max-width: 768px) {
        position: unset;
        margin: 0;
        max-width: 100%;
        margin-top: 50px;
        padding: 10px 0px;
    }
`;

const CaroulselControl = styled.div`
    position: absolute;
    bottom: 100px;
    right: -100px;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    img:first-child {
        margin-right: 20px;
    }

    img {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        position: unset;
        margin-bottom: 0px;
        margin-left: -20px;    
    }
`

const Carousel = ({children}) => {
    const isMobile = window.innerWidth <= 768
    const [disableLeft, setDisableLeft] = useState(false);
    const [disableRight, setDisableRight] = useState(false);
    const ref = useRef()

    const scrollAmount = isMobile ? 377 : 250

    const next = () => {   
        if (disableRight) return     
        ref.current.scrollTo({
            left: ref.current.scrollLeft + scrollAmount,
            behavior: 'smooth'
        })
    }

    const previous = () => {
        if (disableLeft) return
        ref.current.scrollTo({
            left: ref.current.scrollLeft - scrollAmount,
            behavior: 'smooth'
        })
    }

    const validateButtons = (e) => {
        if (e.target) {
            if (e.target.scrollLeft === 0) { 
                setDisableLeft(true)
            } else { 
                setDisableLeft(false)
            }            
            if (e.target.offsetWidth + e.target.scrollLeft >= e.target.scrollWidth) {
                setDisableRight(true)
            } else { 
                setDisableRight(false)
            }
            
        }
    }

    return (
        <CaroulselWrapper>
            <CarouselContainer onScroll={validateButtons} ref={ref}>
            {children}
            </CarouselContainer>
            <CaroulselControl>
                <img style={{ opacity: disableLeft ? "0.5" : "1" }} onClick={() => previous()} src={left} />
                <img style={{ opacity: disableRight ? "0.5" : "1" }} onClick={() => next()} src={right} />
            </CaroulselControl>
        </CaroulselWrapper>
    )
}

export default Carousel